// Implementation of Stack

class Stack{
    constructor(){
        this.stack= []
    }

    //method 
    push(data){
         this.stack.push(data)
    }

    pop(){
        return this.stack.pop()
    }

    top(){
        if(this.isEmpty()) return "Stack is empty"
        return this.stack[this.stack.length - 1]
    }

    // helper methods

    isEmpty(){
        return this.stack == 0
    }

    size(){
        return this.stack.length
    }

    printStack(){
        let str = '';
        for (let i = 0; i < this.stack.length; i++) {
           str += this.stack[i];
        }
        return str
    }

    reverse(){
        return this.stack.reverse()
    }

    clear(){
        this.stack = []
    }
}

// usage Example

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack.printStack());

stack.pop()
console.log(stack.printStack());
console.log(stack.top())