/*
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});
*/

chrome.action.onClicked.addListener((tab) => {
    //injectScript();
})


function injectScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];

        chrome.scripting.executeScript({
            target : {tabId : activeTab.id},
            files : ['ImmersiveYTL.js']
        });
    });
}