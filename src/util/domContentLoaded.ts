function save(time: string, count: string, name: string, phone: string): void {
    chrome.runtime.sendMessage({action: "saveOptions", data: {time, count, name, phone}});
}

function findCheckedInput(): HTMLInputElement | null {
    const timeInputs: HTMLInputElement[] = Array.from(document.querySelectorAll('input[name="time"]'));

    for (const input of timeInputs) {
        if (input.checked) {
            return input
        }
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#save').addEventListener('click', () => {
        const time: HTMLInputElement = findCheckedInput()
        const count: HTMLInputElement = document.querySelector('#count')
        const name: HTMLInputElement = document.querySelector('#name')
        const phone: HTMLInputElement = document.querySelector('#phone')

        save(time?.value ?? "", count.value, name.value, phone.value)
        alert("saved....")
    });
});