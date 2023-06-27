/**
/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {
    this.items.push(item); // Add the item to the end of the array
    return this.size(); // Return the new size of the queue
  }

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing the first element.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined; // If the queue is empty, return undefined
    }

    return this.items.shift(); // Remove and return the first item from the array
  }

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {
    if (this.isEmpty()) {
      return undefined; // If the queue is empty, return undefined
    }

    return this.items[0]; // Return the first item in the array
  }

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0; // Check if the array is empty
  }

  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.items.length; // Return the length of the array
  }
}

// Create a new instance of the Queue class
const queue = new Queue();

// Test enqueue method
queue.enqueue(10);
queue.enqueue(12);
queue.enqueue(20);
console.log(queue);
console.log(queue.size()); // Output: 3

// Test front method
console.log(queue.front()); // Output: 10

// Test dequeue method
console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 12

// Test isEmpty method
console.log(queue.isEmpty()); // Output: false

// Test size method
console.log(queue.size()); // Output: 1

// Test dequeue when the queue is empty
console.log(queue.dequeue()); // Output: undefined

// Test isEmpty when the queue is empty
console.log(queue.isEmpty()); // Output: true
// Get the items as an array
// const itemsArray = queue.items;

// console.log(itemsArray); // Output: ['apple', 'banana', 'cherry']
/* Rebuild the above class using a linked list instead of an array. */
