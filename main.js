class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //Insert a value at index 0 of linked list
  insertBeginning(data) {
    this.head = new _Node(data, this.head);
  }

  //Insert a value at the end of the linked list
  insertEnd(data) {
    if (this.head === null) {
      this.insertBeginning(data);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(data, null);
    }
  }

  //Insert at a specific index of the linked list
  insertAt(data, index) {}
}

let testList = new LinkedList();

testList.insertBeginning(50);
testList.insertEnd(75);

console.log(testList);
