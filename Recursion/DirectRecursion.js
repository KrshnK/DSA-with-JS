// Direct Recursion

function printNumber(min,max){
    if(min>max){
        return
    }

    printNumber(min+1,max)
    console.log(min)
}

printNumber(1,5) // 5 4 3 2 1

function printNum(min,max){
    if(min>max){
        return
    }

    console.log(min)
    printNum(min+1,max)
}

printNum(1,5) // 1 2 3 4 5