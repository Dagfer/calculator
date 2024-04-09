function addMe(firstNumber, secondNumber){
    return firstNumber + secondNumber
};

function substractMe(firstNumber, secondNumber){
    return firstNumber - secondNumber
}

function divideMe(firstNumber, secondNumber){
    return firstNumber / secondNumber
}

function multiplyMe(firstNumber, secondNumber){
    return firstNumber * secondNumber
}

let firstNumber
let secondNumber
let operator = '' 

function operate (firstNumber, operator, secondNumber){
    if (operator === "+"){
        return addMe(firstNumber, secondNumber)
    }
    else if (operator === "-"){
        return substractMe(firstNumber, secondNumber)
    }
    else if (operator === '/'){
        return divideMe(firstNumber, secondNumber)
    }
    else if (operator === '*' || operator === 'x'){
        return multiplyMe(firstNumber, secondNumber)
    }
}
const displayField = document.querySelector('#display');
let displayValue

function logNumber(e){
 displayField.textContent += parseInt(e.target.textContent);
 displayValue = displayField.textContent;
 return displayValue
}

function logOperator(e){
    return operator = ` ${e.target.textContent} `;
}
function clearDisplay(){
    displayField.textContent = '';
}
const buttons = Array.from(document.querySelectorAll('.numberbtn'));
const btnNumbers = buttons.map(button => button.textContent);
buttons.forEach((button) => {
    button.addEventListener('click', logNumber);
    });
const clearBtn = document.querySelector('#clearbtn');
clearBtn.addEventListener('click', clearDisplay);   

const operateBtn = document.querySelector('#operatebtn')

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', logOperator)

const minusBtn = document.querySelector('#substract');
minusBtn.addEventListener('click', logOperator)

const timesBtn = document.querySelector('#multiply');
timesBtn.addEventListener('click', logOperator)

const divideBtn = document.querySelector('#divide');
divideBtn.addEventListener('click', logOperator)


// for (let i = 0; i < 16; i++){
//     const keys = document.createElement('button');
//     keys.classList.add('keys')
//     keys.style.width = "calc(100%/4)";
//     keys.style.height = "calc(100%/4)";
//     keypad.appendChild(keys);    
// }
