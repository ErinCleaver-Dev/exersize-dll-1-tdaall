// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    
    // checks to see if the node exists 
    if(!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail; 
      this.tail = newNode;
    }
    this.length ++;
  }
  pop() {
    let removeNode = this.tail;

    if(!this.length) { 
      return null;
    } else {
      // to hold the item to be removed 
      if(this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        // removes the old connections
        this.tail.next = null
        removeNode.prev = null;
      }
    }

  }
  shift() {
    let removeNode = this.head;

    if(!this.length) { 
      return null;
    } else {
      // to hold the item to be removed 
      this.head = removeNode.next;

      // removes the old connections
      this.head.prev = null
      removeNode.next = null;
    }
    this.length --;
  }
}

// Tests
const list = new DoubleLinkedList();
list.push("Huskies");
list.push("are");
list.push("the");
list.push("best!");
list.shift();
list.pop();
console.log(list);
