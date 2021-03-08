var Prompt = require('prompt-sync')();
var result = 0;
var ask = 'yes';
function Calculate() {
    var operations = ["Возможные операции", "Сложeние", "Вычитание", "Умножение", "Деление"];
    for (var i = 0; i < operations.length; i++) {
        i > 0 ? console.log(i + ": " + operations[i]) : console.log(operations[i]);
    }
    var operand = Prompt('Выберите номер операции _ ');
    while (operand != '1' && operand != '2' && operand != '3' && operand != '4') {
        console.log(operand + "? \u0422\u0430\u043A\u043E\u0439 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043D\u0435 \u0437\u043D\u0430\u044E. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u043E\u0442 1 \u0434\u043E 4");
        operand = Prompt('Выберите номер операции _ ');
    }
    console.log("\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438 \"" + operations[operand] + "\"");
    var first;
    var second;
    checkNumbers();
    function checkNumbers() {
        first = Prompt('Укажите первое число _ ');
        second = Prompt('Укажите второе число _ ');
        if (isNaN(first) == true || isNaN(second) == true) {
            console.log('Пожалуйста, вводите только числа');
            checkNumbers();
        }
    }
    switch (operand) {
        case '1':
            result = +first + +second;
            break;
        case '2':
            result = first - second;
            break;
        case '3':
            result = first * second;
            break;
        case '4':
            result = first / second;
            break;
    }
    console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 = " + result);
    ask = '0';
    ask = Prompt("Еще? Введите yes _  ");
}
while (ask == 'yes') {
    Calculate();
}
console.log('Пока!');
