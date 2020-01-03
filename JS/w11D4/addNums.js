const readline = require('readline')
// First off, use readline.createInterface to create a global variable, reader. 
// Use process.stdin/process.stdout 
// Make sure to only use one instance of a reader and only close it once.
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question('Enter a number ', function (value) {
            let valueNumber = parseInt(value);
            sum += valueNumber;
            console.log(`The current sum is ${sum}`);
            addNumbers(sum, numsLeft - 1, completionCallback);
        });
    } else {
        completionCallback(sum);
    }
}

 addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));