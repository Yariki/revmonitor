chrome.runtime.sendMessage({ action: "show"});
$(function () {
    var projectRows =  document.querySelectorAll(DomStrings.findWorkRow);
    var projectArray = [];

    for(let  i = 0; i < projectRows.length;i++){
        var project = projectRows[i];
        var projectId = $(project).find(DomStrings.contentRow).first().attr(DomStrings.dataProjectAttr);
        var cells = $(project).find(DomStrings.tableCell);
        var lang = $(cells[0]).text();
        var customer = $(cells[1]).text();
        var size = $(cells[2]).text();
        var price = $(cells[3]).text();
        var dueTime = $(cells[4]).text();
        projectArray.push(new RevProject(projectId,lang,customer,size,price,dueTime));
    }

    chrome.runtime.sendMessage(new RevMessage(RevMessages.FreeProjects,projectArray), null);
});

