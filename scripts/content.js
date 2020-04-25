chrome.runtime.sendMessage({ action: "show"});

$(function () {
    var projectRows =  document.querySelectorAll(DomStrings.findWorkRow);
    var projectArray = [];

    for(let  i = 0; i < projectRows.length;i++){
        var project = projectRows[i];
        var projectId = $(project).find(DomStrings.contentRow).first().attr(DomStrings.dataProjectAttr);
        var cells = $(project).find(DomStrings.tableCell);
        var customer = $(cells[0]).text();
        var length = $(cells[1]).text();
        var payTotal = $(cells[2]).text();
        var payMin = $(cells[3]).text();
        var lang = $(cells[4]).text();
        var dueTime = $(cells[5]).text();

        projectArray.push(new RevProject(projectId,lang,customer,length,payTotal, payMin,dueTime));
    }
    if(projectArray.length > 0){
        chrome.runtime.sendMessage(new RevMessage(RevMessages.FreeProjects,projectArray), null);
    }
});

