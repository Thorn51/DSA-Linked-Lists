class _Node {
  constructor(value, next = null) {
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
    }
    this.size++;
  }

  //Insert at a specific index of the linked list
  insertAt(data, index) {
    // EDGE CASE -> Index does not exist
    if (index > 0 && index > this.size) {
      throw new Error(`Index Error -> ${index} is out of range`);
    }

    //If we insert at beginning
    if (index === 0) {
      this.insertBeginning(data);
      return;
    }

    //If we insert at the end
    if (index === this.size - 1) {
      this.insertEnd(data);
      return;
    }

    const node = new _Node(data);
    let current, previous;

    //Set current to first
    current = this.head;

    //Set a counter for the while loop
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

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

testList.insertBeginning(100);
testList.insertAt(200, 1);
testList.insertAt(300, 2);
testList.insertAt(400, 3);
testList.insertEnd(500);

console.log(testList);

testList.printListData();
