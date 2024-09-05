document.addEventListener('DOMContentLoaded', function () {
    const count = document.querySelector('#count')
    const name = document.querySelector('#name')
    const phone = document.querySelector('#phone')

    document.querySelector('#save').addEventListener('click', () => {
        save(count.value, name.value, phone.value)
        alert("saved....")
    });
});