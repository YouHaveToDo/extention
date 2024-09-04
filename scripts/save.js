function save(count, name, phone) {
    chrome.runtime.sendMessage({action: "sendToContentScript", data: {count, name, phone}}, function (response) {
        console.log('Response from background:', response);

        alert("saved...")
    });
}