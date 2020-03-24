function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivot = array.shift();
    let leftArray = array.filter(el => el < pivot);
    let rightArray = array.filter(el => el >= pivot);
    let leftSort = quickSort(leftArray);
    let rightSort = quickSort(rightArray);
    return [...leftSort, pivot, ...rightSort];

}


module.exports = {
    quickSort
};