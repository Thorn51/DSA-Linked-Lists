console.log("DSA - Linked Lists");

import LinkedList from "./linked-list.js";

function implementLinkedList() {
  // Create linked list from scratch
  console.log("1. Create a linked list class");
  const implementLinkedList = new LinkedList();
  console.log(implementLinkedList);
}

function singlyLinkedList() {
  // Create singly linked list
  console.log("2. Creating a singly linked list");

  let singleLinkedList = new LinkedList();

  // Add items to the list
  singleLinkedList.insertFirst("Apollo");
  singleLinkedList.insertLast("Boomer");
  singleLinkedList.insertLast("Helo");
  singleLinkedList.insertLast("Husker");
  singleLinkedList.insertLast("Starbuck");
  singleLinkedList.insertLast("Tauhida");

  // Insert before -> given a bad nodeValue
  singleLinkedList.insertBefore("Bobo", "Gonzo");
  //Insert before -> insert into the head position
  singleLinkedList.insertBefore("Tom", "Apollo");
  //Insert before -> husker
  singleLinkedList.insertBefore("Andy", "Husker");

  // Insert after -> given a bad node value
  singleLinkedList.insertAfter("Matt", "Bob");
  // Insert after -> Helo
  singleLinkedList.insertAfter("Matt", "Helo");
  // Insert after -> insert at the end of the list
  singleLinkedList.insertAfter("Kevin", "Tauhida");

  // Insert by position - given position doesn't exist
  singleLinkedList.insertAt("Billy", 25);
  // Insert by position - Insert at the head
  singleLinkedList.insertAt("Betty", 0);
  // Insert by position - insert at 3
  singleLinkedList.insertAt("Robert", 3);

  console.log(singleLinkedList);
}

function supplementalFunctions() {
  console.log("3. Supplemental functions for a linked list");
  let suppFunctions = new LinkedList();

  suppFunctions.insertFirst("Thomas");
  suppFunctions.insertLast("Robert");
  suppFunctions.insertAt("Betty", 1);
  suppFunctions.insertAfter("Andy", "Robert");
  suppFunctions.insertLast("Matt");

  console.log("Print the list:");
  suppFunctions.display();

  console.log("Returns the size of the linked list:");
  suppFunctions.numberOfNodes();

  console.log("Returns true if list is empty");
  suppFunctions.isEmpty();

  console.log("Return previous node");
  suppFunctions.findPrevious("Matt");
  // find previous -> Given bad value
  suppFunctions.findPrevious("Bobo");
  // find previous -> Given value at head
  suppFunctions.findPrevious("Thomas");

  console.log("Find last");
  suppFunctions.findLast();

  console.log("suppFunctions List", suppFunctions);
}

// implementLinkedList();
// singlyLinkedList();
supplementalFunctions();
