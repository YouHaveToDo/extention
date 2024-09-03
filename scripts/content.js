function reservation() {
    let isReady = document.querySelector(".tableBox")

    if (isReady) {
        clearInterval(interval)

        let lastEnterPressTime = 0;
        const doublePressThreshold = 500;

        const time = document.querySelector(".td-title label")
        const type = document.querySelector('label[for="userType-P"]')
        const count = document.querySelector("#headcount")
        const name = document.querySelector("#user2")
        const phone = document.querySelector("#user2_contact")

        time.click();
        type.click();
        count.value = 2;
        name.value = "정종찬"
        phone.value = "01077300539"

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
