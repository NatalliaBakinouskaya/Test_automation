const Prompt: any = require('prompt-sync')();

let result: number = 0;
let ask: string = 'yes';
function Calculate(){
    let operations:string[] = ["Возможные операции", "Сложeние", "Вычитание", "Умножение", "Деление"];
    for(let i = 0; i < operations.length; i++){
        i > 0? console.log(`${i}: ${operations[i]}`):console.log(operations[i]);
    }
    let operand: string = Prompt('Выберите номер операции _ ');

    while(operand != '1' && operand != '2' && operand != '3' && operand != '4'){
        console.log(`${operand}? Такой операции не знаю. Введите номер от 1 до 4`);
        operand = Prompt('Выберите номер операции _ ');
    } 
   
    console.log(`Вы выбрали "${operations[operand]}"` )
   
    let first: any;
    let second: any;
    checkNumbers();

    function checkNumbers(){
        first = Prompt('Укажите первое число _ ');
        second = Prompt('Укажите второе число _ ');
        if(isNaN(first) == true ||isNaN(second) == true ) {
            console.log('Пожалуйста, вводите только числа');
            checkNumbers();
        }
    }
    switch(operand){
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
console.log(`Результат = ${result}`);
ask = '0';
ask = Prompt("Еще? Введите yes _  ");

}


while(ask == 'yes'){
    Calculate();
}
console.log('Пока!')
