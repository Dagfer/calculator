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
const keypad = document.querySelector('#keypad');
// for (let i = 0; i < 16; i++){
//     const keys = document.createElement('button');
//     keys.classList.add('keys')
//     keys.style.width = "calc(100%/4)";
//     keys.style.height = "calc(100%/4)";
//     keypad.appendChild(keys);    
// }
