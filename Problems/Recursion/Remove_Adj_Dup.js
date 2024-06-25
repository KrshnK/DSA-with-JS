// Iterative

function adjDup(string) {
    let res = ""
    for (let i = 0; i < string.length; i++) {
        if (i === string.length - 1 || string[i] !== string[i + 1]) {
            res += string[i]
        }
    }
    return res
}

// console.log(adjDup("HHEELLOO")); // -> HELO

// Recursive

function recAdjDup(string) {
    if (string.length <= 1) {
        return string
    }

    if (string[0] === string[1]) {
        return recAdjDup(string.substring(1))
    } else {
        return string[0] + recAdjDup(string.substring(1))
    }
}

console.log(recAdjDup("HHEELLOO")); // -> HELO
