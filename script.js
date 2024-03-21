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
        return divideMeMe(firstNumber, secondNumber)
    }
    else if (operator === '*' || operator === 'x'){
        return multiplyMe(firstNumber, secondNumber)
    }
}