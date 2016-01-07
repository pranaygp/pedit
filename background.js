// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                // That fires when a page's URL contains a 'g' ...
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'http://vichitr.com' },
//                        pageUrl: { urlContains: '127.0.0.1' },
                    })
                ],
                // And shows the extension's page action.
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});


/* Logic */

var active = false;

// background/event page
chrome.pageAction.onClicked.addListener(function(tab) {
    if(!active){
        chrome.pageAction.setIcon({tabId: tab.id, path:"images/chrome-extension-square.png"});
        active = true;

        chrome.tabs.executeScript({
            file: 'pedit-init.js'
        });
    } else {
        chrome.pageAction.setIcon({tabId: tab.id, path:"images/chrome-extension-square-grey.png"});
        active = false;
        chrome.tabs.executeScript({
            file: 'pedit-save.js'
        });
    }
});
