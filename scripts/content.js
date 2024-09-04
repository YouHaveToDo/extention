let options;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    options.count = message.data.count;
    options.name = message.data.name;
    options.phone = message.data.phone;

    sendResponse({response: options});
});

function simulateKeyPress(node, value, isString) {
    if (isString) {
        const keydownEvent = new KeyboardEvent('keydown', {
            key: value,
            char: value,
            shiftKey: false,
            bubbles: true,
            cancelable: true
        });

        const keypressEvent = new KeyboardEvent('keypress', {
            key: value,
            char: value,
            shiftKey: false,
            bubbles: true,
            cancelable: true
        });

        const keyupEvent = new KeyboardEvent('keyup', {
            key: value,
            char: value,
            shiftKey: false,
            bubbles: true,
            cancelable: true
        });

        node.dispatchEvent(keydownEvent);
        node.dispatchEvent(keypressEvent);
        node.value += value;
        node.dispatchEvent(keyupEvent);
    } else {
        const keydownEvent = new KeyboardEvent('keydown', {
            key: value,
            code: `Digit${value}`,
            keyCode: value.charCodeAt(0),
            charCode: value.charCodeAt(0),
            bubbles: true,
            cancelable: true
        });

        const keypressEvent = new KeyboardEvent('keypress', {
            key: value,
            code: `Digit${value}`,
            keyCode: value.charCodeAt(0),
            charCode: value.charCodeAt(0),
            bubbles: true,
            cancelable: true
        });

        const keyupEvent = new KeyboardEvent('keyup', {
            key: value,
            code: `Digit${value}`,
            keyCode: value.charCodeAt(0),
            charCode: value.charCodeAt(0),
            bubbles: true,
            cancelable: true
        });

        node.dispatchEvent(keydownEvent);
        node.dispatchEvent(keypressEvent);
        node.value += value;
        node.dispatchEvent(keyupEvent);
    }
}

function reservation() {
    let isReady = document.querySelector("#timeTable")

    if (isReady) {
        clearInterval(interval)

        const time = document.querySelector(".td-title label")
        const type = document.querySelector("label[for='userType-P']")
        const count = document.querySelector("#headcount")
        const name = document.querySelector("#user2")
        const phone = document.querySelector("#user2_contact")


        time.click();
        type.click();

        // count
        count.focus()
        const countNum = options.count
        simulateKeyPress(count, countNum, false);

        // name:
        name.focus()
        const nameChar = options.name
        for (let char of nameChar) {
            simulateKeyPress(name, char, true);
        }

        // phone
        phone.focus()
        const phoneNum = options.phone
        for (let num of phoneNum) {
            simulateKeyPress(phone, num, false);
        }

        document.querySelector("#answer").focus()

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                document.querySelector("#check").click()
            }

            if (event.key === 'Shift') {
                document.querySelector("#btnReservation").click()
            }
        });
    }
}

let interval = setInterval(reservation, 100)
