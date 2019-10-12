chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "show") {
        chrome.tabs.query({active: true},result => {
            if(result.length > 0){
                chrome.pageAction.show(result[0].id);
            }
        });
    }
});

var Urls = (function () {
    return {
        Details: "https://www.rev.com/workspace/project/",
        Claim: ""
    }
})();

var detailsPageSource = "<!doctypehtml><html lang=en-us><!--<![endif]--><head xmlns:fb=http://www.facebook.com/2008/fbml xmlns:og=http://ogp.me/ns#><meta content=\"text/html; charset=UTF-8\"http-equiv=Content-Type><title>Project - TR0193648697P-1</title><meta content=\"Project - TR0193648697P-1\"property=og:title><meta content=website property=og:type><meta content=Rev property=og:site_name><meta content=\"Online audio transcription, video captions, and document translation services. Serving more than 100k customers worldwide.\"property=og:description><meta content=https://www.rev.com/content/curve/img/home/rev_twittercard.jpg property=og:image><meta content=1200 property=og:image:width><meta content=630 property=og:image:height><meta content=https://www.rev.com/workspace/project/TR0193648697P-1 property=og:url><meta content=199170300134516 property=fb:app_id><meta content=summary_large_image property=twitter:card><meta content=@rev property=twitter:site><link href=https://www.rev.com/workspace/project/TR0193648697P-1 rel=canonical><meta content=1318-0 name=fox:build><link href=https://www.rev.com/content/img/rev/favicon.ico rel=\"shortcut icon\"type=image/x-icon><meta content=noindex name=robots><script src=\"./Project - TR0193648697P-1_files/mixpanel-2-latest.min.js.download\"async></script><script src=\"./Project - TR0193648697P-1_files/fbevents.js.download\"async></script><script src=\"./Project - TR0193648697P-1_files/gtm.js.download\"async></script><script src=\"./Project - TR0193648697P-1_files/embed.js.download\"async id=directlyRTMScript></script><script src=\"./Project - TR0193648697P-1_files/gtm.js.download\"async></script><script src=\"./Project - TR0193648697P-1_files/analytics.js.download\"async></script><script src=\"./Project - TR0193648697P-1_files/raygun.min.js.download\"async></script><script src=\"./Project - TR0193648697P-1_files/fs.js.download\"async></script><script>window._fs_debug=!1,window._fs_host=\"fullstory.com\",window._fs_org=\"10Qs\",window._fs_namespace=\"FS\",function(e,s,n,o,i,t,c,a){n in e?e.console&&e.console.log&&e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):((c=e[n]=function(e,n){c.q?c.q.push([e,n]):c._api(e,n)}).q=[],(t=s.createElement(o)).async=1,t.src=\"https://\"+_fs_host+\"/s/fs.js\",(a=s.getElementsByTagName(o)[0]).parentNode.insertBefore(t,a),c.identify=function(e,n){c(i,{uid:e}),n&&c(i,n)},c.setUserVars=function(e){c(i,e)},c.identifyAccount=function(e,n){t=\"account\",(n=n||{}).acctId=e,c(t,n)},c.clearUserCookie=function(e,n,o){if(!e||document.cookie.match(\"fs_uid=[`;`]*`[`;`]*`[`;`]*`\"))for(n=s.domain;s.cookie=\"fs_uid=;domain=\"+n+\";path=/;expires=\"+new Date(0).toUTCString(),!((o=n.indexOf(\".\"))<0);)n=n.slice(o+1)})}(window,document,window._fs_namespace,\"script\",\"user\")</script><script>window.addEventListener(\"load\",function(){window.FS&&window.FS.identify(\"14\",{displayName:\"Svetlana\",email:\"mirlanochka@gmail.com\"})})</script><!--[if lt IE 9]><script src=//html5shim.googlecode.com/svn/trunk/html5.js></script><![endif]--><script src=\"./Project - TR0193648697P-1_files/jquery.min.js.download\"></script><script>window.jQuery||document.write('<script src=\"/build/Vendor/jquery-1.11.1.min.js\"><\\/script>')</script><script src=\"./Project - TR0193648697P-1_files/jquery-migrate-1.2.1.min.js.download\"></script><script>!function(){var e=new Date,t=0-e.getTimezoneOffset(),a=new Date;a.setFullYear(e.getFullYear()+5),document.cookie=\"ft_tz=\"+escape(t)+\";expires=\"+a.toGMTString()+\";path=/\"}()</script><link href=\"./Project - TR0193648697P-1_files/bootstrap3.less\"rel=stylesheet><script src=\"./Project - TR0193648697P-1_files/bootstrap.js.download\"></script><script>!function(){var e=document,t=e.createElement(\"script\");if(!(\"noModule\"in t)&&\"onbeforeload\"in t){var n=!1;e.addEventListener(\"beforeload\",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute(\"nomodule\")||!n)return;e.preventDefault()},!0),t.type=\"module\",t.src=\".\",e.head.appendChild(t),t.remove()}}()</script><script src=\"./Project - TR0193648697P-1_files/polyfills.bundle.js.download\"nomodule=\"\"></script><script src=\"./Project - TR0193648697P-1_files/common.js.download\"></script><script src=\"./Project - TR0193648697P-1_files/common.bundle.js.download\"></script><link href=\"./Project - TR0193648697P-1_files/app.less\"rel=stylesheet><script>!function(a,r,e,n,g,o,s,i){a.RaygunObject=g,a[g]=a[g]||function(){(a[g].o=a[g].o||[]).push(arguments)},o=r.createElement(e),s=r.getElementsByTagName(e)[0],o.async=1,o.src=\"//cdn.raygun.io/raygun4js/raygun.min.js\",s.parentNode.insertBefore(o,s),i=a.onerror,a.onerror=function(r,e,n,o,s){i&&i(r,e,n,o,s),s||(s=new Error(r)),a[g].q=a[g].q||[],a[g].q.push({e:s})}}(window,document,\"script\",0,\"rg4js\"),rg4js(\"options\",{debugMode:!0,ignoreAjaxAbort:!0,ignoreAjaxError:!0,ignore3rdPartyErrors:!0}),rg4js(\"apiKey\",\"eIWQURn3Q+LVjvLWfppMgA==\"),rg4js(\"enableCrashReporting\",!0),rg4js(\"withTags\",[\"Marketplace\",\"Workspace\"]),rg4js(\"setUser\",{identifier:\"14\",fullName:\"Svetlana Lisovska\",isAnonymous:!1}),window.rg4js=rg4js</script><link href=\"./Project - TR0193648697P-1_files/workspace.less\"rel=stylesheet><script src=\"./Project - TR0193648697P-1_files/react.js.download\"></script><script src=\"./Project - TR0193648697P-1_files/workspace.js.download\"></script><script src=\"./Project - TR0193648697P-1_files/find-work.bundle.js.download\"></script><script src=\"./Project - TR0193648697P-1_files/workspace.bundle.js.download\"></script><link href=\"./Project - TR0193648697P-1_files/project.less\"rel=stylesheet><link href=\"./Project - TR0193648697P-1_files/rate.less\"rel=stylesheet><link href=\"./Project - TR0193648697P-1_files/rateit.less\"rel=stylesheet><link href=\"./Project - TR0193648697P-1_files/font-awesome.css\"rel=stylesheet><script src=\"./Project - TR0193648697P-1_files/fileManagement.js.download\"></script><script>if(function(e,a,n,t,g,c,o){e.GoogleAnalyticsObject=g,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,c=a.createElement(n),o=a.getElementsByTagName(n)[0],c.async=1,c.src=\"//www.google-analytics.com/analytics.js\",o.parentNode.insertBefore(c,o)}(window,document,\"script\",0,\"ga\"),ga(\"create\",\"UA-18309154-6\",\"auto\"),ga(\"require\",\"ecommerce\",\"ecommerce.js\"),ga(\"set\",\"&uid\",\"14\"),void 0===ga)var ga=function(){};ga(\"set\",\"dimension1\",\"Agent\"),ga(\"send\",\"pageview\")</script><script src=\"./Project - TR0193648697P-1_files/js\"async></script><script>function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag(\"js\",new Date),gtag(\"config\",\"AW-1007079899\")</script><script src=\"./Project - TR0193648697P-1_files/trackingCode.js.download\"async></script><style id=igtranslator-color></style><link href=\"./Project - TR0193648697P-1_files/style.css\"rel=stylesheet crossorigin=anonymous><object class=chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/ style=display:none;visibility:hidden></object><body class=app id=ft_Control_0><noscript><iframe src=\"//www.googletagmanager.com/ns.html?id=GTM-BHMQ\"height=0 width=0 style=display:none;visibility:hidden></iframe></noscript><script>!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({\"gtm.start\":(new Date).getTime(),event:\"gtm.js\"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src=\"//www.googletagmanager.com/gtm.js?id=GTM-BHMQ\",m.parentNode.insertBefore(r,m)}(window,document,\"script\",\"dataLayer\")</script><script>window.addEventListener(\"load\",function(){window.intercomSettings&&(window.intercomSettings.email=\"mirlanochka@gmail.com\")})</script><script>!function(e,t,r,c,i,a,n,s){t[r]=t[r]||function(){(t[r].cq=t[r].cq||[]).push(arguments)},(n=e.createElement(i)).id=\"directlyRTMScript\",n.src=\"https://www.directly.com/widgets/rtm/embed.js\",n.async=1,(s=e.getElementsByTagName(i)[0]).parentNode.insertBefore(n,s)}(document,window,\"DirectlyRTM\",0,\"script\"),DirectlyRTM(\"config\",{id:\"8a12a3ca55d936230155df9a2fe644a4\",displayAskQuestion:!1,questionCategory:\"rtm\",customTags:[\"directly_rtm\"],metadata:{referrer:document.location.href,userAgent:navigator.userAgent}})</script><noscript><iframe src=\"//www.googletagmanager.com/ns.html?id=GTM-BHMQ\"height=0 width=0 style=display:none;visibility:hidden></iframe></noscript><script>!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({\"gtm.start\":(new Date).getTime(),event:\"gtm.js\"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src=\"//www.googletagmanager.com/gtm.js?id=GTM-BHMQ\",m.parentNode.insertBefore(r,m)}(window,document,\"script\",\"dataLayer\")</script><script>window.addEventListener(\"load\",function(){window.intercomSettings&&(window.intercomSettings.email=\"mirlanochka@gmail.com\")})</script><script>!function(e,n,t,a,c,o,f){e.fbq||(c=e.fbq=function(){c.callMethod?c.callMethod.apply(c,arguments):c.queue.push(arguments)},e._fbq||(e._fbq=c),(c.push=c).loaded=!0,c.version=\"2.0\",c.queue=[],(o=n.createElement(t)).async=!0,o.src=\"https://connect.facebook.net/en_US/fbevents.js\",(f=n.getElementsByTagName(t)[0]).parentNode.insertBefore(o,f))}(window,document,\"script\"),fbq(\"init\",\"658102074251173\",{em:\"mirlanochka@gmail.com\"}),fbq(\"track\",\"PageView\")</script><noscript><img src=\"https://www.facebook.com/tr?id=658102074251173&ev=PageView&noscript=1\"height=1 style=display:none width=1></noscript><div class=\"absolute cover w-100\"id=above-the-fold-bg></div><div id=page><div id=main><nav class=\"navbar navbar-static-top\"><div class=container><div class=\"pull-left navbar-header\"><a href=https://www.rev.com/workspace class=navbar-brand><span class=rev-logo></span></a></div><ul class=nav><li class=\"dropdown nav-item\"id=menu-findwork><a class=dropdown-toggle data-toggle=dropdown>Find Work <span class=caret></span></a><ul class=\"dropdown-menu pull-left\"><li><a href=https://www.rev.com/workspace/findwork/Translation class=menu-item id=findwork-translation>Translation</a></ul><li class=\"dropdown nav-item\"id=menu-mywork><a class=dropdown-toggle data-toggle=dropdown>My Work <span class=caret></span></a><ul class=\"dropdown-menu pull-left\"><li><a href=https://www.rev.com/workspace/mywork class=menu-item>My Projects</a><li><a href=https://www.rev.com/workspace/earnings class=menu-item>Earnings</a><li><a href=https://www.rev.com/workspace/EditRequests class=menu-item>Edit Requests</a></ul><li class=\"dropdown nav-item\"id=menu-help><a class=dropdown-toggle data-toggle=dropdown>Help <span class=caret></span></a><ul class=\"dropdown-menu pull-left\"><li><a class=menu-item id=nav-item-askourexperts onclick='DirectlyRTM(\"openAskForm\")'>Ask our Experts</a><li><a href=\"https://rev.zendesk.com/access/login?force_unaltered_return_to=true&return_to=http%3A%2F%2Frev.zendesk.com%2Fhc%2Fen-us\"class=menu-item id=nav-item-helpcenter target=_blank>Help Center</a></ul><li class=nav-item><a href=https://forum.rev.com/ id=nav-item-forum target=_blank :=\"\">Forum</a></ul><div class=pull-right><ul class=\"nav nav-user\"><li class=\"dropdown nav-item\"id=menu-account><a class=dropdown-toggle data-toggle=dropdown>Hello, <b>Svetlana</b> <span class=caret></span></a><ul class=\"dropdown-menu pull-right\"><li><a href=https://www.rev.com/account/settings class=menu-item>Settings</a><li><a href=https://www.rev.com/account/auth/logout class=menu-item>Sign Off</a></ul></ul></div></div></nav><div class=nav-breadcrumb><div class=container><ul class=breadcrumb><li><a href=https://www.rev.com/workspace/findwork><span class=home-icon></span></a><li>MY WORK<li><a href=https://www.rev.com/workspace/mywork>PROJECTS</a><li class=active>TR0193648697P-1</ul></div></div><div class=app><div class=container><div class=new-workspace><div class=row><div class=col-sm-12><div class=\"oe-claim oe-state-header\"><form action=\"https://www.rev.com/workspace/ClaimTranslation?projectNumber=TR0193648697P-1\"id=claim-form method=post><input type=hidden name=__RequestVerificationToken value=ZwGrd6J0yR_A9-00mWiELQB9qwtwHQPsFkSPX2jYG6RPsAy0dO68cM5JpDaxiB7M9y0-pV7g3jTl3XfzI6EUyQq4VujsDWpP8C_u2Ir0fnaTVOJ_0> <input type=hidden name=PriceMultiplierToClaimWith value=1.00000 id=ClaimedPriceMultiplier><div class=\"btn-group left-btns\"><a href=https://www.rev.com/workspace/project/TR0193648697P-1# class=\"btn windows btn-secondary-action\"id=flag-problem-btn><span class=btn-label>Report Problem</span></a></div><span class=oe-state-msg>If claimed, due in 2 hours, 30 minutes</span><div class=\"btn-group right-btns\"><a href=https://www.rev.com/workspace/project/TR0193648697P-1# class=\"btn windows btn-secondary-action ws-submit btn-wide\"id=claim-btn><span class=btn-label>Claim</span></a></div></form></div></div></div><div class=row><div class=col-sm-6><div class=\"section col-equal-height\"style=height:285px><h1 class=header>Customer Information</h1><table class=oe-summary><tr class=oe-summary-row><td class=oe-summary-label>Customer<td class=oe-summary-detail>Tammy Wrisley, Hodgson Russ LLP<tr class=oe-summary-row><td class=oe-summary-label>Customer Comment<td class=\"oe-summary-detail oe-highlighted-info\">Name/Place spellings: Nikolay Panin Yulia Panina</table></div></div><div class=col-sm-6><div class=\"section col-equal-height\"style=height:285px><h1 class=header>Project Details</h1><table class=oe-summary><tr class=oe-summary-row><td class=oe-summary-label>Output<td class=oe-summary-detail><span class=oe-order-type-val>Certified PDF</span><tr class=oe-summary-row><td class=oe-summary-label>Language Pair<td class=oe-summary-detail>ru2en<tr class=oe-summary-row><td class=oe-summary-label>Document Length<td class=oe-summary-detail>1 page(s)<tr class=oe-summary-row><td class=oe-summary-label>Status<td class=oe-summary-detail>Translation not yet claimed<tr class=oe-summary-row><td class=oe-summary-label>Translation<td class=oe-summary-detail>$13.61</table></div></div></div><div class=row><div class=col-md-12><div class=section><div class=\"col oe-files\"id=oe-files><div class=clearfix><div class=pull-right><a href=https://www.rev.com/document/ordsz/193648697.zip class=\"btn windows btn-secondary-action ws-submit btn-new-workspace disabled manual\"id=download-files><span class=btn-label>Download Files</span></a><div class=\"fade modal\"id=zip-building-progress><div class=modal-dialog><div class=modal-content><div class=modal-body><div class=\"alert alert-warning some-links\">Some of the documents you selected were links, which will not be included in the downloaded ZIP file</div><h2>Building your file…</h2><img src=\"./Project - TR0193648697P-1_files/ajax-loader.gif\"alt=spinner></div><div class=modal-footer></div></div></div></div></div><h3 class=\"header col-header\">Files</h3></div><div class=\"clearfix no-gutter row-fluid oe-files-header-row\"><span class=\"span3 col-xs-3 oe-files-header\"id=files-header-source>Sources<div class=column-selection><input type=checkbox class=column-checkbox></div></span><span class=\"span3 col-xs-3 oe-files-header\"id=files-header-primary>Translations<div class=column-selection><input type=checkbox class=column-checkbox></div></span></div><div id=oe-file-rows><div id=oe-file-rows-nonresources><div id=oe-file-rows-project><div class=\"clearfix no-gutter row-fluid oe-file-row\"><div class=\"span3 col-xs-3 file-item-slot item-source\"><div class=oe-file-item><div class=\"normal-state file-icon\"><div class=\"normal-state doc\"aria-label=\"\"></div></div><div class=\"normal-state file-details\"><span class=file-name><a href=https://www.rev.com/f/849181273/5b608e533908a45b80ab6fa718b32fd191373c05d5949b7a1c01aa1eaacbef49 target=_blank title=\"marriage ceritficate.JPG\">marriage ceritficate.JPG</a></span><br><span class=file-additional-details><span title=\"Uploaded on 07-Oct-19 22:33\">230 KB</span></span></div><div class=\"none uploading-state\"><span class=progress-upload><div class=awsupload-progress><div class=awsupload-progress-bar></div><div class=awsupload-progress-text></div></div></span><span class=\"none progress-length\">saving file...</span></div><div class=\"normal-state dropdown file-actions-hidden\"><a href=https://www.rev.com/workspace/project/TR0193648697P-1# class=dropdown-toggle data-html=true data-placement=bottom data-toggle=dropdown></a><ul class=\"dropdown-menu oe-files-actions-list\"role=menu><h5>Work Version</h5><li class=file-variation><a href=https://www.rev.com/f/849181273/5b608e533908a45b80ab6fa718b32fd191373c05d5949b7a1c01aa1eaacbef49 target=_blank title=\"marriage ceritficate.JPG\">marriage ceritficate.JPG</a><br>(Uploaded on 07-Oct-19 22:33, 230 KB</ul></div><div class=\"normal-state file-selection\"><input type=checkbox class=file-checkbox data-document-id=50576851 data-document-revision=0 data-file-id=89908196></div><div class=\"normal-state file-actions\"><a href=https://www.rev.com/workspace/project/TR0193648697P-1# class=file-actions-arrow><b class=caret></b></a></div></div></div><div class=\"span3 col-xs-3 file-item-slot item-primary\"></div><div class=\"span3 col-xs-3 file-item-slot item-review\"></div></div></div></div></div></div><script id=aws-upload-template type=text/x-handlebars-template><div class=\"awsupload file-mgmt-upload normal-state\" id=\"{{uploadId}}\" data-ftkeybase=\"uploads/2019-10-07/36967459-f88c-42f1-89da-b58dd222f1eb/\"\n" +
    "            data-ftprefix=\"input-prefix\" data-ftaws-files-name=\"wtf\">\n" +
    "        <div class=\"awsupload-files clear\"></div>\n" +
    "        <div class=\"awsupload-container\" id=\"{{uploadId}}-container\">\n" +
    "            <span class=\"awsupload-attach\" id=\"{{uploadId}}-attach\">{{uploadLabel}}</span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"awsupload-template awsupload-file\">\n" +
    "            <div class=\"awsupload-fileinfo\">\n" +
    "                <span class=\"awsupload-filename\"></span>\n" +
    "                <div class=\"awsupload-progress\">\n" +
    "                    <div class=\"awsupload-progress-i\">\n" +
    "                        <div class=\"awsupload-progress-bar\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span class=\"awsupload-size\"></span>\n" +
    "            </div>\n" +
    "            <a class=\"awsupload-remove\" href=\"#\">remove</a>\n" +
    "        </div>\n" +
    "    </div></script><script id=aws-upload-progress-partial type=text/x-handlebars-template><span class=\"progress-upload\">\n" +
    "        <div class=\"awsupload-progress\">\n" +
    "            <div class=\"awsupload-progress-bar\"></div>\n" +
    "            <div class=\"awsupload-progress-text\"></div>\n" +
    "        </div>\n" +
    "    </span>\n" +
    "    <span class=\"progress-length none\">saving file...</span></script><script id=file-row-template type=text/x-handlebars-template>{{#each items}}\n" +
    "        <div class=\"file-item-slot span3 col-xs-3 item-{{@key}}\"></div>\n" +
    "    {{/each}}</script><script id=file-item-template type=text/x-handlebars-template><div class=\"file-icon normal-state\">\n" +
    "        <div class=\"normal-state {{fileIconClass}}\" aria-label=\"{{fileIconLabel}}\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"file-details normal-state\">\n" +
    "        <span class=\"file-name\">\n" +
    "            {{#ifViewIsPrimaryAgent}}\n" +
    "            {{#if activeDraft}}\n" +
    "                <a href=\"{{transcriptEditorLaunchLink}}\" target=\"_blank\">Open Draft in Editor</a><a href=\"{{transcriptEditorLaunchLink}}\" target=\"_blank\">Open Draft in Editor</a>\n" +
    "            {{else}}\n" +
    "            {{{ sourceDownloadLink canDownload primaryDownloadUrl name type deleted }}}\n" +
    "            {{/if}}\n" +
    "            {{else}}\n" +
    "            {{#ifViewIsSupportAndArgNotNull activeDraft}}\n" +
    "            <a href=\"/workspace/ViewTranscription?draftId={{draft.id}}\" target=\"_blank\">View Current Draft</a>\n" +
    "            {{else}}\n" +
    "            {{{ sourceDownloadLink canDownload primaryDownloadUrl name type deleted }}}\n" +
    "            {{/ifViewIsSupportAndArgNotNull}}\n" +
    "            {{/ifViewIsPrimaryAgent}}\n" +
    "        </span>\n" +
    "        <br />\n" +
    "        <span class=\"file-additional-details\">\n" +
    "            {{additionalDetailsForFileItem this}}\n" +
    "        </span>\n" +
    "        {{#if transcoded}}\n" +
    "            <div class=\"transcoded-preview none\" id=\"player_{{primaryVariationId}}\">\n" +
    "                {{#if isAudio}}\n" +
    "                    <audio preload=\"none\">\n" +
    "                        <source type=\"{{previewPlayerMediaType}}\" src=\"{{primaryDownloadUrl}}\" />\n" +
    "                    </audio>\n" +
    "                {{else}}\n" +
    "                    <video preload=\"none\">\n" +
    "                        <source type=\"video/mp4\" src=\"{{primaryDownloadUrl}}\" />\n" +
    "                    </video>\n" +
    "                {{/if}}\n" +
    "            </div>\n" +
    "        {{/if}}\n" +
    "    </div>\n" +
    "    <div class=\"uploading-state none\">\n" +
    "        {{> _awsUploadProgress}}\n" +
    "    </div>\n" +
    "    <div class=\"file-actions-hidden normal-state dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" data-placement=\"bottom\" data-html=\"true\"\n" +
    "            data-toggle=\"dropdown\" href=\"#\">\n" +
    "        </a>\n" +
    "        <ul class=\"oe-files-actions-list dropdown-menu\" role=\"menu\"></ul>\n" +
    "    </div>\n" +
    "    {{#if canDownload}}\n" +
    "    <div class=\"file-selection normal-state\">\n" +
    "        <input type=\"checkbox\" class=\"file-checkbox\"\n" +
    "               data-document-id=\"{{documentId}}\" data-document-revision=\"{{documentRevision}}\"\n" +
    "               data-file-id=\"{{primaryVariation.id}}\" />\n" +
    "    </div>\n" +
    "    {{/if}}\n" +
    "    <div class=\"file-actions normal-state\">\n" +
    "        <a class=\"file-actions-arrow\" href=\"#\">\n" +
    "            <b class=\"caret\"></b>\n" +
    "        </a>\n" +
    "    </div></script><script id=upload-new-version-partial type=text/x-handlebars-template><li role=\"presentation\" class=\"upload-action\">\n" +
    "        {{showAwsUpload \"upload\" documentId action}}\n" +
    "    </li></script><script id=add-output-doc-partial type=text/x-handlebars-template><li role=\"presentation\" class=\"upload-action\">\n" +
    "        {{showAwsUpload \"add-output-doc\" documentId action}}\n" +
    "    </li></script><script id=launch-text-editor-partial type=text/x-handlebars-template><li role=\"presentation\" data-action=\"{{dataAttrForAction action}}\">\n" +
    "        <a class=\"menuitem\" href=\"#\">\n" +
    "            {{#if draft}}\n" +
    "                Open Draft in Text Editor\n" +
    "            {{else}}\n" +
    "                {{#if hasEditorOutputs}}\n" +
    "                    Edit Document in Text Editor\n" +
    "                {{else}}\n" +
    "                    Launch Text Editor\n" +
    "                {{/if}}\n" +
    "            {{/if}}\n" +
    "        </a>\n" +
    "    </li></script><script id=file-actions-dropdown-template type=text/x-handlebars-template>{{#if allowedActions}}\n" +
    "        <h5>Actions</h5>\n" +
    "        {{#each allowedActions}}\n" +
    "            {{#renderActionItem ../this}}\n" +
    "                <li role=\"presentation\" data-action=\"{{dataAttrForAction this}}\">\n" +
    "                    <a class=\"menuitem\" href=\"#\">{{this}}</a>\n" +
    "                </li>\n" +
    "            {{/renderActionItem}}\n" +
    "        {{/each}}\n" +
    "        <li role=\"presentation\" class=\"divider\"></li>\n" +
    "    {{/if}}\n" +
    "\n" +
    "    {{#if hasMultipleAlternativeVariations}}\n" +
    "        {{!-- No draft, but has multiple variations (media source) --}}\n" +
    "        <h5>Alternative Formats</h5>\n" +
    "        <li class=\"file-variation\">\n" +
    "            {{{ sourceDownloadLink canDownload primaryVariation.downloadUrl primaryVariation.name type deleted }}}\n" +
    "            <br />\n" +
    "            (<strong>Primary</strong>, {{primaryVariation.versionInfo}}, {{#ifIsSpeakerReconciledFile primaryVariation.flags}}Speakers Reconciled, {{/ifIsSpeakerReconciledFile}}Uploaded on {{formatDate primaryVariation.uploadedOn \"dd-NNN-yy HH:mm\"}}{{#if primaryVariation.size}}, {{formatBytes primaryVariation.size}}{{/if}})\n" +
    "        </li>\n" +
    "        {{#each alternativeVariations}}\n" +
    "            <li class=\"file-variation\">\n" +
    "                {{{ sourceDownloadLink ../this.canDownload this.downloadUrl this.name ../this.type deleted }}}\n" +
    "                <br />\n" +
    "                ({{this.versionInfo}}{{#if this.frameRate}}, {{this.truncatedFrameRate}} fps{{/if}}{{#ifIsSpeakerReconciledFile this.flags}}, Speakers Reconciled{{/ifIsSpeakerReconciledFile}}{{#ifIsAlignmentFile this.flags}}, Auto-Aligned{{/ifIsAlignmentFile}}{{#ifBurntInTimecodesSynced this.flags}}, BITC{{/ifBurntInTimecodesSynced}}, Uploaded on {{formatDate this.uploadedOn \"dd-NNN-yy HH:mm\"}}{{#if this.size}}, {{formatBytes this.size}}{{/if}})\n" +
    "            </li>\n" +
    "        {{/each}}\n" +
    "        {{#if showPreviousRevisions}}\n" +
    "            {{#if hasPreviousRevisions}}\n" +
    "                <h5>Previous Versions</h5>\n" +
    "                {{#each previousRevisions}}\n" +
    "                    <li class=\"file-variation\">\n" +
    "                        {{{ sourceDownloadLink this.allowDownloads this.downloadUrl this.name this.type deleted }}}\n" +
    "                        <br />\n" +
    "                        ({{#ifIsSpeakerReconciledFile this.flags}}Speakers Reconciled, {{/ifIsSpeakerReconciledFile}}{{#ifIsAlignmentFile this.flags}}Auto-Aligned, {{/ifIsAlignmentFile}}{{#ifBurntInTimecodesSynced this.flags}}BITC, {{/ifBurntInTimecodesSynced}}Uploaded on {{formatDate this.uploadedOn \"dd-NNN-yy HH:mm\"}}{{#if this.size}}, {{formatBytes this.size}}{{/if}})\n" +
    "                    </li>\n" +
    "                {{/each}}\n" +
    "            {{/if}}\n" +
    "        {{/if}}\n" +
    "    {{else}}\n" +
    "        {{#if showPreviousRevisions}}\n" +
    "            {{!-- Previous and current version are listed under \"Versions\" --}}\n" +
    "            <h5>Versions</h5>\n" +
    "            <li class=\"file-variation\">\n" +
    "                {{{ sourceDownloadLink canDownload primaryVariation.downloadUrl primaryVariation.name type deleted }}}\n" +
    "                <br />\n" +
    "                ({{#unless activeDraft}}<strong>Latest</strong>, {{/unless}}{{#ifIsSpeakerReconciledFile this.flags}}Speakers Reconciled, {{/ifIsSpeakerReconciledFile}}{{#ifIsAlignmentFile primaryVariation.flags}}Auto-Aligned, {{/ifIsAlignmentFile}}{{#ifBurntInTimecodesSynced primaryVariation.flags}}BITC, {{/ifBurntInTimecodesSynced}}Uploaded on {{formatDate primaryVariation.uploadedOn \"dd-NNN-yy HH:mm\"}}{{#if primaryVariation.size}}, {{formatBytes primaryVariation.size}}{{/if}}\n" +
    "            </li>\n" +
    "            {{#each previousRevisions}}\n" +
    "                <li class=\"file-variation\">\n" +
    "                    {{{ sourceDownloadLink this.allowDownloads this.downloadUrl this.name ../this.type this.deleted }}}\n" +
    "                    <br />\n" +
    "                    ({{#ifIsSpeakerReconciledFile this.flags}}Speakers Reconciled, {{/ifIsSpeakerReconciledFile}}{{#ifIsAlignmentFile this.flags}}Auto-Aligned, {{/ifIsAlignmentFile}}{{#ifBurntInTimecodesSynced this.flags}}BITC, {{/ifBurntInTimecodesSynced}}Uploaded on {{formatDate this.uploadedOn \"dd-NNN-yy HH:mm\"}}{{#if this.size}}, {{formatBytes this.size}}{{/if}})\n" +
    "                </li>\n" +
    "            {{/each}}\n" +
    "        {{else}}\n" +
    "            {{!-- One variation of one working version - for source files as-is shown to agents --}}\n" +
    "            <h5>Work Version</h5>\n" +
    "            <li class=\"file-variation\">\n" +
    "                {{{ sourceDownloadLink canDownload primaryVariation.downloadUrl primaryVariation.name type deleted }}}\n" +
    "                <br />\n" +
    "                (Uploaded on {{formatDate primaryVariation.uploadedOn \"dd-NNN-yy HH:mm\"}}{{#if primaryVariation.size}}, {{formatBytes primaryVariation.size}}{{/if}}\n" +
    "            </li>\n" +
    "        {{/if}}\n" +
    "    {{/if}}</script><script>$(function(){var e={view:4,currentUserIsLastActiveAgent:!1,awsConfig:{maxFileSize:fileManagement.SupportUploadSizeLimit,policyRedirect:\"eyJleHBpcmF0aW9uIjoiMjAxOS0xMC0wOFQyMToxNjoxOFoiLCJjb25kaXRpb25zIjpbeyJhY2wiOiJwcml2YXRlIn0seyJidWNrZXQiOiJ3d3cyLWZveHRyYW5zbGF0ZSJ9LFsic3RhcnRzLXdpdGgiLCIka2V5IiwidXBsb2Fkcy8yMDE5LTEwLTA3LzM2OTY3NDU5LWY4OGMtNDJmMS04OWRhLWI1OGRkMjIyZjFlYi8iXSxbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwiMSIsIjUzNjg3MzA2MjQiXSxbInN0YXJ0cy13aXRoIiwiJHgtYW16LW1ldGEtZmlsZW5hbWUiLCIiXSxbInN0YXJ0cy13aXRoIiwiJHN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyIsIjIwMSJdLFsic3RhcnRzLXdpdGgiLCIkbmFtZSIsIiJdLFsic3RhcnRzLXdpdGgiLCIkRmlsZW5hbWUiLCIiXSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsIiJdLFsiZXEiLCIkc3VjY2Vzc19hY3Rpb25fcmVkaXJlY3QiLCJodHRwczovL3d3dy5yZXYuY29tL3VwbG9hZC9hd3MtY29tcGxldGUiXV19\",signatureRedirect:\"1uGi9XpDqR/cERnaDa2PpDlKJfA=\",policy201:\"eyJleHBpcmF0aW9uIjoiMjAxOS0xMC0wOFQyMToxNjoxOFoiLCJjb25kaXRpb25zIjpbeyJhY2wiOiJwcml2YXRlIn0seyJidWNrZXQiOiJ3d3cyLWZveHRyYW5zbGF0ZSJ9LFsic3RhcnRzLXdpdGgiLCIka2V5IiwidXBsb2Fkcy8yMDE5LTEwLTA3LzM2OTY3NDU5LWY4OGMtNDJmMS04OWRhLWI1OGRkMjIyZjFlYi8iXSxbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwiMSIsIjUzNjg3MzA2MjQiXSxbInN0YXJ0cy13aXRoIiwiJHgtYW16LW1ldGEtZmlsZW5hbWUiLCIiXSxbInN0YXJ0cy13aXRoIiwiJHN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyIsIjIwMSJdLFsic3RhcnRzLXdpdGgiLCIkbmFtZSIsIiJdLFsic3RhcnRzLXdpdGgiLCIkRmlsZW5hbWUiLCIiXSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsIiJdXX0=\",signature201:\"sNlXuJd+io5A5LNODS3vVS0lZFQ=\",uploadUrl:\"https://www2-foxtranslate.s3.amazonaws.com/\",bucket:\"www2-foxtranslate\",uploadDir:\"uploads/2019-10-07/36967459-f88c-42f1-89da-b58dd222f1eb/\",accessKeyId:\"AKIAJP7E3BY3JPPBAPMA\",successRedirect:\"https://www.rev.com/upload/aws-complete\"},existingFileRows:[{source:{documentId:50576851,documentRevision:0,derivedFromId:null,derivedFromRevision:null,projectId:14744252,orderId:10557378,type:2,flags:0,outputOfJobType:null,outputOfJobId:null,wordCount:null,audioLength:null,deleted:!1,variations:[{id:89908196,obfuscatedId:849181273,size:235840,name:\"marriage ceritficate.JPG\",uploadedOnString:\"2019-10-07T19:33:15.26\",flags:0,contentType:null,externalUrl:null,storageKey:\"[www2-foxtranslate]docs2/81c97d38-fd92-448e-8b48-65ff8c3acc43/marriage ceritficate.JPG\",storageKeyHash:\"5b608e533908a45b80ab6fa718b32fd191373c05d5949b7a1c01aa1eaacbef49\",frameRate:null}],primaryVariationId:89908196,cpAttributes:{masterCaptionDocId:null},resourceForId:null,resourceForRevision:null},primary:null,review:null,finished:null}],outputDocumentInfo:{},previousRevisionsLookup:{},draft:{id:0,logicalDocumentId:0,logicalDocumentRevision:0,updatedOn:\"0001-01-01T00:00:00\"},order:{type:1,id:10557378,orderNumber:\"TR0193648697\",state:190,documents:[{documentId:50576851,documentRevision:0,derivedFromId:null,derivedFromRevision:null,projectId:14744252,orderId:10557378,type:2,flags:0,outputOfJobType:null,outputOfJobId:null,wordCount:null,audioLength:null,deleted:!1,variations:[{id:89908196,obfuscatedId:849181273,size:235840,name:\"marriage ceritficate.JPG\",uploadedOnString:\"2019-10-07T19:33:15.26\",flags:0,contentType:null,externalUrl:null,storageKey:\"[www2-foxtranslate]docs2/81c97d38-fd92-448e-8b48-65ff8c3acc43/marriage ceritficate.JPG\",storageKeyHash:\"5b608e533908a45b80ab6fa718b32fd191373c05d5949b7a1c01aa1eaacbef49\",frameRate:null}],primaryVariationId:89908196,cpAttributes:{masterCaptionDocId:null},resourceForId:null,resourceForRevision:null}]},allDerivedFromIds:[],sourceDownloadDisabled:\"true\"===\"False\".toLowerCase(),allowAtlasCorrections:\"true\"===\"False\".toLowerCase(),project:{type:1,id:14744252,projectNumber:\"TR0193648697P-1\",state:200,documents:[{documentId:50576851,documentRevision:0,derivedFromId:null,derivedFromRevision:null,projectId:14744252,orderId:10557378,type:2,flags:0,outputOfJobType:null,outputOfJobId:null,wordCount:null,audioLength:null,deleted:!1,variations:[{id:89908196,obfuscatedId:849181273,size:235840,name:\"marriage ceritficate.JPG\",uploadedOnString:\"2019-10-07T19:33:15.26\",flags:0,contentType:null,externalUrl:null,storageKey:\"[www2-foxtranslate]docs2/81c97d38-fd92-448e-8b48-65ff8c3acc43/marriage ceritficate.JPG\",storageKeyHash:\"5b608e533908a45b80ab6fa718b32fd191373c05d5949b7a1c01aa1eaacbef49\",frameRate:null}],primaryVariationId:89908196,cpAttributes:{masterCaptionDocId:null},resourceForId:null,resourceForRevision:null}]},job:null,agentNameForCurrentUser:\"\"};e.isClaimable=\"true\"===\"True\".toLowerCase(),e.qualificationLevel=\"regular\",fileManagement.initializeObjects(e),$('[data-toggle=\"tooltip\"]').tooltip()})</script></div></div></div><div class=row><div class=col-md-12><div class=\"section oe-comments\"><h1 class=header>Comments</h1><div class=row><div class=col-sm-8></div><div class=col-sm-4><h1>History</h1></div></div></div></div></div></div><div class=\"fade modal\"id=flag-tr-problem-modal><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button aria-hidden=true class=close data-dismiss=modal></button><h3>Report Problem</h3></div><div class=modal-body><form action=\"https://www.rev.com/workspace/FlagTranslationProblem?projectNumber=TR0193648697P-1\"id=ft_Control_1 method=post class=oe-problem data-ordertype=Translation><input type=hidden name=__RequestVerificationToken value=4dEyJJ16PW4Mysbgm5OXXrsFCWCw7CB9tdESWP2J3rVrJ3vLGypXwPTVKQGYGv68Srd8hWxLd8DITRN-yy7pOdfkseMZZxIv7-z9_E6HRMrHk-WK0><h1>What is the problem?</h1><ul><li><label class=\"radio report-problem-modal\"><input type=checkbox name=Types value=WrongLanguagePair> Wrong language</label><li><label class=\"radio report-problem-modal\"><input type=checkbox name=Types value=Underpriced> Underpriced project<div class=\"none underpriced-reasons-container\"><ul class=\"underpriced-reasons-list unstyled\"><li><label class=radio><input type=checkbox name=UnderpricedReasons value=HighWordDensity> High word density</label><li><label class=radio><input type=checkbox name=UnderpricedReasons value=TechnicalContent> Technical content</label><li><label class=radio><input type=checkbox name=UnderpricedReasons value=HighFormatting> High formatting</label></ul></div></label><li><label class=\"radio report-problem-modal\"><input type=checkbox name=Types value=Unworkable> Unworkable project</label></ul><a href=https://www.rev.com/workspace/project/TR0193648697P-1# class=\"btn windows ws-submit disabled btn-std\"><span class=btn-label>Report Problem</span></a></form></div><div class=modal-footer></div></div></div></div></div></div><div class=push></div></div><footer><div id=footer-bottom><div class=container><div class=row><div class=\"span3 col-sm-2\">Copyright Rev 2019.</div><div class=\"col-sm-4 span4\"><a href=https://www.rev.com/about/terms rel=nofollow>Terms of Service</a> | <a href=https://www.rev.com/about/privacy rel=nofollow>Privacy Policy</a></div><div class=\"col-sm-6 contact-info span5\">Need help? Email us at: <a href=mailto:support@rev.com>support@rev.com</a></div></div></div></div></footer></div><div class=popup id=type-popup data-position=right style=top:273px;left:614.5px;opacity:0;display:none><ul><li>Use the Rev certified template<li>Final output: Certified PDF</ul></div><script>var popup=new ft_Tooltip(\"type-popup\");popup.hover($(\".oe-order-type-val\"),\"right\")</script><script>$(function(){$(\".file-info\").popover();new ft_Modal(\"zip-building-progress\",{show:!1})})</script><script>$(function(){new ft_AgentProjectDetails(902522078,\"TR0193648697P-1\");ft_RecentlyViewed.registerView(\"TR0193648697P-1\",\"project\")})</script><script>window.TcRookieProgressInit&&window.TcRookieProgressInit(14,!1)</script><script>$(function(){$(\".btn, .os-specific\").addClass(window.RevBowser.getOsCssClass()),$(\".faq-tooltip-link\").popover({html:!0,trigger:\"click\",content:function(){return $(\"#\"+$(this).data(\"q\")).find(\".answer\").html()}}),$(\".faq-tooltip-link-hover\").popover({html:!0,trigger:\"manual\",animation:!1,content:function(){return $(\"#\"+$(this).data(\"q\")).find(\".answer\").html()}}).on(\"mouseenter\",function(){var o=this;$(this).popover(\"show\"),$(this).siblings(\".popover\").on(\"mouseleave\",function(){$(o).popover(\"hide\")})}).on(\"mouseleave\",function(){var o=this;setTimeout(function(){$(\".popover:hover\").length||$(o).popover(\"hide\")},100)}),$(\"FORM\").each(function(){var o=ft_Control.get(this);o||(o=new ft_Form(this))}),$(\".infotip, .popover-tip\").each(function(){$(this).popover()})})</script><script>rev_Mixpanel=new ft_Mixpanel(\"d24fd33359700c4000bbd1c190f60e32\",\"mirlanochka@gmail.com\",\"rev\",!1)</script><script>$(function(){rev_Mixpanel.trackLinks(\"mixpanel-link\")})</script><script>var MTIProjectId=\"232a0719-41f6-4af7-91a7-3726538d2e6a\";!function(){var t=document.createElement(\"script\");t.type=\"text/javascript\",t.async=\"true\",t.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"//fast.fonts.net/t/trackingCode.js\",(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(t)}()</script><div id=cboxOverlay style=display:none></div><div id=colorbox role=dialog tabindex=-1 style=display:none><div id=cboxWrapper><div><div id=cboxTopLeft style=float:left></div><div id=cboxTopCenter style=float:left></div><div id=cboxTopRight style=float:left></div></div><div style=clear:left><div id=cboxMiddleLeft style=float:left></div><div id=cboxContent style=float:left><div id=cboxTitle style=float:left></div><div id=cboxCurrent style=float:left></div><button id=cboxPrevious type=button></button><button id=cboxNext type=button></button><button id=cboxSlideshow></button><div id=cboxLoadingOverlay style=float:left></div><div id=cboxLoadingGraphic style=float:left></div></div><div id=cboxMiddleRight style=float:left></div></div><div style=clear:left><div id=cboxBottomLeft style=float:left></div><div id=cboxBottomCenter style=float:left></div><div id=cboxBottomRight style=float:left></div></div></div><div style=position:absolute;width:9999px;visibility:hidden;display:none;max-width:none></div></div><div class=igtranslator-main-div style=display:none;width:0;height:0><iframe src=\"./Project - TR0193648697P-1_files/saved_resource.html\"frameborder=0 class=igtranslator-iframe scrolling=no></iframe></div><div class=\"bounceIn igtranslator-activator-icon\"style=background-image:url(chrome-extension://dledpjadmedkjcdgghijfieiogokjika/data/icons/home.png);display:none title=\"Click to Show Translation\"></div><div class=\"directly-rtm is-hidden is-minimized\"><iframe src=\"./Project - TR0193648697P-1_files/chat.html\"height=0 width=0 frameborder=0></iframe></div>";



