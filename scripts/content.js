chrome.runtime.sendMessage({ action: "show"});
var currentTimer = undefined;



chrome.runtime.onMessage.addListener(function(request, sender,response)  {
    if(request.message === RevMessages.StartMonitoring && request.payload.tab === Identifiers.MonitoringPage && currentTimer === undefined){
        currentTimer = setInterval(function(){
            findProjects();
        },request.payload.interval * 1000);
    }
});


chrome.runtime.onMessage.addListener(function(request, sender,response)  {
    if(request.message === RevMessages.StopMonitoring && request.payload.tab === Identifiers.MonitoringPage && currentTimer !== undefined){
        clearInterval(currentTimer);
        currentTimer = undefined;
    }
});

function findProjects(){
    console.log("Trying to find new projects...");
    var projectRows =  document.querySelectorAll(DomStrings.findWorkRow);
    var projectArray = [];

    for(let  i = 0; i < projectRows.length;i++){
        var project = projectRows[i];
        var projectId = $(project).find(DomStrings.contentRow).first().attr(DomStrings.dataProjectAttr);
        var cells = $(project).find(DomStrings.tableCell);
        var lang = $(cells[0]).find('span:first-child').attr('title').trim();
        var customer = $(cells[1]).text();
        var size = $(cells[2]).text();
        var price = $(cells[3]).text();
        var dueTime = $(cells[4]).text();
        projectArray.push(new RevProject(projectId,lang,customer,size,price,dueTime));
    }
    if(projectArray.length > 0){
        chrome.runtime.sendMessage(new RevMessage(RevMessages.FreeProjects,projectArray), null);
    }
}

$(function () {
});

