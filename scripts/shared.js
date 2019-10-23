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

function RevProject(projectId,language, customerName,size, price, dueTime) {
    this.ProjectId = projectId;
    this.Language = language;
    this.CustomerName = customerName;
    this.Size = size;
    this.Price = price;
    this.DueTime = dueTime;
}

var SupportedTranslations = ['ru2en','uk2en','en2ru','en2uk'];

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
