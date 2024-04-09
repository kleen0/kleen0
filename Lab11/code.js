// Функция для вычисления 2^n с использованием цикла
function calculatePowerOfTwo() {
    // Запрос ввода пользователя
    var userInput = prompt("Enter a natural number n to calculate 2^n:");

    // Проверка на валидность ввода
    var n = parseInt(userInput);
    if (isNaN(n) || n < 0) {
        alert("You entered an incorrect number. Please enter a natural number.");
		// Повторный запрос числа
        calculatePowerOfTwo();
    } else {
        // Вычисление 2^n с использованием цикла
        var result = 1;
        for (var i = 0; i < n; i++) {
            result *= 2;
        }

        // Вывод результата
        alert("2 to the power " + n + " equals " + result);
    }
}

// Вызываем функцию при загрузке страницы
calculatePowerOfTwo();