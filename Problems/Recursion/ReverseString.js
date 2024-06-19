// Iterative

function reverseString(string){
    let reverse = ''
    let length = string.length - 1

    while(length>=0){
        reverse += string[length]
        length--
    }

    return reverse
}

// console.log(reverseString('Hello')); // olleh

// Recursive

function revString(string){
    console.log(string);
    let length = string.length - 1
    if(string === ''){
        return string
    }

//    return string[length] + revString(string.substring(0,length)) 
    
    let revPart = revString(string.substring(0,length)) 
    let result = string[length] + revPart

    console.log(`Reversing: last Char: ${string[length]} added in front of ${revPart} to from a result : ${result}`);

    return result
}

console.log(revString('Hello')); // olleh

module.exports = revString;