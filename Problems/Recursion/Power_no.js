// power of a given number with base and exponent

function power(base,exp){
    if(exp=== 0){
        return 1
    }
    if(exp<0){
        return 1 / base * power(base,exp + 1)
       
    }
    return base * power(base,exp - 1)
}
console.log(power(2,-2));