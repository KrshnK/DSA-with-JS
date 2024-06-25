// Input :-> [ "(", "(", ")", ")", "(", ")" ]

let arr = ["(", "(", ")", ")", "(", ")" ,"{","}"]

function balancePar(arr, index = 0, counter = 0) {
    if (index === arr.length) {
        return counter == 0
    }

    if (counter < 0) {
        return false
    }

    if (arr[index] == "(" || arr[index] == "{" || arr[index] == "[") {
        return balancePar(arr, index + 1, counter + 1)
    } else if (arr[index] == ")" || arr[index] == "}" || arr[index] == "]") {
        return balancePar(arr, index + 1, counter - 1)
    } else {
        return false
    }
}
console.log(balancePar(arr));