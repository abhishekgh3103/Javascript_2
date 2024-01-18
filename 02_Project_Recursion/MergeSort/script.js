const mergeSortRec = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSortRec(leftArr), mergeSortRec(rightArr));
};

const merge = (leftArray, rightArray) => {
    let result = [];
    let iL = 0;
    let iR = 0;

    while (iL < leftArray.length && iR < rightArray.length) {
        if (leftArray[iL] < rightArray[iR]) {
            result.push(leftArray[iL]);
            iL++;
        }
        else {
            result.push(rightArray[iR]);
            iR++;
        }
    }

    while ( iL < leftArray.length) {
        result.push(leftArray[iL]);
        iL++;
    }

    while ( iR < rightArray.length) {
        result.push(rightArray[iR]);
        iR++;
    }

    return result;

};

console.log(mergeSortRec([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSortRec([105, 79, 100, 110]));