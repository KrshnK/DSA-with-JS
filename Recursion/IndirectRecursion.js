// Indirect Recursion

function printNum(min,max){
    if(min>max){
        return
    }

    console.log(min)
    min=min+1
    logic(min,max)
}

function logic(min,max){
    if(min>max){
        return
    }
    printNum(min,max)
}

printNum(1,5)