chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "show") {
        chrome.tabs.query({active: true},result => {
            if(result.length > 0){
                chrome.pageAction.show(result[0].id);
            }
        });
    }
});

var notificationController = (function () {

    var messages = {
        one: "One project was claimed.",
        more: ' projects were claimed.'
    };

    var opts = {
        notification: false,
        audioNotification: false,
        soundName: ''
    };

    chrome.storage.sync.get([Settings.notificationEnabled,
                                   Settings.soundNotificationEnabled,
                                   Settings.soundName],function (items) {

        opts.notification = items[Settings.notificationEnabled] !== undefined && items[Settings.notificationEnabled];
        opts.audioNotification = items[Settings.soundNotificationEnabled] !== undefined && items[Settings.soundNotificationEnabled];
        opts.soundName = items[Settings.soundName] != undefined ? items[Settings.soundName] : '';
    });

    function messageNotification(data) {
        var opt = {
            type: 'basic',
            title: 'Claimed.',
            message: data.count == 1 ? messages.one : data.count + messages.more,
        };
        chrome.notifications.create(opt, null);
    }

    function soundNotification() {
        var audio = new Audio(Audios[opts.soundName]);
        audio.play();
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
                    type: 'basic',
                    title: 'Found some projects',
                    message: 'We found some unclaimed projects',
                };
                chrome.notifications.create(opt, null);
            }
        }
    }
})();

var claimController = (function (notification) {
    var _this = this;

    var parseProjects = function (projects) {
        for (let i = 0; i < projects.length; i++) {
            console.log(projects[i]);
        }
    }

    return {
        init: function () {
            chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
                if(msg.message == RevMessages.FreeProjects){
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
            state.timer = setInterval('updateTab(' + state.tabId + ')',state.interval * 1000);
            state.isRunning = true;
        };

        var stopMonitoring = function(data){
            var state = registeredTabs[data.tab.id];
            if(state !== undefined){
                clearInterval(state.timer);
                state.timer = null;
                state.isRunning = false;
            }
        };

        var updateTab = function(tabId){
            var state = registeredTabs[tabId];
            if(!state || !state.tab){
                return;
            }
            chrome.tabs.update(tabId,{url: state.tabUrl});
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
                stopMonitoring(data);
            }
        }
})();

claimController.init();
