const options = {
    count: "",
    name: "",
    phone: ""
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    try {
        if (request.action === "saveOptions") {

            options.count = request.data.count
            options.name = request.data.name
            options.phone = request.data.phone
        }

        if (request.action === "fetchOptions") {
            sendResponse({options});

            return true
        }
    } catch (error) {
        console.error("Error in background script:", error.message);
    }
});