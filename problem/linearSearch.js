function linearSearch(arr, val) {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return 'Not Found';
}

const result = linearSearch(['a', 'b', 'c', 'd', 'c'], 'e');

console.log(result);