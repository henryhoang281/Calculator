let num1 = '';
let num2 = '';
let operator = '';

const calculatorDisplay = document.querySelector('.calculator-display');
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const resetButton = document.querySelector('.reset');
const percentageButton = document.querySelector('.percentage');
const decimalButton = document.querySelector('.decimal');
const positiveNegativeButtons = document.querySelector('.positive-negative');

function add(a, b){
    return a + b;
}
function abstract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function operate(num1, num2, operator){
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return abstract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

function displayNum(number){
    if(num1.length <= 10) {
    num1 += number;
    calculatorDisplay.textContent = num1;
}}
numButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        displayNum(e.target.textContent);
    });
});

function resetCalculator(){
    num1 = '';
    num2 = '';
    operator = '';
    calculatorDisplay.textContent = '0';
}
resetButton.addEventListener('click', resetCalculator);


