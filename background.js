chrome.tabs.onCreated.addListener((tabId, changeInfo, tab) => {
    //retriveAllHistory();
});

chrome.runtime.onInstalled.addListener(() => {
    // retriveAllHistory();
});

function retriveAllHistory() {

    chrome.history.search({text: '', startTime: 0, maxResults: 0}, function(data) {

        // console.log(data.length);
        data.forEach(function(page) {
            
            console.log(page.url);
        });
    });    
}