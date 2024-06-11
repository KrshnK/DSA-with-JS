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
    const newNode = new Node(data,this.head,null)

    if(this.head !== null){
        this.head.prev = newNode
    }

    this.head = newNode
    if(this.tail === null){
        this.tail = newNode
    }
}