var notificationController = (function () {

    var messages = {
        one: "One project was claimed.",
        more: ' projects were claimed.'
    };

    var opts = {
        notification: false,
        audioNotification: false,
        soundName: ''
    };

    chrome.storage.sync.get([Settings.notificationEnabled,
                                   Settings.soundNotificationEnabled,
                                   Settings.soundName],function (items) {

        opts.notification = items[Settings.notificationEnabled] !== undefined && items[Settings.notificationEnabled];
        opts.audioNotification = items[Settings.soundNotificationEnabled] !== undefined && items[Settings.soundNotificationEnabled];
        opts.soundName = items[Settings.soundName] != undefined ? items[Settings.soundName] : '';
    });

    function messageNotification(data) {
        var opt = {
            type: 'basic',
            title: 'Claimed.',
            message: data.count == 1 ? messages.one : data.count + messages.more,
        };
        chrome.notifications.create(opt, null);
    }

    function soundNotification() {
        var audio = new Audio(Audios[opts.soundName]);
        audio.play();
    }

    return {
        claimedNotification : function (data) {
            if(opts.notification){
                messageNotification(data);
            }
            if(opts.audioNotification){
                soundNotification();
            }
        },
        foundNotification: function () {
            if(opts.notification){
                var opt = {
                    type: 'basic',
                    title: 'Found some projects',
                    message: 'We found some unclaimed projects',
                };
                chrome.notifications.create(opt, null);
            }
        }
    }
})();

