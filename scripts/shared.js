function RegisterData(tab,interval) {
    this.tab = tab;
    this.interval = interval;
}

function State(tabId,interval) {
    this.tabId = tabId;
    this.interval = interval;
    this.timer = null;
    this.isRunning = false;
    this.tabUrl = '';
}

function RevMessage(message, payload) {
    this.message = message;
    this.payload = payload;
}

function RevProject(projectId,language, customerName,length, payTotal, payMin, dueTime) {
    this.ProjectId = projectId;
    this.Language = language;
    this.CustomerName = customerName;
    this.Length = length;
    this.PayTotal = payTotal;
    this.PayMin = payMin;
    this.DueTime = dueTime;
}

var SupportedTranslations = ['Russian', 'English', 'Ukrainian'];

var DomStrings = {
    projectTable: '.find-work-projects',
    findWorkRow: 'div.find-work-row:not(.table-header)',
    contentRow: '.content-row',
    dataProjectAttr: 'data-project',
    tableCell: '.table-cell',
    claimForm: {
        formId: '#claim-form',
        revUrl: 'https://www.rev.com/',
        actionAttr:'action'
    },
    detailsNotice: '.notice',
    claimError: '.error',
    claimErrorPage: '.error-page'
};

var Settings = {
    notificationEnabled: 'notificationEnabled',
    soundNotificationEnabled: 'soundNotificationEnabled',
    soundName: 'soundName'
};
Object.freeze(Settings);

var RevMessages = {
    FreeProjects: 'freeprojects'
};
Object.freeze(RevMessages);

var Audios = {
    bell : '',
    cuckoo: ''
};

Audios.bell = chrome.extension.getURL('audio/bell.ogg');
Audios.cuckoo =chrome.extension.getURL('audio/cuckoo.ogg');


var Rule = function (id, startTime, endTime, wordsCount, pagesCount ) {
    var id = id;
    var start = +startTime;
    var end = +endTime;
    var words = +wordsCount;
    var pages = +pagesCount;

    var startLong = new Date(0,0,0,start,0,0).getTime();
    var endLong = new Date(0,0,0,end,0,0).getTime();


    return {
        isValidTime: function (time) {
            return startLong <= time && time <= endLong;
        },
        isWordCountSuitable: function (projectWords) {
            return words <= projectWords;
        },
        isPageCountSuitable: function (projectPages) {
            return pages <= projectPages;
        },
        getId: function(){
            return id;
        },
        getSettingObject: function () {
            return {
                start: start,
                end: end,
                words: words,
                pages: pages
            }
        }
    }
};
