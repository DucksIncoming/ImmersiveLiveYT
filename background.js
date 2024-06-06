chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
  });

function inject(){
    activeTabId = 0;
    chrome.tabs.query(
        {
            active: true,
            windowType: "normal", 
            currentWindow: true
        },
        function(d){
            activeTabId = d[0].id;
        }
    );

    chrome.scripting.executeScript({
        target : {tabId : activeTabId},
        files : [ "immersive-live.js" ],
      })
      .then(() => console.log("script injected"));
}

function injectScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];

        chrome.scripting.executeScript({
            target : {tabId : activeTab.id},
            func : activeScript,
            args: []
        });
    });
}

function activeScript(){
    alert("UR FUCKIN MOMMA !!!");
}