var claimController = (function (notification) {
    var _this = this;

    var parseProjects = function (projects) {
        for (let i = 0; i < projects.length; i++) {
            var project = projects[i];
            console.log(projects[i]);
            $.get(Urls.Details + project.ProjectId, (data, status) => {
                processDetails(data,status,project);
            });
        }
    };

    var processDetails = function(data, status, project){
        var doc = (new DOMParser()).parseFromString(detailsPageSource,"text/html"); // TODO: TODO: detailsPageSource only for testing purpose, need to parse 'data'
        var detailsPage =  $(doc);
        if(isNoticed(doc)){
            console.log("Project is not available: " + project.ProjectId);
            return;
        }
        var form = $(detailsPage).find(DomStrings.claimForm.formId).first();
        if(form === undefined || form === null){
            return;
        }
        var action = $(form).attr('action');
        var dataPost = '';
        var hiddens = $(form).find('input[type=hidden]');
        hiddens.each(function (index, element) {
            dataPost += '&' + $(element).attr('name') + '=' + $(element).attr('value');
        });
        if(action !== undefined && dataPost !== ''){
            $.ajax({
                method:'POST',
                url: action,
                data: dataPost
            })
                .done((data) => {
                    processClaim(data,project);
                })
                .fail((data,status) => {
                    processErrorClaim(data);
                })
        }
    };

    var processClaim = function (data,project) {
        var doc = (new DOMParser()).parseFromString(data, "text/html");
        if(isError(doc)){
            console.log("Project is claimed or not available: " + project.ProjectId);
            return;
        }
        console.log('Done: ' + doc);
    };

    var processErrorClaim = function (data) {
        console.log('Fail:' + status);
    };

    var isNoticed = function (doc) {
      var noticed = doc.querySelector(DomStrings.detailsNotice);
      return noticed !== null ;
    };

    var isError = function (doc) {
        var error = doc.querySelector(DomStrings.claimError);
        return error !== null;
    };

    return {
        init: function () {
            chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
                if(msg.message == RevMessages.FreeProjects){
                    parseProjects(msg.payload);
                }
            });
        }
    }

})(notificationController);

