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
    this.IsWords = isWords;
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
    soundName: 'soundName',
    rules: 'rules'
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
    var startLong = -1;
    var endLong = -1;

    var temp = new Date();
    var y = temp.getFullYear();
    var m = temp.getMonth();
    var d = temp.getDate();


    // TODO: need to add functionality for checking when date is changed and recreate rules.

    if(start == 0 && end == 0){

        startLong = new Date(y,m,d,start,0,0).getTime();
        endLong = new Date(y,m,d,23,59,59).getTime();

    }else if (start > end){
        var current = new Date().getDate();

        startLong = new Date(y,m,current,start,0,0).getTime();
        endLong = new Date(y,m,current + 1,end,59,59).getTime();

    } else{
        startLong = new Date(y,m,d,start,0,0).getTime();
        endLong = new Date(y,m,d,end,59,59).getTime();
    }

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
        start: function(){
            return start;
        },
        end: function() {
            return end;
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
