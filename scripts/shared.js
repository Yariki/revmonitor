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