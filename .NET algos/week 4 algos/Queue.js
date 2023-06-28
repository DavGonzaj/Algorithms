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
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
  compareQueues(q2) {
    // Check if the sizes of the two queues are different
    if (this.size() !== q2.size()) {
      return false;
    }

    // Create temporary queues to store the dequeued items
    const tempQueue1 = new Queue();
    const tempQueue2 = new Queue();

    // Flag to track if the queues are equal
    let isEqual = true;

    // Compare the items of the two queues while dequeuing
    while (!this.isEmpty()) {
      // Dequeue an item from each queue for comparison
      const item1 = this.dequeue();
      const item2 = q2.dequeue();

      // If the dequeued items are not equal, set the flag to false
      if (item1 !== item2) {
        isEqual = false;
      }

      // Enqueue the dequeued items into the temporary queues to preserve order
      tempQueue1.enqueue(item1);
      tempQueue2.enqueue(item2);
    }

    // Restore the original order of the queues by enqueueing the items back
    while (!tempQueue1.isEmpty()) {
      this.enqueue(tempQueue1.dequeue());
      q2.enqueue(tempQueue2.dequeue());
    }

    // Return the result of the comparison
    return isEqual;
  }

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isPalindrome() {
    const stack = []; // Create an empty stack to store the dequeued items
    let isPalindrome = true; // Flag to track if the queue is a palindrome

    // Dequeue all items from the queue and push them onto the stack
    for (let i = 0; i < this.size(); i++) {
      const item = this.dequeue(); // Dequeue an item from the front of the queue
      stack.push(item); // Push the dequeued item onto the stack
      this.enqueue(item); // Enqueue the item back to the rear of the queue
    }

    // Compare the items in reverse order by dequeuing from the queue
    // and checking against the corresponding item in the stack
    for (let i = this.size() - 1; i >= 0; i--) {
      const item = this.dequeue(); // Dequeue an item from the front of the queue
      if (item !== stack[i]) {
        // Compare the dequeued item with the item at index i in the stack
        isPalindrome = false; // Set the isPalindrome flag to false if there is a mismatch
      }
      this.enqueue(item); // Enqueue the item back to the rear of the queue
    }

    // Return whether the queue is a palindrome or not
    return isPalindrome;
  }

  /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {
    this.items.push(item);
    return this.size();
  }

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {
    return this.items[0];
  }

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.items.length;
  }
}

// Create a new instance of Queue
const queue = new Queue();

// Test enqueue() and size()
console.log(queue.enqueue(1)); // Output: 1
console.log(queue.enqueue(2)); // Output: 2
console.log(queue.enqueue(3)); // Output: 3
console.log(queue.size()); // Output: 3

// Test front()
console.log(queue.front()); // Output: 1

// Test dequeue() and isEmpty()
console.log(queue.dequeue()); // Output: 1
console.log(queue.isEmpty()); // Output: false
console.log(queue.size()); // Output: 2

const queue1 = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

const queue2 = new Queue();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);

console.log(queue.compareQueues(queue2)); // Output: true

const queue3 = new Queue();
queue3.enqueue(1);
queue3.enqueue(2);
queue3.enqueue(3);
queue3.enqueue(4);

console.log(queue.compareQueues(queue3)); // Output: false

const queue4 = new Queue();
queue4.enqueue(1);
queue4.enqueue(2);
queue4.enqueue(3);
queue4.enqueue(2);
queue4.enqueue(1);

console.log(queue4.isPalindrome()); // Output: true

const queue5 = new Queue();
queue5.enqueue(1);
queue5.enqueue(2);
queue5.enqueue(3);
queue5.enqueue(4);

console.log(queue5.isPalindrome()); // Output: false

/* Rebuild the above class using a linked list instead of an array. */
