class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert a value at index 0 of linked list
  insertBeginning(data) {
    this.head = new _Node(data, this.head);
    this.size++;
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
      this.size++;
    }
  }

  //Insert at a specific index of the linked list
  insertAt(data, index) {}

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let testList = new LinkedList();

testList.insertBeginning(50);
testList.insertBeginning(75);
testList.insertBeginning(100);

console.log(testList);

testList.printListData();
