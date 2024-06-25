function recLength(string){
    if(string === ""){
        return 0
    }

    return 1 + recLength(string.substring(1))
}

console.log(recLength("Hello")) // ->> 5