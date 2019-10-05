
$(document).ready(function () {
    var updCtrl = chrome.extension.getBackgroundPage().updateController;
    var tab = {};
    chrome.tabs.query({active:true}, tabs => {
        if(tabs.length === 0){
            return;
        }
        tab = tabs[0];
        if(updCtrl.isRegistered(tab.id)){
            var state = updCtrl.getState(tab.id);
            $('#interval').val(state.interval);
            $('#start').addClass(!state.isRunning ? 'enabled' : 'disabled');
            $('#stop').addClass(state.isRunning ? 'enabled' : 'disabled');
        } else {
            $('#start').addClass('enabled');
            $('#stop').addClass('disabled');
        }
    });
    $('#start').click(function (ev) {
        updCtrl.start(new RegisterData(tab,$('#interval').val()));
    });

    $('#stop').click(function (ev) {
        updCtrl.stop(new RegisterData(tab,$('#interval').val()));
    });
});

