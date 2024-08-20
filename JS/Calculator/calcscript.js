function resultView(value) {
    let display = document.getElementById('display');
    display.value = display.value + value;
}

function check() {

    // or we can use array method. but might need two for loops.

    let display = document.getElementById('display');
    let expression = display.value;
    let num1 = '';
    let num2 = '';
    let operator = '';
    let flag = false;

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] == '+' || expression[i] == '-' || expression[i] == '*' || expression[i] == '/') {
            operator = expression[i];
            flag = true;
        } else if (flag == false) {
            num1 = num1 + expression[i];
        } else {
            num2 = num2 + expression[i];
        }
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let result = calculation(num1, num2, operator);
    display.value = result;
}

function calculation(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return divide(num1, num2);
        default:
            return "Error";
    }
}

function clearDisp() {
    let display = document.getElementById('display');
    display.value = '';  
}





function divide(a, b) {
    if (b === 0) {
        return "Cant divide by zero. Sryyyy";
    }

    else{
    return a / b;}
}