const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value); // Calculate the result
    } catch {
        display.value = 'Error'; // Handle invalid input
        setTimeout(clearDisplay, 1500); // Clear after 1.5 seconds
    }
}