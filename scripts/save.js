function save(time, count, name, phone) {
    chrome.runtime.sendMessage({action: "saveOptions", data: {time, count, name, phone}});
}