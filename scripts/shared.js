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


var Rule = function (id, startTime, endTime, hoursCount, minutesCount, secondsCount ) {
    var id = id;
    var start = +startTime;
    var end = +endTime;
    var hours = +hoursCount;
    var minutes = +minutesCount;
    var seconds = +secondsCount;
    var startLong = -1;
    var endLong = -1;


    function calculateDates() {
        var temp = new Date();
        var y = temp.getFullYear();
        var m = temp.getMonth();
        var d = temp.getDate();

        if(start == 0 && end == 0){
            startLong = new Date(y,m,d,start,0,0).getTime();
            endLong = new Date(y,m,d,23,59,59).getTime();

        } else{
            startLong = new Date(y,m,d,start,0,0).getTime();
            endLong = new Date(y,m,d,end,59,59).getTime();
        }
    }

    return {
        isValidTime: function (time) {
            calculateDates();
            console.log(startLong + ' - '+ time + ' - ' + endLong);
            return startLong <= time && time <= endLong;
        },
        isMinValid: function (min) {
            return minutes <= min;
        },
        isSecValid: function (sec) {
            return seconds <= sec;
        },
        isHoursValid(hr){
            return hours <= hr;
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
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }
        }
    }
};
