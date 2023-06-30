/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class DLLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    // TODO: implement the constructor.
    this.head = null;
    this.tail = null;
  }
  /**
   * Retrieves the data from the nthLast node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} nthLast Indicates the position from the back of the list.
   * @returns {any}
   */
  nthToLast(nthLast) {
    // If the list is empty or nthLast is less than 1, return null
    if (this.isEmpty() || nthLast < 1) {
      return null;
    }

    // Start from the tail of the list
    let runner = this.tail;

    // Traverse the list backwards until reaching the nthLast node or the end of the list
    while (nthLast > 1 && runner !== null) {
      runner = runner.prev; // Move to the previous node
      nthLast--;
    }

    // If the runner is not null, return the data of the nthLast node
    if (runner !== null) {
      return runner.data;
    } else {
      return null;
    }
  }

  /**
   * Determines if the node's data of this list forms a palindrome.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this list is a palindrome.
   */
  isPalindrome() {
    // If the list is empty, it can't be a palindrome, so return false
    if (this.isEmpty()) {
      return false;
    }

    // Initialize two runners: one starting from the head and one starting from the tail
    let frontRunner = this.head;
    let backRunner = this.tail;

    // Compare the data of the nodes while moving towards the center of the list
    while (frontRunner !== backRunner && frontRunner.prev !== backRunner) {
      // If the data of the frontRunner and backRunner nodes are not equal, return false
      if (frontRunner.data !== backRunner.data) {
        return false;
      }

      frontRunner = frontRunner.next; // Move the frontRunner forward
      backRunner = backRunner.prev; // Move the backRunner backward
    }

    // If the loop completes without finding any mismatched nodes, it's a palindrome, so return true
    return true;
  }

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {
    // Create a new node with the given data
    const newNode = new DLLNode(data);

    // Check if the list is empty
    if (this.isEmpty()) {
      // If the list is empty, set both the head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty
      // Set the next pointer of the new node to the current head node
      newNode.next = this.head;

      // Set the previous pointer of the current head node to the new node
      this.head.prev = newNode;

      // Update the head to point to the new node, making it the new head
      this.head = newNode;
    }

    // Return the updated list
    return this;
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(data) {
    // Create a new node with the given data
    const newNode = new DLLNode(data);

    // Check if the list is empty
    if (this.isEmpty()) {
      // If the list is empty, set both the head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty
      // Set the previous pointer of the new node to the current tail node
      newNode.prev = this.tail;

      // Set the next pointer of the current tail node to the new node
      this.tail.next = newNode;

      // Update the tail to point to the new node, making it the new tail
      this.tail = newNode;
    }

    // Return the updated list
    return this;
  }

  // EXTRA
  /**
   * Removes the middle node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() {
    // Check if the list is empty or if there is only one node in the list
    if (this.isEmpty() || this.head === this.tail) {
      return null;
    }

    // Initialize two runners, one slow and one fast
    let slowRunner = this.head;
    let fastRunner = this.head;

    // Move the runners through the list to find the middle node
    while (fastRunner.next !== null && fastRunner.next.next !== null) {
      // Move the slow runner one step forward
      slowRunner = slowRunner.next;

      // Move the fast runner two steps forward
      fastRunner = fastRunner.next.next;
    }

    // Get references to the middle node, the previous node, and the next node
    const middleNode = slowRunner;
    const prevNode = middleNode.prev;
    const nextNode = middleNode.next;

    // Update the references of the neighboring nodes
    if (prevNode) {
      prevNode.next = nextNode; // Set the next pointer of the previous node to the next node
    }

    if (nextNode) {
      nextNode.prev = prevNode; // Set the previous pointer of the next node to the previous node
    }

    // Update the head and tail pointers if necessary
    if (middleNode === this.head) {
      this.head = nextNode; // If the middle node is the head, update the head to the next node
    }

    if (middleNode === this.tail) {
      this.tail = prevNode; // If the middle node is the tail, update the tail to the previous node
    }

    // Return the data of the removed middle node
    return middleNode.data;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }
}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
  -5, -10, 4, -3, 6, 1, -7, -2,
]);

console.log(emptyList.nthToLast(1)); // null
console.log(singleNodeList.nthToLast(1)); // 1
console.log(firstThreeList.nthToLast(2)); // 2
console.log(secondThreeList.nthToLast(3)); // 4

console.log(emptyList.isPalindrome()); // false
console.log(singleNodeList.isPalindrome()); // true
console.log(firstThreeList.isPalindrome()); // false
console.log(secondThreeList.isPalindrome()); // false

// emptyList.removeMiddleNode();
// console.log(emptyList.toArray());
// console.log(singleNodeList.toArray());
// console.log(firstThreeList.toArray());
// console.log(secondThreeList.toArray());
// console.log(secondThreeList.insertAtFront(10).toArray());
// secondThreeList.removeMiddleNode();
// console.log(secondThreeList.toArray());
