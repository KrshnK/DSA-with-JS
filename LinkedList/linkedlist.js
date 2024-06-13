class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    findAddress(data){
        let current = this.head
        while(current){
            if(current.data == data) break;
            current = current.next
        }
        return current
    }
}

// Insert at the beginning

LinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data)
    this.head = newNode
}

// Insert at the end

LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data)

    if (!this.head) {
        this.head = newNode
    }

    let last = this.head
    while (last.next) {
        last = last.next
    }
    last.next = newNode
}

// Insert at given node

LinkedList.prototype.insertAfter = function (prevNode, data) {
    const prevAdd = this.findAddress(prevNode)
    if (!prevAdd) {
        console.log("The given node can't be null");
        return
    }
    const newNode = new Node(data, prevAdd.next)
    prevAdd.next = newNode
}


// Delete the First Node

LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return
    }

    this.head = this.head.next
}

// Delete the Last Node (Through last second node)

LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return
    }

    if (!this.head.next) {
        this.head= null // if there is only one node
    }
    
    let secondLast = this.head
    while(secondLast.next.next){
        secondLast = secondLast.next
    }

    secondLast.next = null
}

// Delete a node with given Key

LinkedList.prototype.deleteByKey = function(key){

    // if list is empty
    if (!this.head) {
        console.log("List is Empty");
    }

    // Data found at head
    if (this.head.data === key) {
        this.head = this.head.next
        return
    }

    let current = this.head

    while (current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next
        }
        current = current.next
    }
}

// Search operation

LinkedList.prototype.search = function(key){
    let current = this.head

    while (current) {
        if (current.data === key) {
            return true
        }
        current = current.next
    }
     return false
}

// traversal

LinkedList.prototype.printList = function(){
    let current = this.head

    let listValues = []
    if (!current) {
        console.log("list is empty");
    }
    while(current){
        listValues.push(current.data)

        current = current.next
    }
    console.log(listValues.join(" -> "))
}

// little Challenging
// reverse

LinkedList.prototype.reverse = function (){
    let current = this.head
    let prev = null
    let next = null

    while(current){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    this.head = prev
}

// usage

const newLinkedList = new LinkedList()
newLinkedList.insertAtBeginning(2)
newLinkedList.insertAtEnd(4)
newLinkedList.insertAtEnd(8)
newLinkedList.insertAtEnd(6)
newLinkedList.insertAtEnd(10)
newLinkedList.printList()


newLinkedList.insertAfter(2,12)
newLinkedList.printList()

newLinkedList.deleteFirstNode()
newLinkedList.printList()

newLinkedList.deleteLastNode()
newLinkedList.printList()

newLinkedList.deleteByKey(8)
newLinkedList.printList()

console.log(newLinkedList.search(6))

newLinkedList.reverse()
newLinkedList.printList()