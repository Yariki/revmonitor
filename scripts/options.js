var settingsController = (function(){
    var opt = {
        notificationEnabled: undefined,
        soundNotificationEnabled: undefined,
        soundName: undefined,
        rules: []
    };

    var rules = [];


    return {
        init: function(callback){
            chrome.storage.sync.get([Settings.notificationEnabled,Settings.soundNotificationEnabled, Settings.soundName], function (items) {
                opt.notificationEnabled = items.notificationEnabled;
                opt.soundNotificationEnabled = items.soundNotificationEnabled;
                opt.soundName = items.soundName;
                opt.rules = items.rules;

                // if(opt.rules !== undefined && opt.rules.length > 0){
                //     var index = 1;
                //     opt.rules.forEach(value => {
                //
                //     });
                // }

                callback(opt);
            });
        },
        getData: function () {
            return opt;
        },
        saveSettings: function (settings) {
            chrome.storage.sync.set(settings);
        },
        addRule: function (rule) {
            rules.splice(rules.length, 0, rule);
        },
        deleteRule: function(id) {
            var ids = rules.map(val => val.getId());
            var index = ids.indexOf(id);
            rules.splice(index, 1);
        },
        getMaxId: function() {
            if(rules === undefined || rules.length === 0){
                return 1;
            }
            let max = rules[0].getId();
            rules.forEach(r => max = Math.max(r.getId(),max));
            return max;
        }

    }
})();

var uiController = (function(settingCtrl){

    var domStrings = {
        notificationEnabledUI: '#notificationEnabled',
        soundNotificationEnableUI: '#soundNotificationEnabled',
        soundNameUI: '#soundName',
        playSoundBtn: '#playSound',
        saveBtn: '#save',
        addRuleBtn: '#addRuleBtn',
        ruleList: '#rulesBody',
        startSelect: '#start',
        endSelect: '#end',
        wordCtrl: '#wordcount',
        pagesCtrl: '#pagescount'
    };


    var notificationEnabledCheckbox = undefined;
    var soundNotificationEnabledCheckbox = undefined;
    var selectNameControl = undefined;
    var playSoundBtn = undefined;
    var saveBtn = undefined;
    var addRuleBtn = undefined;
    var startTimeSelect = undefined;
    var endTimeSelect = undefined;
    var wordsCtrl = undefined;
    var pagesCtrl = undefined;
    const html = "<tr id=\"rule-%id%\"><td>%start%:00</td><td>%end%:00</td><td>%w%</td><td>%p%</td><td><button class=\"button is-danger\"><i class=\"fas fa-minus\"></i></button></td></tr>";



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

    function addRuleBtnClick() {

        var start = startTimeSelect.val();
        var end = endTimeSelect.val();
        var words = wordsCtrl.val();
        var pages = pagesCtrl.val();
        var id = settingCtrl.getMaxId() + 1;
        var newHtml = html.replace('%id%',id)
            .replace('%start%',start)
            .replace('%end%',end)
            .replace('%w%',words)
            .replace('%p%',pages);


        settingCtrl.addRule(new Rule(id, start, end,words, pages));
        document.querySelector(domStrings.ruleList).insertAdjacentHTML('beforeend',newHtml);
    }

    function deleteRuleBtnClick(ev) {

    }


    function init(){
        soundNotificationEnabledCheckbox.change(function () {
            var value = soundNotificationEnabledCheckbox.prop('checked');
            updateState(value);
        });

        playSoundBtn.click(playSoundBtnClick);

        saveBtn.click(saveBtnClick);

        addRuleBtn.click(addRuleBtnClick);

        document.querySelector(domStrings.ruleList).addEventListener('click',deleteRuleBtnClick);
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
            addRuleBtn = $(domStrings.addRuleBtn);
            startTimeSelect = $(domStrings.startSelect);
            endTimeSelect = $(domStrings.endSelect);
            wordsCtrl = $(domStrings.wordCtrl);
            pagesCtrl = $(domStrings.pagesCtrl);

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