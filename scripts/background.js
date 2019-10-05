chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "show") {
        chrome.tabs.query({active: true},result => {
            if(result.length > 0){
                chrome.pageAction.show(result[0].id);
            }
        });
    }
});

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
            //state.timer = setInterval('updateTab(' + state.tabId + ')',state.interval * 1000);
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



