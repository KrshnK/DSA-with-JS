/* Stack Data Structure in JavaScript
  Stack is a linear data structure which follows a particular order in which the operations are performed.
  The order may be LIFO(Last In First Out) or FILO(First In Last Out).
  Mainly the following three basic operations are performed in the stack:
      - Push: Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
      - Pop: Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
      - Peek or Top: Returns the top element of the stack.
  The Stack class has the following methods:
      - push(data): Adds an item to the stack.
      - pop(): Removes the last item from the stack.
      - peek(): Returns the last item in the stack.
      - isEmpty(): Checks if the stack is empty.
      - size(): Returns the number of items in the stack.
      - clear(): Removes all items from the stack.
      - contains(element): Checks if the stack contains the specified element.
      - reverse(): Reverses the order of the stack items.
      - printStack(): Returns a string representation of the stack.

 Stack class with push, pop, peek, isEmpty, size, clear, contains, reverse, printStack methods  */
class Stack{
    constructor(){
        this.stack= []
    }

    push(data){
        this.stack.push(data)
    }

    pop(){
        this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.stack.length === 0
    }

    size(){
        return this.stack.length
    }

    clear(){
        this.stack=[]
    }

    contains(element){
        return this.stack.includes(element)
    }

    reverse(){
        this.stack.reverse()
    }

    printStack(){
        let str = ""
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + '\n';            
        }
        return str
    }
}

// usage example

let myStack = new Stack()
myStack.push(1)
myStack.push(4)
myStack.push(7)
myStack.push(8)
myStack.reverse()
console.log(myStack.peek())
console.log(myStack.isEmpty())
console.log("Stack size : " + myStack.size())
console.log(myStack.printStack())