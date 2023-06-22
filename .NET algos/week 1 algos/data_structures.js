/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
  /**
   * Constructs a new Node instance. Executed when the 'new' keyword is used.
   * @param {any} data The data to be added into this new instance of a Node.
   *    The data can be anything, just like an array can contain strings,
   *    numbers, objects, etc.
   * @returns {ListNode} A new Node instance is returned automatically without
   *    having to be explicitly written (implicit return).
   */
  constructor(data) {
    this.data = data;
    /**
     * This property is used to link this node to whichever node is next
     * in the list. By default, this new node is not linked to any other
     * nodes, so the setting / updating of this property will happen sometime
     * after this node is created.
     *
     * @type {ListNode|null}
     */
    this.next = null;
  }
}

/**
 * This class keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SinglyLinkedList {
  /**
   * Constructs a new instance of an empty linked list that inherits all the
   * methods.
   * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
   *    returned without having to explicitly write "return".
   */
  constructor() {
    /** @type {ListNode|null} */
    this.head = null;
  }

  /**
   * Reverses this list in-place without using any extra lists.
   * - Time: (?).
   * - Space: (?).
   * @returns {SinglyLinkedList} This list.
   */
  reverse() {
    let prev = null; // Create a variable to store the previous node (initially null).
    let current = this.head; // Start with the current node set to the head of the list.
    let next = null; // Create a variable to store the next node (initially null).

    while (current != null) {
      next = current.next; // Store the next node in the 'next' variable.
      current.next = prev; // Reverse the 'next' pointer of the current node to point to the previous node.
      prev = current; // Move the 'prev' pointer to the current node.
      current = next; // Move the 'current' pointer to the next node.
    }

    this.head = prev; // Set the head of the list to the last node (previously the tail node).
    return this; // Return the modified list.
  }

  /**
   * Determines whether the list has a loop in it which would result in
   * infinitely traversing unless otherwise avoided. A loop is when a node's
   * next points to a node that is behind it.
   * - Time: (?).
   * - Space: (?).
   * @returns {boolean} Whether the list has a loop or not.
   */
  hasLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    if (slow === fast) {
      return true;
    }
    return false;
  }

  /**
   * Removes all the nodes that have a negative integer as their data.
   * - Time: (?).
   * - Space: (?).
   * @returns {SinglyLinkedList} This list after the negatives are removed.
   */
  removeNegatives() {
    let current = this.head;
    let prev = null;
    //checks if the very first node is negative
    while (current != null && current.data < 0) {
      this.head = current.next;
      current = this.head;
    }
    while (current !== null) {
      if (current.data < 0) {
        prev.next = current.next;
      } else {
        prev = current;
      }

      current = current.next;
    }

    return this;
  }

  /**
   * Concatenates the nodes of a given list onto the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {SinglyLinkedList} addList An instance of a different list whose
   *    whose nodes will be added to the back of this list.
   * @returns {SinglyLinkedList} This list with the added nodes.
   */
  concat(addList) {
    if (this.isEmpty()) {
      this.head = addList.head;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = addList.head;
    }
    return this;
  }

  /**
   * Finds the node with the smallest data and moves that node to the front of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {SinglyLinkedList} This list.
   */
  moveMinToFront() {
    if (this.isEmpty() || this.head.next === null) {
      return this;
    }

    let minNode = this.head;
    let minPrev = null;
    let runner = this.head;

    while (runner.next) {
      if (runner.next.data < minNode.data) {
        minNode = runner.next;
        minPrev = runner;
      }
      runner = runner.next;
    }

    if (minNode !== this.head) {
      minPrev.next = minNode.next;
      minNode.next = this.head;
      this.head = minNode;
    }

    return this;
  }

  // EXTRA
  /**
   * Splits this list into two lists where the 2nd list starts with the node
   * that has the given value.
   * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
   * and the return value will be a new list containing (5=>2=>4)
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The value in the node that the list should be split on.
   * @returns {SinglyLinkedList} The split list containing the nodes that are
   *    no longer in this list.
   */
  splitOnVal(val) {
    if (this.isEmpty()) {
      return new SinglyLinkedList();
    }

    if (this.head.data === val) {
      const newList = new SinglyLinkedList();
      newList.head = this.head.next;
      this.head.next = null;
      return newList;
    }

    let runner = this.head;

    while (runner.next) {
      if (runner.next.data === val) {
        const newList = new SinglyLinkedList();
        newList.head = runner.next;
        runner.next = null;
        return newList;
      }
      runner = runner.next;
    }

    return new SinglyLinkedList();
  }

  /**
   * Retrieves the data of the second to last node in this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @returns {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
  secondToLast() {
    if (this.isEmpty() || this.head.next === null) {
      return null;
    }

    let runner = this.head;
    while (runner.next.next) {
      runner = runner.next;
    }

    return runner.data;
  }

  /**
   * Removes the node that has the matching given val as its data.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeVal(val) {
    if (this.isEmpty()) {
      return false;
    }

    if (this.head.data === val) {
      this.removeHead();
      return true;
    }

    let runner = this.head;

    while (runner.next) {
      if (runner.next.data === val) {
        runner.next = runner.next.next;
        return true;
      }
      runner = runner.next;
    }

    return false;
  }

  /**
   * Inserts a new node before a node that has the given value as its data.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @param {any} newVal The value to use for the new node that is being added.
   * @param {any} targetVal The value to use to find the node that the newVal
   *    should be inserted in front of.
   * @returns {boolean} To indicate whether the node was pre-pended or not.
   */
  prepend(newVal, targetVal) {
    if (this.isEmpty()) {
      return false;
    }

    if (this.head.data === targetVal) {
      this.insertAtFront(newVal);
      return true;
    }

    let runner = this.head;

    while (runner.next) {
      if (runner.next.data === targetVal) {
        const newNode = new ListNode(newVal);
        newNode.next = runner.next;
        runner.next = newNode;
        return true;
      }
      runner = runner.next;
    }

    return false;
  }
  /*
   * Removes the last node of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data from the node that was removed.
   */
  removeBack() {
    if (this.isEmpty()) {
      // Empty list
      return null;
    }

    // if (!this.head.next) {
    //   // Only one node in the list
    //   this.head = null;
    //   return;
    // }

    let currentNode = this.head;
    let secondToLastNode = null;

    while (currentNode.next) {
      secondToLastNode = currentNode;
      currentNode = currentNode.next;
    }

    secondToLastNode.next = null;
    return this;
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(val) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === val) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?ListNode} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */

  containsRecursive(val, current = this.head) {
    if (current === null) {
      return false;
    }
    if (current.data === val) {
      return true;
    }
    return this.containsRecursive(val, current.next);
  }

  // EXTRA
  /**
   * Recursively finds the maximum integer data of the nodes in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {ListNode} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {ListNode} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @returns {?number} The max int or null if none.
   */
  recursiveMax(runner = this.head, maxNode = this.head) {
    if (this.head === null) {
      return null;
    }

    if (runner === null) {
      return maxNode.data;
    }

    if (runner.data > maxNode.data) {
      maxNode = runner;
    }

    return this.recursiveMax(runner.next, maxNode);
  }

  /**
   * Creates a new node with the given data and inserts that node at the front
   * of this list.
   * - Time: (?).
   * - Space: (?).
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtFront(data) {
    // Create a new node
    const newNode = new ListNode(data);

    if (this.isEmpty()) {
      // If the list is empty, make the new node the head
      this.head = newNode;
    }
    // If the list is not empty, set the new node as the new head
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  // The list now contains: 1 -> 2 -> 3

  /**
   * Removes the first node of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    if (this.head === null) {
      // If the list is empty, there is nothing to remove
      return;
    }

    this.head = this.head.next;
    return this;
  }

  // EXTRA
  /**
   * Calculates the average of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    if (this.isEmpty()) {
      // If the list is empty, return 0
      return 0;
    }

    let sum = 0;
    let count = 0;
    let current = this.head;

    while (current !== null) {
      sum += current.data;
      count++;
      current = current.next;
    }

    return sum / count;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    let newNode = new ListNode(data);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    return this;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(n) linear due to the call stack.
   * @param {any} data The data to be added to the new node.
   * @param {?ListNode} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackRecursive(data, runner = this.head) {
    if (this.isEmpty()) {
      this.head = new ListNode(data);
      return this;
    }

    if (runner.next === null) {
      runner.next = new ListNode(data);
      return this;
    }
    return this.insertAtBackRecursive(data, runner.next);
  }

  /**
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackMany(vals) {
    for (const item of vals) {
      this.insertAtBack(item);
    }
    return this;
  }

  /**
   * Converts this list into an array containing the data of each node.
   * - Time: O(n) linear.
   * - Space: O(n).
   * @returns {Array<any>} An array of each node's data.
   */
  toArr() {
    const arr = [];
    let runner = this.head;

    while (runner) {
      arr.push(runner.data);
      runner = runner.next;
    }
    return arr;
  }
}

