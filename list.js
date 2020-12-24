

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    size(){
        return this.length;
    }

    addToHead(value){
        const newNode = new Node(value);
        newNode.next = this.head;

        if(this.head) this.head.prev = newNode;
        else this.tail = newNode;

        this.head = newNode;
        this.length++;
    }

    addToTail(value){
        const newNode = new Node(value);
        newNode.tail = this.tail;

        if(this.tail) this.tail.next = newNode;
        else this.head = newNode;

        this.tail = newNode;
        this.length++;
    }

    removeHead(){
        if(!this.head) return null;

        let value = this.head.value;

        this.head = this.head.next;

        if(this.head){
            this.head.prev = null;
        }
        else{
            this.tail = null;
        }

        this.length--;
        return value;
    }
    removeTail(){
        if(!this.tail) return null;

        let value = this.tail.value;

        this.tail = this.tail.prev;

        if(this.tail){
            this.tail.next = null;
        }
        else{
            this.head = null;
        }

        this.length--;
        return value;
    }

    search(value){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value) return currentNode;
            currentNode = currentNode.next;
        }

        return  null;
    }

    print(){
        const rezult = [];

        let current = this.head;

        while(current){
            rezult.push(current.value);
            current = current.next;
        }

        return rezult;
    }

}


let ll = new LinkedList();

ll.addToHead(1);
ll.addToHead(2);
ll.addToHead(3);
ll.addToHead(4);
ll.addToHead(5);
ll.addToHead(6);
console.log(ll.print());

console.log(ll.search(3));
console.log(ll.print());
