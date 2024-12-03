function appendToScreen(value) {
    const screen = document.getElementById("screen");
    screen.value += value;
}

function clearScreen() {
    const screen = document.getElementById("screen");
    screen.value = '';
}

function deleteChar() {
    const screen = document.getElementById("screen");
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    const screen = document.getElementById("screen");
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}
