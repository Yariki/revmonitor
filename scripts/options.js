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
            chrome.storage.sync.get([Settings.notificationEnabled,Settings.soundNotificationEnabled, Settings.soundName, Settings.rules], function (items) {
                opt.notificationEnabled = items.notificationEnabled;
                opt.soundNotificationEnabled = items.soundNotificationEnabled;
                opt.soundName = items.soundName;
                opt.rules = items.rules;

                if(opt.rules !== undefined && opt.rules.length > 0){
                    var index = 1;
                    opt.rules.forEach(value => {
                        value.id = index;
                        rules.splice(rules.length,0,new  Rule(index,value.start, value.end, value.hours, value.minutes, value.seconds));
                        index += 1;
                    });
                }

                callback(opt);
            });
        },
        getData: function () {
            return opt;
        },
        saveSettings: function (settings) {
            opt = settings;
            opt.rules = [];
            for (let i = 0; i < rules.length; i++) {
                opt.rules.splice(opt.rules.length,0,rules[i].getSettingObject());
            }
            chrome.storage.sync.set(opt);
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
                return 0;
            }
            let max = rules[0].getId();
            rules.forEach(r => max = Math.max(r.getId(),max));
            return max;
        },
        isStartTimePresent: function (startTime) {
            var result = false;

            for (let i = 0; i < rules.length; i++) {
                result = rules[i].start() === startTime;
                if(result){
                    break;
                }
            }
            return result;
        },
        isEndTimePresent: function (endTime) {
            var result = false;

            for (let i = 0; i < rules.length; i++) {
                result = rules[i].end() === endTime;
                if(result){
                    break;
                }
            }
            return result;
        },
        isTimeBetween: function (time) {
            var result = false;
            for (let i = 0; i < rules.length; i++) {
                result =  rules[i].start() < time && time < rules[i].end();
                if(result){
                    break;
                }
            }
            return result;
        }
    }
})();

var uiController = (function(settingCtrl){

    var validState = {
        startTime: true,
        endTime: true,
        hours: false,
        minutes: false,
        seconds: false,
    };


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
        hoursCtrl: '#hour',
        minutesCtrl: '#min',
        secondsCtrl: '#sec'
    };


    var notificationEnabledCheckbox = undefined;
    var soundNotificationEnabledCheckbox = undefined;
    var selectNameControl = undefined;
    var playSoundBtn = undefined;
    var saveBtn = undefined;
    var addRuleBtn = undefined;
    var startTimeSelect = undefined;
    var endTimeSelect = undefined;
    var hoursCtrl = undefined;
    var minutesCtrl = undefined;
    var secondsCtrl = undefined;
    const html = "<tr id=\"rule-%id%\"><td>%start%:00</td><td>%end%:00</td><td>%h%</td><td>%m%</td><td>%s%</td><td><button class=\"button is-danger\"><i class=\"fas fa-minus\"></i></button></td></tr>";



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

        if(settings.rules !== undefined && settings.rules.length > 0){
            for (let i = 0; i < settings.rules.length; i++) {
                let rule = settings.rules[i];
                addRuleToList(rule.id, rule.start, rule.end, rule.hours, rule.minutes,rule.seconds);
            }
        }
    }

    function addRuleToList(id,start,end,h, m, s ) {
        var newHtml = html.replace('%id%',id)
            .replace('%start%',start)
            .replace('%end%',end)
            .replace('%h%',h)
            .replace('%m%',m)
            .replace('%s%',s);
        document.querySelector(domStrings.ruleList).insertAdjacentHTML('beforeend',newHtml);
    }

    function addRuleBtnClick() {

        var start = startTimeSelect.val();
        var end = endTimeSelect.val();
        var h = hoursCtrl.val();
        var m = minutesCtrl.val();
        var s = secondsCtrl.val();
        var id = settingCtrl.getMaxId() + 1;
        var newHtml = html.replace('%id%',id)
            .replace('%start%',start)
            .replace('%end%',end)
            .replace('%h%',h)
            .replace('%m%',m)
            .replace("%s%",s);

        settingCtrl.addRule(new Rule(id, start, end,h, m,s));
        document.querySelector(domStrings.ruleList).insertAdjacentHTML('beforeend',newHtml);
    }

    function deleteRuleBtnClick(ev) {
        var parentId;

        var id = ev.target.parentNode.parentNode.parentNode.id;

        if(id){
            var parts = id.split('-');``

            console.log('parentNode  id = ' + parts[1]);

            var el = document.getElementById(id);
            el.parentNode.removeChild(el);

            settingCtrl.deleteRule(+parts[1]);

        }
    }

    function startTimeChanged(data){
        var start = +startTimeSelect.val();

        if(settingCtrl.isStartTimePresent(start) || settingCtrl.isTimeBetween(start)){
            validState.startTime = false;
            updateUiState();
            return;
        }

        validState.startTime = true;
        updateUiState();

    }

    function endTimeChanged(data) {
        var end = +endTimeSelect.val();

        if(settingCtrl.isEndTimePresent(end) || settingCtrl.isTimeBetween(end)){
            validState.endTime = false;
            updateUiState();
            return;
        }

        validState.endTime = true;
        updateUiState();

    }

    function valueCountChanged(data) {
        var hoursVal = +hoursCtrl.val();
        validState.hours = hoursVal >= 0;
        var minVal = +minutesCtrl.val();
        validState.minutes = minVal >= 0;
        var secVal = +secondsCtrl.val();
        validState.seconds = secVal >= 0;

        updateUiState();
    }

    function updateUiState(){

        if(validState.startTime){
            startTimeSelect.parent().removeClass('is-danger').addClass('is-primary');
        } else {
            startTimeSelect.parent().removeClass('is-primary').addClass('is-danger');
        }

        if(validState.endTime){
            endTimeSelect.parent().removeClass('is-danger').addClass('is-primary');
        } else {
            endTimeSelect.parent().removeClass('is-primary').addClass('is-danger');
        }

        if(validState.hours){
            hoursCtrl.removeClass('is-danger').addClass('is-primary');
        } else {
            hoursCtrl.removeClass('is-primary').addClass('is-danger');
        }

        if(validState.minutes){
            minutesCtrl.removeClass('is-danger').addClass('is-primary');
        } else {
            minutesCtrl.removeClass('is-primary').addClass('is-danger');
        }

        if(validState.seconds){
            secondsCtrl.removeClass('is-danger').addClass('is-primary');
        } else {
            secondsCtrl.removeClass('is-primary').addClass('is-danger');
        }

        if(validState.startTime && validState.endTime && validState.hours && validState.minutes && validState.seconds){
            enableAddButton();
        } else {
            disableAddButton();
        }
    }

    function disableAddButton() {
        addRuleBtn.attr('disabled', 'disabled');
    }

    function enableAddButton() {
        addRuleBtn.removeAttr('disabled');
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

        startTimeSelect.change(startTimeChanged);
        endTimeSelect.change(endTimeChanged);
        hoursCtrl.change(valueCountChanged);
        minutesCtrl.change(valueCountChanged);
        secondsCtrl.change(valueCountChanged);

        updateUiState();
        valueCountChanged(null);
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
            hoursCtrl = $(domStrings.hoursCtrl);
            minutesCtrl = $(domStrings.minutesCtrl);
            secondsCtrl = $(domStrings.secondsCtrl);

            init();
        },
        populateUi: function (settings) {
            populateUIBySettings(settings);
        }
    }

})(settingsController);


$(function () {

    settingsController.init(uiController.populateUi);
    uiController.init();

});