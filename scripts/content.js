function fetchOptions() {
    return new Promise((resolve) => {
        chrome.runtime.sendMessage(
            {action: "fetchOptions"},
            function (response) {
                resolve(response.options);
            }
        );
    });
}

function findTimeLabel(timeOption) {
    const timeRow = document.querySelectorAll('.tableBox table tr')

    for (let row of timeRow) {
        if (row.textContent.includes(timeOption)) {
            return row.querySelector('.td-title label')
        }
    }

    return null
}

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

async function reservation() {
    let isReady = document.querySelector("#timeTable")

    if (isReady) {
        clearInterval(interval)

        const options = await fetchOptions();

        const time = findTimeLabel(options.time) ?? document.querySelector('.td-title label')
        const type = document.querySelector("label[for='userType-P']")
        const count = document.querySelector("#headcount")
        const name = document.querySelector("#user2")
        const phone = document.querySelector("#user2_contact")

        if (!type || !count || !name || !phone) {
            console.error("can't find elements");
            return;
        }

        time.click();
        type.click();

        // count
        count.focus()
        const countNum = options.count ?? "2"
        simulateKeyPress(count, countNum, false);

        // name:
        name.focus()
        const nameChar = options.name ?? "정종찬"
        for (let char of nameChar) {
            simulateKeyPress(name, char, true);
        }

        // phone
        phone.focus()
        const phoneNum = options.phone ?? "01077300539"
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
