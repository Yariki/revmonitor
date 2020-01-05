var settingsController = (function(){
    var opt = {
        'notificationEnabled': undefined,
        'soundNotificationEnabled': undefined,
        'soundName': undefined
    };

    return {
        init: function(callback){
            chrome.storage.sync.get([Settings.notificationEnabled,Settings.soundNotificationEnabled, Settings.soundName], function (items) {
                opt = items;
                callback(opt);
            });
        },
        setSettings: function(settings){
            opt = settings;
        },
        getData: function () {
            return opt;
        },
        saveSettings: function (settings) {
            chrome.storage.sync.set(settings);
        }
    }
})();

var uiController = (function(settingCtrl){

    var domStrings = {
        notificationEnabledUI: '#notificationEnabled',
        soundNotificationEnableUI: '#soundNotificationEnabled',
        soundNameUI: '#soundName',
        playSoundBtn: '#playSound',
        saveBtn: '#save'
    };


    var notificationEnabledCheckbox = undefined;
    var soundNotificationEnabledCheckbox = undefined;
    var selectNameControl = undefined;
    var playSoundBtn = undefined;
    var saveBtn = undefined;



    function playSoundBtnClick() {
            var name = selectNameControl.val();
            var audio = new Audio(Audios[name]);
            audio.play();
     }

    function saveBtnClick() {

        var opt = settingCtrl.getData();
        opt.notificationEnabled = notificationEnabledCheckbox.prop('checked');
        opt.soundNotificationEnabled = soundNotificationEnabledCheckbox.prop('checked');
        opt.soundName = selectNameControl.val();
        settingCtrl.saveSettings(opt);
    }

    function populateUIBySettings(settings){
        if(settings[Settings.notificationEnabled] !== undefined){
            notificationEnabledCheckbox.prop('checked', (settings[Settings.notificationEnabled]));
        } else {
            notificationEnabledCheckbox.prop('checked',true);
        }
        if(settings[Settings.soundNotificationEnabled]  !== undefined){
            var val = settings[Settings.soundNotificationEnabled];
            soundNotificationEnabledCheckbox.prop('checked',val);
            updateState(val);
        } else {
            soundNotificationEnabledCheckbox.prop('checked',false);
            updateState(false)
        }
        if(settings[Settings.soundName] !== undefined){
            selectNameControl.val(settings[Settings.soundName]);
        }
    }


    function init(){
        soundNotificationEnabledCheckbox.change(function () {
            var value = soundNotificationEnabledCheckbox.prop('checked');
            updateState(value);
        });

        playSoundBtn.click(playSoundBtnClick);

        saveBtn.click(saveBtnClick);
    }

    function updateState(val) {
        if(val){
            selectNameControl.removeAttr('disabled');
            playSoundBtn.addClass('enabled').removeClass('disabled');
        } else{
            selectNameControl.attr('disabled',true);
            playSoundBtn.addClass('disabled').removeClass('enabled');
        }
    }


    return {
        init : function(){
            notificationEnabledCheckbox = $(domStrings.notificationEnabledUI);
            soundNotificationEnabledCheckbox = $(domStrings.soundNotificationEnableUI);
            selectNameControl = $(domStrings.soundNameUI);
            playSoundBtn = $(domStrings.playSoundBtn);
            saveBtn = $(domStrings.saveBtn);
            init();
        },
        populateUi: function (settings) {
            populateUIBySettings(settings);
        }
    }

})(settingsController);



var globalController = (function(){

    return {
        init : function(){

        }
    }
})();


$(function () {

    settingsController.init(uiController.populateUi);
    uiController.init();

});