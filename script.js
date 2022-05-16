function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}

function operate(a,operator,b) {
    if(operator === '+') {
        return add(a,b)
    } else if (operator === '-') {
        return subtract(a,b)
    } else if (operator === '*') {
        return multiply(a,b)
    } else if (operator === '/') {
        return divide(a,b)
    } else return 'Wrong'
}
let arr = []
let operator = '';
function buttons() {
    document.querySelector('.calculator')
    .addEventListener('click', event => {
        if (event.target.className.includes('number')){
            arr.push(event.target.innerText);
            document.querySelector('.screen').innerText = arr.join('');
            console.log(arr);
        }
    })
}
function dot(){
    document.querySelector('.dot').addEventListener('click', event => {
        if (arr.includes('.')){
            return
        } else {
            arr.push(event.target.innerText);
            document.querySelector('.screen').innerText = arr.join('');
            console.log(arr);
        }
    })
}
function operators(){
    document.querySelector('.calculator')
    .addEventListener('click', event => {
        if (event.target.className.includes('operator')){
            if (operator.includes('+*/-')) {
                operator = '';
                operator = event.target.innerText;
                console.log(operator)
            } else {
                operator = event.target.innerText;
                console.log(operator)
        }
    }})
}
buttons();
dot();
operators();