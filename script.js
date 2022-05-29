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
    if (Number(b) === 0) {
        return 'Error'
    } else {
    return Number(a) / Number(b);
    }
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
    } else return ''
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
        }
    })
}
function operators(){
    document.querySelector('.calculator')
    .addEventListener('click', event => {
        if (event.target.className.includes('operator')){
            if (operator.includes('+') || operator.includes('-') || operator.includes('*') || operator.includes('/')) {
                if (operator.includes('+')){
                    let result = operate(arr2.join(''),operator,arr.join(''))
                    document.querySelector('.screen').innerText = result;
                    arr2 = [];
                    arr2.push(Number(result))
                    arr = [];
                    operator = '';
                    operator = event.target.innerText;
                } else if (operator.includes('-')){
                    let result = operate(arr2.join(''),operator,arr.join(''))
                    document.querySelector('.screen').innerText = result;
                    arr2 = [];
                    arr2.push(Number(result))
                    arr = [];
                    operator = '';
                    operator = event.target.innerText;
                } else if (operator.includes('/')){
                    let result = operate(arr2.join(''),operator,arr.join(''))
                    document.querySelector('.screen').innerText = result;
                    arr2 = [];
                    arr2.push(Number(result))
                    arr = [];
                    operator = '';
                    operator = event.target.innerText;
                } else if (operator.includes('*')){
                    let result = operate(arr2.join(''),operator,arr.join(''))
                    document.querySelector('.screen').innerText = result;
                    arr2 = [];
                    arr2.push(Number(result))
                    arr = [];
                    operator = '';
                    operator = event.target.innerText;
                }
            } else if (operator === ''){
                operator = event.target.innerText;
                arr2 = [...arr]
                arr = [];
                document.querySelector('.screen').innerText = operator;
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
            if (result.toString().split('').length > 13) {
                document.querySelector('.screen').innerText = result.toFixed(5);
            } else {
                document.querySelector('.screen').innerText = result;
            }
                arr = result.toString().split('');
                arr2 = [];
                operator = '';
        }
        }})
}
function clear() {
    document.querySelector('.calculator')
    .addEventListener('click', event => {
        if (event.target.className.includes('clear')) {
            arr = [];
            arr2 = [];
            operator = '';
            document.querySelector('.screen').innerText = '';
        }})
}
function backspace(){
    document.querySelector('.calculator')
    .addEventListener('click', event => {
        if (event.target.className.includes('backspace')){
            arr.pop();
            document.querySelector('.screen').innerText = arr.join('')
        }})
}
function keyboard(){
    keys = document.querySelectorAll('[data-key]');
    keysPad = document.querySelectorAll('[data-num]');
    let keyArray = [];
    let keyPadArray = [];
    let keysNum = [4, 5, 6, 8, 9, 10, 12, 13, 14, 16]
    let operatorNum = [1, 2, 7, 11];
    let dot = 17;
    let equal = 15;
    let backspace = 3;
    let clear = 0;
    let index = 0;
    let indexPad = 0;
    keys.forEach(key => keyArray.push(key.dataset.key));
    keysPad.forEach(key => keyPadArray.push(key.dataset.num));
    document.addEventListener('keydown', e => {
        if (keyArray.includes(`${e.keyCode}`) || keyPadArray.includes(`${e.keyCode}`)) {
        if (keyArray.includes(`${e.keyCode}`)){
        index = keyArray.indexOf(`${e.keyCode}`);
        }
        if (keyPadArray.includes(`${e.keyCode}`)) {
        indexPad = keyPadArray.indexOf(`${e.keyCode}`)
        }
        if (keysNum.includes(index)) {
            arr.push(keys[index].innerHTML);
            document.querySelector('.screen').innerText = arr.join('');
        } else if (keyPadArray.includes(`${e.keyCode}`)) {
            arr.push(keysPad[indexPad].innerHTML);
            document.querySelector('.screen').innerText = arr.join('');
        } else if (operatorNum.includes(index)) {
            if (operator.includes('+') || operator.includes('-') || operator.includes('*') || operator.includes('/')) {
                if (operator.includes('+')){
                    let result = operate(arr2.join(''),operator,arr.join(''))
                    document.querySelector('.screen').innerText = result;
                    arr2 = [];
                    arr2.push(Number(result))
                    arr = [];
                    operator = '';
                    operator = keys[index].innerHTML;
                } else if (operator.includes('-')){
                    let result = operate(arr2.join(''),operator,arr.join(''))
                    document.querySelector('.screen').innerText = result;
                    arr2 = [];
                    arr2.push(Number(result))
                    arr = [];
                    operator = '';
                    operator = keys[index].innerHTML;
                } else if (operator.includes('/')){
                    let result = operate(arr2.join(''),operator,arr.join(''))
                    document.querySelector('.screen').innerText = result;
                    arr2 = [];
                    arr2.push(Number(result))
                    arr = [];
                    operator = '';
                    operator = keys[index].innerHTML
                } else if (operator.includes('*')){
                    let result = operate(arr2.join(''),operator,arr.join(''))
                    document.querySelector('.screen').innerText = result;
                    arr2 = [];
                    arr2.push(Number(result))
                    arr = [];
                    operator = '';
                    operator = keys[index].innerHTML;
                }
            } else if (operator === ''){
                operator = keys[index].innerHTML;
                arr2 = [...arr]
                arr = [];
                document.querySelector('.screen').innerText = operator;
            }
        } else if (index === dot) {
            if (arr.includes('.')){
                return
            } else {
                arr.push(keys[index].innerHTML);
                document.querySelector('.screen').innerText = arr.join('');
            }
        } else if (index === equal) {
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
            if (result.toString().split('').length > 13) {
                document.querySelector('.screen').innerText = result.toFixed(5);
            } else {
                document.querySelector('.screen').innerText = result;
            }
                arr = result.toString().split('');
                arr2 = [];
                operator = '';
        }
        } else if (index === backspace) {
                arr.pop();
                document.querySelector('.screen').innerText = arr.join('');
        } else if (index === clear) {
            arr = [];
            arr2 = [];
            operator = '';
            document.querySelector('.screen').innerText = '';
        }
} else {
    return;
}
})
}
keyboard();
buttons();
dot();
operators();
equal();
clear();
backspace();