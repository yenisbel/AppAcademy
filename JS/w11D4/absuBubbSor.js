const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// askIfGreaterThan(el1, el2, callback)

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Compare numbers: ${el1} is greater than ${el2} ?`, function (value) {
        if (value === 'yes') {
            callback(true);
        } else {
            callback(false);
        }
    });
}

// This recursive function
// innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop)

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
        // callback === anonymous function helper
        askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
            if (isGreaterThan) {
                // swap of elements in the array
                arr[i],arr[i + 1] = arr[i + 1], arr[i];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
    } else if (i == (arr.length - 1)){
        // i is at the end of the arr
        outerBubbleSortLoop(madeAnySwaps);
        return;
    }
}

// absurdBubbleSort(arr, sortCompletionCallback)
// use concept for Closure on this outerBubbleSortLoop inside of absurdBubbleSort
function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    }
    outerBubbleSortLoop(true);
}
// 1 Example
absurdBubbleSort([4, 7, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });
// 2 Example
absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });

