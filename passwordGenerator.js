function generatePassword() {
    const length = parseInt(document.getElementById('userInput').value, 10);
    const includeLetters = document.getElementById('includeLetters').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    if (isNaN(length) || length <= 0) {
        document.getElementById('result').innerHTML = "Введите корректное число!";
        return;
    }

    const charPool = getCharacterPool(includeLetters, includeNumbers, includeSymbols);

    if (charPool.length === 0) {
        document.getElementById('result').innerHTML = "Выберите хотя бы один тип символов!";
        return;
    }

    const password = generateComplexPassword(length, charPool);
    document.getElementById('result').innerHTML = `Сгенерированный пароль: ${password}`;
}

function getCharacterPool(includeLetters, includeNumbers, includeSymbols) {
    let pool = '';
    if (includeLetters) pool += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) pool += '0123456789';
    if (includeSymbols) pool += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    return pool;
}

function generateComplexPassword(length, charPool) {
    const password = Array.from({ length }, () => charPool[Math.floor(Math.random() * charPool.length)]).join('');
    return password;
}

window.generatePassword = generatePassword;
