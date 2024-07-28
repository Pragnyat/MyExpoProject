//Basic calculator
function calculator(number1,number2,operator) {
    var result=0;
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == 'x') {
        result = number1 * number2;
    }
    else if(operator == '/'){
        result = number1 / number2;
    }
    else if(operator == '%'){
        result = number1 % number2;
    }
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
var operator = '/';
var num1 = 31;
var num2 = 5;
calculator(num1,num2,operator);