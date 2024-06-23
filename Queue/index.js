/* Queues are a type of data structure where items are stored in a First In First Out (FIFO) order.
 In a queue, items are added to the back and removed from the front.
 The Queue class has the following methods:
 enqueue(data): Adds an item to the queue.
 -dequeue(): Removes the first item from the queue.
 -isEmpty(): Checks if the queue is empty.
 -peek(): Returns the first item in the queue.
 -size(): Returns the number of items in the queue.
 -clear(): Removes all items from the queue.
 -rintQueue(): Returns a string representation of the queue.

 Queue class with enqueue, dequeue, isEmpty, peek, size, clear, printQueue methods */
class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(data){
        this.queue.push(data)
    }

    dequeue(){
        if (this.isEmpty()) {
            return "Queue is Empty"
        }
        return this.queue.shift()
    }
    
    isEmpty(){
        return this.queue.length === 0
    }
    
    peek(){
        if (this.isEmpty()) {
            return "Queue is Empty"
        }
        return this.queue[0]
    }

    size(){
        return this.queue.length
    }

    clear(){
        this.queue = []
    }

    printQueue(){
        let str = ''
        for (let i  = 0; i  < this.queue.length; i ++) {
            str += this.queue[i] + '\n';
        }
        return str
    }
}

//usage Example
let myQueue = new Queue()

myQueue.enqueue(20)
myQueue.enqueue(50)
myQueue.enqueue(10)
myQueue.enqueue(70)

myQueue.dequeue()

console.log(myQueue.printQueue());