script
function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('minValue').value, 10);
    const maxValue = parseInt(document.getElementById('maxValue').value, 10);

    if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
        document.getElementById('result').textContent = "Введите корректные значения.";
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    document.getElementById('result').textContent = `Случайное число: ${randomNumber}`;
}
