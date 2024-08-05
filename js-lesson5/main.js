function helloUser(Name) {
    return 'Hello, ' + Name;
}

console.log(helloUser('John'));

function checkArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]);
        }
    } console.log('Done.');
}

checkArray([1, 2, 3, 4, 5, 15, 90, 40, 6, 32]);


function calculate(firstNumber, secondNumber, operator) {
    const first = firstNumber;
    const second = secondNumber;
    const op = operator;
    switch (op) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        default:
            return 'Error';
    }
console.log(first, second, op);
}

console.log(calculate(10, 20, '+'));
console.log(calculate(40, 19, '-'));
console.log(calculate(13, 22, '*'));
console.log(calculate(100, 25, '/'));
console.log(calculate(100, 11, '/'));