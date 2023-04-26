let currentNum = '';
let previousNum = '';
let operator = '';

const previousNumDisplay = document.querySelector('.previous-number');
const currentNumDisplay = document.querySelector('.current-number');
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operators');
const equalButton = document.querySelector('.equal');
const resetButton = document.querySelector('.reset');
const percentageButton = document.querySelector('.percentage');
const decimalButton = document.querySelector('.decimal');
const absoluteButton = document.querySelector('.absolute');


function operate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === '+') {
        previousNum += currentNum; 
    }else if(operator === '-'){    
        previousNum -= currentNum;
    }else if(operator === 'x'){
        previousNum *= currentNum;
    }else if(operator === '/'){
        previousNum /= currentNum;
    } 
    previousNumDisplay.textContent = 0;
    currentNumDisplay.textContent = previousNum;
}

function displayNum(num){
    if(currentNum.length <= 10) {
    currentNum += num;
    currentNumDisplay.textContent = currentNum;
}}

function displayOperator(op){
    operator = op;
    previousNum = currentNum;
    previousNumDisplay.textContent = previousNum + ' ' + operator
    currentNum = '';
    currentNumDisplay.textContent = 0;
}

function resetCalculator(){
    currentNum = '';
    previousNum = '';
    operator = '';
    currentNumDisplay.textContent = '0';
    previousNumDisplay.textContent = '0';
}

operatorButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        displayOperator(e.target.textContent)
    })
})

numButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        displayNum(e.target.textContent);
    });
});

resetButton.addEventListener('click', resetCalculator);

decimalButton.addEventListener('click', (e) => {
    if(!num1.includes('.')){
    currentNum += '.';
    currentNumDisplay.textContent = currentNum;
}})

absoluteButton.addEventListener('click', (e) => {
    currentNumDisplay.textContent = -1 * currentNumDisplay.textContent;
})

percentageButton.addEventListener('click', (e) => {
    currentNumDisplay.textContent = currentNumDisplay.textContent / 100;
})

equalButton.addEventListener('click', operate);