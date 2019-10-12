
$(function () {
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
            if(state.isRunning){
                $('#start').attr('disabled','disabled');
            }
        } else {
            $('#stop').attr('disabled','disabled');
        }
    });
    $('#start').click(function (ev) {
        updCtrl.start(new RegisterData(tab,$('#interval').val()));
        updateState();
    });

    $('#stop').click(function (ev) {
        updCtrl.stop(new RegisterData(tab,$('#interval').val()));
        updateState();
    });

    function updateState() {
        if(updCtrl.isRegistered(tab.id)){
            var state = updCtrl.getState(tab.id);
            $('#interval').val(state.interval);
            if(state.isRunning){
                $('#start').attr('disabled','disabled');
                $('#stop').removeAttr('disabled');
            } else {
                $('#start').removeAttr('disabled');
                $('#stop').attr('disabled','disabled');
            }

        }
    };
});

