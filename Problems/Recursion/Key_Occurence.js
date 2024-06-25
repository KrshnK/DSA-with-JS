// Iterative

function CountKey(arr, key) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            count++
        }
    }
    return count
}

// Recursive

function recCountKey(arr, key, index = 0) {
    if (index >= arr.length) {
        return 0
    }

    return (arr[index] == key ? 1 : 0) + recCountKey(arr, key, index + 1)
}

console.log(recCountKey([1,2,3,2,5,2,7,2],2)); // -> 4