/******************************************************************* 
Multiple test lists already constructed to test your methods on.
Below commented code depends on insertAtBack method to be completed,
after completing it, uncomment the code.
*/
const emptyList = new SinglyLinkedList();

const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new SinglyLinkedList().insertAtBackMany([
  -5, -10, 4, -3, 6, 1, -7, -2,
]);

// console.log(unorderedList);
// console.log(unorderedList.toArr());
// console.log(unorderedList.insertAtFront(5).toArr());
// console.log(unorderedList.removeHead().toArr());
// console.log(unorderedList.average());
// console.log(unorderedList.removeBack().toArr());
// console.log(unorderedList.contains());
// console.log(singleNodeList.secondToLast());
// console.log(unorderedList.secondToLast());
// console.log(singleNodeList.removeVal(1));
// console.log(unorderedList.removeVal(0));
// console.log(singleNodeList.prepend());
// console.log(unorderedList.prepend());
// console.log(singleNodeList.concat(unorderedList).toArr());
// console.log(singleNodeList.reverse().toArr());
// console.log(firstThreeList.reverse().toArr());
// console.log(secondThreeList.reverse().toArr());
// console.log(unorderedList.reverse().toArr());
// console.log(unorderedList.hasLoop());
// console.log(firstThreeList.hasLoop());
// console.log(secondThreeList.hasLoop());
// console.log(singleNodeList.hasLoop());
// console.log(biNodeList.hasLoop());
// console.log(emptyList.hasLoop());
// console.log(firstThreeList.removeNegatives().toArr());
// console.log(secondThreeList.removeNegatives().toArr());
// console.log(singleNodeList.removeNegatives().toArr());
// console.log(biNodeList.removeNegatives().toArr());
// console.log(emptyList.removeNegatives().toArr());
console.log(unorderedList.removeNegatives().toArr());

/* node 4 connects to node 1, back to head */
// const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
// perfectLoopList.head.next.next.next = perfectLoopList.head;

/* node 4 connects to node 2 */
// const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
// loopList.head.next.next.next = loopList.head.next;

// const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
//   1, 1, 1, 2, 3, 3, 4, 5, 5,
// ]);

// Print your list like so:
// console.log(firstThreeList.toArr());
