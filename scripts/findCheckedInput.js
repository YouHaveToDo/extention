function findCheckedInput() {
    const timeInputs = document.querySelectorAll('input[name="time"]');

    for (const input of timeInputs) {
        if (input.checked) {
            return input
        }
    }
    return null;
}