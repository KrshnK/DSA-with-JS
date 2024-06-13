class Node{
    constructor(data, next = null, prev = null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedlist{
    constructor(){
        this.head = null
        this.tail = null
    }
}

// insert at beginning

DoublyLinkedlist.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data, this.head, null)

    if(this.head !== null){
        this.head.prev = newNode
    }

    this.head = newNode

    if(this.tail === null){
        this.tail = newNode
    }
}

// insert at end

DoublyLinkedlist.prototype.insertAtEnd = function(data){
    const newNode = new Node(data, null, this.tail)

    if (this.tail !== null) {
        this.tail.next = newNode
    }

    this.tail = newNode

    if (this.head === null) {
        this.head = newNode
    }

}

// insert after given key

 DoublyLinkedlist.prototype.insertAfter = function(data,prevNode){
    if (prevNode == null) {
        console.log("Invalid prev Node");
        return
    }

    const newNode = new Node(data,prevNode.next,prevNode)

    if (prevNode.next !== null) {
        prevNode.next.prev = newNode
    }

    prevNode.next = newNode

    // Tail
    if (newNode === null) {
        this.tail = newNode
    }
 }