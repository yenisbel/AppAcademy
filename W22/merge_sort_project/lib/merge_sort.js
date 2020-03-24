function merge(array1, array2) {
    let sortedMerged = [];
    while (array1.length || array2.length) {
        let value1 = array1.length ? array1[0] : Infinity;
        let value2 = array2.length ? array2[0] : Infinity;
        let sorted;
        if (value1 > value2) {
            sorted = array2.shift();
        }else{
            sorted = array1.shift();
        }
        sortedMerged.push(sorted);
    }
    return sortedMerged;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array
    };
    let midIdx = array.length/2;
    let arrayLeft = mergeSort(array.slice(0, midIdx));
    let arrayRight = mergeSort(array.slice(midIdx));
    return merge(arrayLeft, arrayRight);
}

module.exports = {
    merge,
    mergeSort
};