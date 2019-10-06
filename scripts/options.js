$(function () {

    var notificationEnabledCheckbox = $('#notificationEnabled');
    var soundNotificationEnabledCheckbox = $('#soundNotificationEnabled');
    var selectNameControl = $('#soundName');

    chrome.storage.sync.get([Settings.notificationEnabled,Settings.soundNotificationEnabled, Settings.soundName], function (items) {
        if(items[Settings.notificationEnabled] !== undefined){
            notificationEnabledCheckbox.prop('checked', (items[Settings.notificationEnabled]));
        } else {
            notificationEnabledCheckbox.val(true);
        }
        if(items[Settings.soundNotificationEnabled]  !== undefined){
            var val = items[Settings.soundNotificationEnabled]
            soundNotificationEnabledCheckbox.prop('checked',val);
            updateState(val);
        } else {
            soundNotificationEnabledCheckbox.val(false);
        }
        if(items[Settings.soundName] !== undefined){
            selectNameControl.val(items[Settings.soundName]);
        }
    });


    soundNotificationEnabledCheckbox.change(function () {
        var value = soundNotificationEnabledCheckbox.prop('checked');
        updateState(value);
    });

    $('#playSound').click(function () {
        var name = selectNameControl.val();
        var audio = new Audio(Audios[name]);
        audio.play();
    });

    $('#save').click(function () {
        var opt = {
            'notificationEnabled': notificationEnabledCheckbox.prop('checked'),
            'soundNotificationEnabled': soundNotificationEnabledCheckbox.prop('checked'),
            'soundName': selectNameControl.val()
        };
        chrome.storage.sync.set(opt);

    });

    function updateState(val) {
        if(val){
            $('#soundName').removeAttr('disabled');
            $('#playSound').addClass('enabled').removeClass('disabled');
        } else{
            $('#soundName').attr('disabled',true);
            $('#playSound').addClass('disabled').removeClass('enabled');
        }
    }



});