var updateController = (function () {
        var registeredTabs = {};

        var isRegistered = function (tabId) {
            return registeredTabs[tabId] !== undefined;
        };

        var getState = function (tabId) {
            var state = registeredTabs[tabId];
            return state;
        };

        var startMonitoring = function(data){
            if(!isRegistered(data.tab.id)){
                registeredTabs[data.tab.id] = new State(data.tab.id, +data.interval);
            }
            var state = registeredTabs[data.tab.id];
            state.interval = +data.interval;
            state.tabUrl = data.tab.url;
            state.timer = setInterval(function () {
                updateTab(state.tabId);
            },state.interval * 1000);
            state.isRunning = true;
        };

        var stopMonitoring = function(tabId){
            var state = registeredTabs[tabId];
            if(state !== undefined){
                clearInterval(state.timer);
                state.timer = null;
                state.isRunning = false;
            }
        };

        var updateTab = function(tabId){
            var state = registeredTabs[tabId];
            if(!state){
                return;
            }
            chrome.tabs.update(state.tabId,{url: state.tabUrl});
            console.log("Update: " + state.tabUrl + ' ' + state.tabId);
            stopMonitoring(tabId);
        };

        return {
            isRegistered: function (tabId) {
                return isRegistered(tabId);
            },
            getState : function (tabId) {
                return getState(tabId);
            },
            start : function (data) {
                startMonitoring(data);
            },
            stop: function (data) {
                stopMonitoring(data.tab.id);
            }
        }
})();

claimController.init();
