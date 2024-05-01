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


function operate (){
    console.log(operator);
    if (operator != undefined && firstNumber != undefined){
         secondNumber = parseFloat(displayValue);
        console.log(secondNumber)
     }
    
    if (operator === "+"){
         displayValue = addMe(firstNumber, secondNumber)
         operator = undefined;

    }
    else if (operator === "-"){
          displayValue = substractMe(firstNumber, secondNumber)
          operator = undefined;

    }
    else if (operator === '/'){
          displayValue = divideMe(firstNumber, secondNumber)
          operator = undefined;

    }
    else if (operator === '*'){
          displayValue = multiplyMe(firstNumber, secondNumber)
          operator = undefined;
    }
   if (operated === false){
    operated = true;
   }
    if (reoperated === true){
        reoperated = false;
    }
  
    Number.isNaN(displayValue) ? displayField.textContent = "Division by zero is ILLEGAL" : displayField.textContent = displayValue
}
let firstNumber;
let secondNumber;
let operator;

const displayField = document.querySelector('#display');
let displayValue;
let operated = false;
let reoperated = false;
let logArray = [];
function logNumber(e){
  
  if (displayField.textContent == 0 && firstNumber === undefined){
        displayField.textContent = '';
        
      }
  else if(displayField.textContent == firstNumber){
    if (firstNumber != e.target.textContent){
      displayField.textContent = ''
          } 
 else {displayField.textContent = '';
     logArray[0] = firstNumber
     firstNumber = undefined;
    }
    displayField.textContent = parseFloat(logArray[0]);
   }

   displayField.textContent += parseFloat(e.target.textContent);
   displayValue = displayField.textContent
   if (firstNumber === undefined){
    firstNumber = logArray[0];
   }
 
    if (reoperated === true && operated === true){
        secondNumber = ''; 
        secondNumber = parseFloat(displayValue)
    }
    
    return displayValue;
  }

function logOperator(e){
   if (operator === undefined){
    operator = `${e.target.textContent}`;
    
   }
   if (operator != undefined && firstNumber === undefined){
    firstNumber = parseFloat(displayValue);
    //  displayField.textContent = firstNumber
    // displayValue = undefined
  }
 else if (operator != undefined && firstNumber != undefined && secondNumber === undefined){
    secondNumber = parseFloat(displayValue)
  }
  // the following should probs be a separate function that then gets called here
  else if (secondNumber === undefined && firstNumber != undefined && operator != undefined){
    secondNumber = parseFloat(displayValue);
    operate();
    displayField.textContent = displayValue;
    firstNumber = displayValue;
    operator = `${e.target.textContent}`;
  }
  else if (reoperated === false && secondNumber != undefined && firstNumber != undefined && operator != undefined){
    operate();
    reoperated = true;
    displayField.textContent = displayValue;
    firstNumber = displayValue;
    operator = `${e.target.textContent}`;
  }
   else if (reoperated === true && secondNumber != undefined && firstNumber != undefined && operator != undefined){
    operate();
    operator = `${e.target.textContent}`;
    displayField.textContent = displayValue;
    firstNumber = displayValue;

   }
  return operator
}

function clearDisplay(){
    displayField.textContent = 0;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    operated = false;
    reoperated = false;
    displayValue = undefined;
    // displayValue = undefined;
}
const buttons = Array.from(document.querySelectorAll('.numberbtn'));
const btnNumbers = buttons.map(button => button.textContent);
buttons.forEach((button) => {
    button.addEventListener('click', logNumber);
    });

const clearBtn = document.querySelector('#clearbtn');
clearBtn.addEventListener('click', clearDisplay);   

const operateBtn = document.querySelector('#operatebtn')
operateBtn.addEventListener('click', operate);   

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
