// Private node class used by linked list
class _Node {
  constructor(value, next) {
    // The value stored in the node
    this.value = value;
    // Stores address of the next node
    this.next = next;
  }
}

// Linked list class
class LinkedList {
  constructor() {
    // The head is the beginning of the list
    this.head = null;
    // Size is the number of nodes in the list
    this.size = 0;
  }

  // Insert a new node at beginning of list
  insertFirst(value) {
    // Create a new node at the head of the list
    this.head = new _Node(value, this.head);
    this.size++;
  }

  // Insert a value before a node
  insertBefore(value, nodeValue) {
    // Check to see if the list is empty
    if (this.head === null) {
      return null;
    }

    // Start at beginning of the list
    let currentNode = this.head;
    // Keep track of the previous node
    let previousNode = this.head;

    while (currentNode.value !== nodeValue) {
      if (currentNode.next === null) {
        return null;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    // If the value is being inserted into the head position
    if (currentNode === this.head) {
      this.insertFirst(value);
    } else {
      previousNode.next = new _Node(value, currentNode);
      this.size++;
    }
  }

  insertAt(value, index) {
    // Check if the list is empty
    if (this.head === null) {
      console.log("List is empty");
      return null;
    }

    // If the given index is out of range
    if (index < 0 || index > this.size) {
      console.log(`Index ${index} is out of range`);
      return { error: "Index error" };
    } else if (index === 0) {
      this.insertFirst(value);
      return;
    }

    // Use index positioning first item = 0, second 1, etc.
    let indexStart = 0;
    // Start at the beginning of the list
    let currentNode = this.head;
    // Keep previous node
    let previousNode = this.head;

    // Evaluate current list position
    while (indexStart !== index) {
      // check if the end of the list has been reached
      previousNode = currentNode;
      currentNode = currentNode.next;
      indexStart++;
    }
    // currentNode is the head or the last item
    previousNode.next = new _Node(value, currentNode);
    this.size++;
  }

  // Insert a value after a node
  insertAfter(value, nodeValue) {
    // Check if the list is empty
    if (this.head === null) {
      return null;
    }

    // Start at the beginning of the list
    let currentNode = this.head;
    // Figure out what the next node is
    let nextNode = this.head.next;

    // Iterate over the list
    while (currentNode.value !== nodeValue) {
      // Check to make sure nodeValue exists, otherwise get loopy
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
        nextNode = currentNode.next;
      }
    }
    if (currentNode.next === null) {
      this.insertLast(value);
    } else {
      currentNode.next = new _Node(value, nextNode);
      this.size++;
    }
  }

  // Insert a new node at the end of the list
  insertLast(value) {
    // If this list is empty insert at beginning
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      // Create a new node
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(value, null);
      this.size++;
    }
  }

  // Retrieve a value from the list
  get(value) {
    // Start the search at the beginning of the list
    let currNode = this.head;
    // Check to see if the list is empty
    if (!this.head) {
      return null;
    }
    // Traverse the list checking for the value
    while (currNode.value !== value) {
      // Check if the end is reached
      if (currNode.next === null) {
        return null;
      } else {
        // Keep traversing the list
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  // Remove a node from this list
  remove(value) {
    // Check for an empty list
    if (!this.head) {
      return null;
    }
    // If this head node is removed make the next node the head
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    // Start traversing the list at the beginning
    let currNode = this.head;
    // Keep track of the previous node
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== value) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Value not found");
      return;
    }
    previousNode.next = currNode.next;
    this.size--;
  }

  // Print the list to the console
  display() {
    // Check if the list is empty
    if (this.head === null) {
      console.log("The list is empty");
      return 0;
    }

    // Start at the beginning of the list
    let currentNode = this.head;

    // Store the values of the list in a string
    let valuesString = "";

    // Iterate over the list
    while (currentNode) {
      valuesString += currentNode.value + ", ";
      currentNode = currentNode.next;
    }
    console.log(valuesString);
    return valuesString;
  }

  // Return the size of the linked list
  numberOfNodes() {
    // Check if there are any nodes in the list
    if (this.head === null) {
      return 0;
    }

    // Store the size of the linked list
    let size = 0;

    // Start at the head of the linked list
    let currentNode = this.head;

    while (currentNode) {
      currentNode = currentNode.next;
      size++;
    }
    console.log(`The linked list has ${size} nodes`);
    return size;
  }

  // Return a boolean indicating if the list is empty or not
  isEmpty() {
    if (this.head === null) {
      console.log("There are no nodes in the list");
      return true;
    } else {
      console.log(`The list has ${this.size} nodes`);
      return false;
    }
  }

  // Return the node of the node prior to the given value
  findPrevious(value) {
    // Check if list is empty
    if (this.head === null) {
      return null;
    }

    // If the given value is the head of the list return
    if (this.head.value === value) {
      console.log("Given value is head of list");
      return null;
    }
    // Start at the head of the list
    let currentNode = this.head;

    // Keep track of the previous node
    let previousNode = this.head;

    while (currentNode.value !== value) {
      if (currentNode.next === null) {
        console.log("Given value not in list");
        return null;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    console.log(previousNode);
    return previousNode;
  }

  // Return the last node in the list
  findLast() {
    // Check if the list is empty
    if (this.head === null) {
      return null;
    }

    // Get the index
    let index = 0;
    //Start at the head node
    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      index++;
    }

    console.log(currentNode, { index });
    return currentNode;
  }
}

export default LinkedList;
