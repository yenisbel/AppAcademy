// mySum
function sumNumber() {
    let sumTotal = 0;
    for (let i = 0; i < arguments.length; i++) {
        sumTotal += arguments[i];  
    }
    return sumTotal
}

function sumNumber2(...values) {
    let sumTotal = 0
    for (let j = 0; j < values.length; j++) {
        sumTotal += values[j];   
    }
    return sumTotal
}

function sumNumber3(...numbers) {
    let sumTotal = 0
    numbers.forEach(element => {sumTotal += element});
    return sumTotal
}

console.log(sumNumber(1, 2, 3, 4, 5))

console.log(sumNumber2(1, 2, 3, 4, 5))
console.log(sumNumber3(1, 2, 3, 4, 5))


// myBind
Function.prototype.myBind = function (context) {
    const bindArgs = Array.from(arguments).slice(1)
    return () => {
        const callArgs = Array.from(arguments);
        return this.apply(ctx, bindArgs.concat(callArgs));
    };
}

Function.prototype.myBind = function (context, ...bindArgs) {
    return(...callArgs) => {
        return this.apply(context, bindArgs.concat(callArgs));
    };
}

// myCurry
function curriedSum(numArgs) {
    numbers = [];
    return function _curriedSum(n) {
        numbers.push(n)
        if (numbers.length === numArgs) {
            let sumTotal = 0
            numbers.forEach(element => {
                sumTotal += element
            });
            return sumTotal
        } else {
            return _curriedSum
        }
    };
}

const sum = curriedSum(4);
sum(5)(30)(20)(1);
// _curriedSum keeps collecting arguments and returning itself until it has enough arguments, 
// at which point it actually does The Summing

// Prototype Curry

Function.prototype.myCurry = function (numArgs) {
    const arrNumbers = []
    const funcT = this
    return function _myCurryFunc(number) {
        arrNumbers.push(number)
        if (arrNumbers.length === numArgs) {
            return funcT(...arrNumbers);
        } else {
            return _myCurryFunc;
        }
    }
}

Function.prototype.myCurry = function (numArgs) {
    const arrNumbers = [];
    const funcT = this;
    return function _myCurryFunc(value) {
        arrNumbers.push(value);
        if (arrNumbers.length === numArgs) {
            return funcT.apply(null, arrNumbers)
        } else {
            return _myCurryFunc
        }
    }
}

