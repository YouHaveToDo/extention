document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#save').addEventListener('click', () => {
        const time = findCheckedInput()
        const count = document.querySelector('#count')
        const name = document.querySelector('#name')
        const phone = document.querySelector('#phone')

        save(time?.value ?? "", count.value, name.value, phone.value)
        alert("saved....")
    });
});