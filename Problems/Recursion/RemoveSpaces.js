// Task is to remove all tabs and spaces from a string. this includes the character \t and " " froma string

// Iterative

function removeSpaces(string) {
    let res = ""
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (char !== " " && char !== "\t") {
            res += char
        }
    }
    return res
}
// console.log(removeSpaces("Hello Worl      d"));

// recursive

function recRemoveSpaces(string) {

    if (string.length == 0) {
        return ""
    }
    let firstChar = string[0]
    let restOfString = string.slice(1)

    if (firstChar == " " || firstChar == "\t") {
        return recRemoveSpaces(restOfString)
    } else {
        return firstChar + recRemoveSpaces(restOfString)
    }
}
console.log(recRemoveSpaces("Hello Worl      d"));