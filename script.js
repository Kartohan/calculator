function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return Number(a) - Number(b);
}

function multiply(a,b) {
    return Number(a) * Number(b);
}
function divide(a,b) {
    return Number(a) / Number(b);
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
let arr2 = []
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
            if (operator.includes('+') || operator.includes('-') || operator.includes('*') || operator.includes('/')) {
                operator = '';
                operator = event.target.innerText;
                document.querySelector('.screen').innerText = operator;
                console.log(operator)
            } else if (operator === ''){
                operator = event.target.innerText;
                arr2 = [...arr]
                arr = [];
                document.querySelector('.screen').innerText = operator;
                console.log(operator)
                console.log(arr)
                console.log(arr2)
            }
    }})
}
function equal() {
    document.querySelector('.calculator')
    .addEventListener('click', event => {
        if (event.target.className.includes('equal')){
            if (arr.length === 0) {
                document.querySelector('.screen').innerText = 'Input number!';
            } else if (arr2.length === 0) {
                let first = arr.join('');
                let second = arr2.join('');
                let result = operate(first,operator,second);
                document.querySelector('.screen').innerText = result;
                arr = [];
                arr2 = [];
                operator = '';
            } else {
            let first = arr2.join('');
            let second = arr.join('');
            let result = operate(first,operator,second);
            document.querySelector('.screen').innerText = result;
                arr = [];
                arr2 = [];
                operator = '';
        }
        }})
}
buttons();
dot();
operators();
equal();