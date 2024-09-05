const options = {
    count: "",
    name: "",
    phone: ""
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "saveOptions") {
        console.log("back script - saveOptions:" + request.data.count + request.data.name + request.data.phone)

        options.count = request.data.count
        options.name = request.data.name
        options.phone = request.data.phone

        console.log("back script - saveOptions after set:" + options)
    }

    if (request.action === "fetchOptions") {
        console.log('back script - fetchOptions', options);

        sendResponse({options});

        return true
    }
});