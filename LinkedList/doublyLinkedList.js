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

    findAddress(data){
        let current = this.head
        while(current){
            if(current.data == data) break;
            current = current.next
        }
        return current
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
    const prevAdd = this.findAddress(prevNode)
    if (prevAdd == null) {
        console.log("Invalid prev Node");
        return
    }

    const newNode = new Node(data,prevAdd.next,prevAdd)

    if (prevAdd.next !== null) {
        prevAdd.next.prev = newNode
    }

    prevAdd.next = newNode

    // Tail
    if (newNode.next === null) {
        this.tail = newNode
    }
 }

 // Delete First Node

 DoublyLinkedlist.prototype.deleteFirstNode = function(){

    if(!this.head){
        return // nothing to delete
    }

    if(this.head === this.tail){
        this.head = null
        this.tail = null
    }

    this.head = this.head.next
    this.head.prev = null
    
 }

 // Delete Last Node

 DoublyLinkedlist.prototype.deleteLastNode = function(){

    if(!this.tail){
        return // nothing to delete
    }

    if(this.head === this.tail){
        this.head = null
        this.tail = null
    }

    this.tail = this.tail.prev
    this.tail.next = null

 }

 // reverse

 DoublyLinkedlist.prototype.reverse = function(){
    let current =  this.head
    let temp = null

    while(current){
        // Swap
        temp = current.prev
        current.prev = current.next
        current.next = temp

        // move to next node
        current = current.prev
    }

    if(temp !== null){
        this.tail = this.head
        this.head = temp.prev
    }
 }

 // traversal 

 DoublyLinkedlist.prototype.printList = function(){
    let current = this.head

    let listValues = []
    if(!current){
        console.log("List is empty!");
    }
    while(current){
        listValues.push(current.data)
        current = current.next
    }
    console.log(listValues.join(" <- -> "));
 }

 // usage

 const DLL = new DoublyLinkedlist()
 DLL.insertAtBeginning(2)
 DLL.insertAtEnd(4)
 DLL.insertAtEnd(6)
 DLL.insertAtEnd(9)
 DLL.insertAtEnd(12)
 DLL.printList()

 DLL.insertAfter(5,4)
 DLL.printList()
 
 DLL.deleteFirstNode()
 DLL.printList()

 DLL.deleteLastNode()
 DLL.printList()

 DLL.reverse()
 DLL.printList()