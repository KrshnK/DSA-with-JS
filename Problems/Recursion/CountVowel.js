// Count vowel in a string using itration
// Time Complexity: O(n)
// Space Complexity: O(1)

function isVowel(char){
    let lowerChar = char.toLowerCase()
    let vowel = "aeiou"

    if(vowel.indexOf(lowerChar) != -1){
        return true
    } else {
        return false
    }
}

function countVowel(string){
    let count = 0
    for (let i = 0; i < string.length; i++) {
         if( isVowel(string[i])){
            count+=1
         }
    }
    return count
}
console.log(countVowel("Hello"))

// count vowel in a string using recursion
// Time Complexity: O(n)
// Space Complexity: O(n)

function recursiveCountVowel(string,stringLength){
    if (stringLength==1) {
        return Number(isVowel(string[0]))
    }

    return recursiveCountVowel(string,stringLength-1) + isVowel(string[stringLength-1])
}

let mystring = "Hello"
console.log(recursiveCountVowel(mystring,mystring.length))