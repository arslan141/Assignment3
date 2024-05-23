
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


function isSpecialNumber(num) {
    let sum = 0;
    const digits = num.toString().split('');
    
    for (let digit of digits) {
        sum += factorial(parseInt(digit));
    }
    
    return sum === num;
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number to check if it is a special number: ', (number) => {
    const num = parseInt(number);
    if (isSpecialNumber(num)) {
        console.log(`${num} is a special number.`);
    } else {
        console.log(`${num} is not a special number.`);
    }
    readline.close();
});
