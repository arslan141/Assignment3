function printPattern() {
    let currentNumber = 1;
    for (let row = 1; row <= 4; row++) {  // There are 4 rows
        let rowOutput = "";
        for (let col = 1; col <= row; col++) {  // Number of columns in each row equals the row number
            rowOutput += currentNumber + " ";
            currentNumber++;
        }
        console.log(rowOutput.trim());  // Trim to remove the trailing space and print the row
    }
}

printPattern();
