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

  push(value) {}
  pop() {}
  shift() {}
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
