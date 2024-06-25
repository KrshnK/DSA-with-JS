// Iterative

function fibonacci(value){
    let n0 = 0
    let n1 = 1

    for (let i = 0; i < value; i++) {
        temp = n0 + n1
        n0=n1
        n1 = temp  
    }
    return n0
}
// console.log(fibonacci(6));

// Recursive 
function recFibonacci(value){
    if(value <= 1){
        return value
    }
    
    return (recFibonacci(value-2) + recFibonacci(value-1))
}
console.log(recFibonacci(6)); // -> 8