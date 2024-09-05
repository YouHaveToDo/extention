function save(count, name, phone) {
    chrome.runtime.sendMessage({action: "saveOptions", data: {count, name, phone}});
}