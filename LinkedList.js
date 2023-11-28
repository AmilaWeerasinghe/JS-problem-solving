class LinkedList {
    //constructor
    constructor (){
        this.head = null; //default values for LL
        this.length = 0;
    }

    insertAtHead(data){
        const newNode = new LinkedListNode(data,this.head);
        this.head = newNode;
        this.length++;
    }
}

// rectangle to hold linked list nodes
class LinkedListNode {
    constructor(value,next){
        this.value=value
        this.next=next
    }
}

export default LinkedList;