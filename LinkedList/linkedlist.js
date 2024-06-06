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
    if (!prevNode) {
        console.log("The given node can't be null");
        return
    }
    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
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