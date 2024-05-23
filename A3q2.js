function isArmstrongNumber(num) {
    let sum = 0;
    const digits = num.toString().split('');
    const numDigits = digits.length;

    for (let digit of digits) {
        sum += Math.pow(parseInt(digit), numDigits);
    }

    return sum === num;
}

const number = parseInt(prompt("Enter a number to check if it is an Armstrong number:"));
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}
