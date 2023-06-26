/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
  /**
   * The constructor is executed when instantiating a new Stack() to construct
   * a new instance.
   * @returns {Stack} This new Stack instance is returned without having to
   *    explicitly write 'return' (implicit return).
   */
  constructor() {
    this.items = [];
  }

  /**
   * Adds a new given item to the top / back of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top / back.
   * @returns {number} The new length of this stack.
   */
  push(item) {
    // Add the given item to the top / back of the stack.
    this.items[this.items.length] = item;
    // Return the new length of the stack.
    return this.items.length;
  }

  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item or undefined if this stack was empty.
   */
  pop() {
    // Check if the stack is empty.
    if (this.isEmpty()) {
      return undefined;
    }
    // Retrieve the last item from the stack.
    const lastItem = this.items[this.items.length - 1];
    // Reduce the length of the stack to remove the last item.
    this.items.length--;
    // Return the removed item.
    return lastItem;
  }

  /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top / last item of this stack.
   */
  peek() {
    // Check if the stack is empty.
    if (this.isEmpty()) {
      return null;
    }
    // Return the last item from the stack.
    return this.items[this.items.length - 1];
  }

  /**
   * Returns whether or not this stack is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    // Check if the length of the stack is 0.
    return this.items.length === 0;
  }

  /**
   * Returns the size of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    // Return the length of the stack.
    return this.items.length;
  }
}

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
  }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(13);
stack.push(12);
stack.push(20);

// console.log(stack.size());
// console.log(stack.isEmpty());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());

//adding 3 nodes
const node1 = new StackNode(10);
const node2 = new StackNode(11);
const node3 = new StackNode(12);
//Linking them
node1.next = node2;
node2.next = node3;
// adds the head to the linked stack
const linkedListStack = new LinkedListStack();
linkedListStack.head = node1;
// shows the three nodes
console.log(linkedListStack.head.data);
console.log(linkedListStack.head.next.data);
console.log(linkedListStack.head.next.next.data);
