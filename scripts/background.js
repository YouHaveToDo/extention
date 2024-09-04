chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "sendToContentScript") {
        console.log("back;" + request.data.count + request.data.name + request.data.phone)

        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            if (tabs[0].id) {
                chrome.tabs.sendMessage(tabs[0].id, {data: request.data}, function (response) {
                    console.log('Response from Content Script:', response);
                    sendResponse(response);
                });
            }
        });
        return true;
    }
});