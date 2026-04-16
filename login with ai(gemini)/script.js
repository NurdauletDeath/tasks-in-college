const validPassword = "admin"; // Правильный пароль для примера

function startValidation() {
    const inputPass = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Запускаем рекурсивную проверку: 
    // сравниваем введенный пароль с правильным, начиная с индекса 0
    if (checkRecursive(inputPass, validPassword, 0)) {
        message.innerText = "Доступ разрешен!";
        message.style.color = "#4caf50";
    } else {
        message.innerText = "Неверный пароль!";
        message.style.color = "#f44336";
    }
}

function checkRecursive(input, target, index) {
    // 1. Если длины не совпадают изначально — сразу false
    if (input.length !== target.length) return false;

    // 2. Базовый случай: если мы дошли до конца строки и все символы совпали
    if (index === target.length) return true;

    // 3. Проверяем текущий символ
    if (input[index] !== target[index]) return false;

    // 4. Шаг рекурсии: вызываем эту же функцию для следующего символа
    return checkRecursive(input, target, index + 1);
}