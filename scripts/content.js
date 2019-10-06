chrome.runtime.sendMessage({ action: "show"});

$(function () {
    var searchCtrl = chrome.extension.getBackgroundPage().searchController;
    searchCtrl.searchProjects(document.querySelector(DomStrings.projectTable));
});

