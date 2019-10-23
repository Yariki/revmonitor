var Urls = (function () {
    return {
        Details: 'https://www.rev.com/workspace/project/',
        Claim: 'https://www.rev.com/workspace/ClaimTranslation?projectNumber=',
        RevUrl: 'https://www.rev.com/'
    }
})();

var ResultMessages = (function () {
    return {
        projectIsNotAvailable: 'Project is not available',
    }
})();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "show") {
        chrome.tabs.query({active: true},result => {
            if(result.length > 0){
                chrome.pageAction.show(result[0].id);
            }
        });
    }
});

chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, tab => {
        showPageActionForRev(tab);
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    showPageActionForRev(tab);
});

function showPageActionForRev(tab) {
    if(!tab.url.startsWith(Urls.RevUrl)){
        return;
    }
    chrome.pageAction.show(tab.id);
}



var notificationController = (function () {

    var opts = {
        notification: false,
        audioNotification: false,
        soundName: ''
    };

    var iconPath = chrome.extension.getURL('icons/favicon.png');

    chrome.storage.sync.get([Settings.notificationEnabled,
                                   Settings.soundNotificationEnabled,
                                   Settings.soundName],function (items) {

        opts.notification = items[Settings.notificationEnabled] !== undefined && items[Settings.notificationEnabled];
        opts.audioNotification = items[Settings.soundNotificationEnabled] !== undefined && items[Settings.soundNotificationEnabled];
        opts.soundName = items[Settings.soundName] != undefined ? items[Settings.soundName] : '';
    });

    function messageNotification(data) {
        var opt = {
            iconUrl: iconPath,
            type: 'basic',
            title: 'Claimed.',
            message: 'Project <' + data.ProjectId  + '> was claimed!',
        };
        chrome.notifications.create('claimed',opt, function () {});
    }

    function soundNotification() {
        var audio = new Audio(Audios[opts.soundName]);
        audio.play();
    }

    function message(msg) {
        var opt = {
            iconUrl: iconPath,
            type: 'basic',
            title: 'Claimed.',
            message: msg,
        };
        chrome.notifications.create('message',opt, function () {});
    }

    return {
        claimedNotification : function (data) {
            if(opts.notification){
                messageNotification(data);
            }
            if(opts.audioNotification){
                soundNotification();
            }
        },
        foundNotification: function () {
            if(opts.notification){
                var opt = {
                    iconUrl: iconPath,
                    type: 'basic',
                    title: 'Found some projects',
                    message: 'We found some unclaimed projects',
                };
                chrome.notifications.create('found',opt, function () {});
            }
        },
        showMessage: function (msg) {
            message(msg);
        }
    }
})();

var claimController = (function (notification) {
    var _this = this;

    var parseProjects = function (projects) {

        //notification.foundNotification();
        console.log('found some projects');
        for (let i = 0; i < projects.length; i++) {
            console.log([projects[i]]);
        }

        for (let i = 0; i < projects.length; i++) {
            var project = projects[i];
            if(!SupportedTranslations.includes(project.Language)){
                continue;
            }
            console.log(projects[i]);
            $.get(Urls.Details + project.ProjectId, (data, status) => {
                processDetails(data,status,project);
            });
        }
    };

    var processDetails = function(data, status, project){
        console.log(data);
        var doc = (new DOMParser()).parseFromString(data,"text/html"); // TODO: detailsPageSource only for testing purpose, need to parse 'data'
        var detailsPage =  $(doc);
        if(isNoticed(doc)){
            console.log("Project is not available: " + project.ProjectId);
            return;
        }
        var form = $(detailsPage).find(DomStrings.claimForm.formId).first();
        if(form === undefined || form === null){
            return;
        }

        var action =  Urls.Claim + project.ProjectId; //$(form).attr('action');
        //action = action.startsWith(DomStrings.claimForm.revUrl) ? action : DomStrings.claimForm.revUrl + action;
        var dataPost = '';
        var hiddens = $(form).find('input[type=hidden]');
        hiddens.each(function (index, element) {
            dataPost += '&' + $(element).attr('name') + '=' + $(element).attr('value');
        });
        if(action !== undefined && dataPost !== ''){
            $.ajax({
                method:'POST',
                url: action,
                data: dataPost
            })
                .done((data) => {
                    processClaim(data,project);
                })
                .fail((data,status) => {
                    processErrorClaim(data);
                })
        }
    };

    var processClaim = function (data,project) {
        console.log(data);

        if(isError(data)){
            console.log("Project is claimed or not available: " + project.ProjectId);
            return;
        }
        console.log('Done! Project Claimed ');
        notification.claimedNotification(project)
    };

    var processErrorClaim = function (data) {
        console.log('Fail:' + data);
    };

    var isNoticed = function (doc) {
      var noticed = doc.querySelector(DomStrings.detailsNotice);
      return noticed !== null  && noticed.innerText === 'Project is not available';
    };

    var isError = function (data) {
        var doc = (new DOMParser()).parseFromString(data, "text/html");
        var projectIsNotAvailable = data.indexOf(ResultMessages.projectIsNotAvailable);
        var errorPage = doc.querySelector(DomStrings.claimErrorPage);
        return projectIsNotAvailable || errorPage !== null;
    };

    return {
        init: function () {
            chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
                if(msg.message === RevMessages.FreeProjects){
                    parseProjects(msg.payload);
                }
            });
        }
    }

})(notificationController);

var updateController = (function () {
        var registeredTabs = {};

        var isRegistered = function (tabId) {
            return registeredTabs[tabId] !== undefined;
        };

        var getState = function (tabId) {
            var state = registeredTabs[tabId];
            return state;
        };

        var startMonitoring = function(data){
            if(!isRegistered(data.tab.id)){
                registeredTabs[data.tab.id] = new State(data.tab.id, +data.interval);
            }
            var state = registeredTabs[data.tab.id];
            state.interval = +data.interval;
            state.tabUrl = data.tab.url;
            state.timer = setInterval(function () {
                updateTab(state.tabId);
            },state.interval * 1000);
            state.isRunning = true;
        };

        var stopMonitoring = function(tabId){
            var state = registeredTabs[tabId];
            if(state !== undefined){
                clearInterval(state.timer);
                state.timer = null;
                state.isRunning = false;
            }
        };

        var updateTab = function(tabId){
            var state = registeredTabs[tabId];
            if(!state){
                return;
            }
            chrome.tabs.update(state.tabId,{url: state.tabUrl});
            console.log("Update: " + state.tabUrl + ' ' + state.tabId);
        };

        return {
            isRegistered: function (tabId) {
                return isRegistered(tabId);
            },
            getState : function (tabId) {
                return getState(tabId);
            },
            start : function (data) {
                startMonitoring(data);
            },
            stop: function (data) {
                stopMonitoring(data.tab.id);
            }
        }
})();

claimController.init();
