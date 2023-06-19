/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    // Check if the heap is not empty (has more than one element)
    if (this.heap.length > 1) {
      // Return the element at the top of the heap (minimum number)
      return this.heap[1];
    }
    // Return null if the heap is empty
    return null;
  }

  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than
   *    it's parent.
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  insert(num) {
    // Push the new number to the back of the heap
    this.heap.push(num);

    // Check if the heap has more than one element
    if (this.heap.length > 1) {
      let currentIndex = this.heap.length - 1;

      // Perform iterative swapping to maintain heap order
      while (
        currentIndex > 1 &&
        this.heap[Math.floor(currentIndex / 2)] > this.heap[currentIndex]
      ) {
        // Swap the current number with its parent
        [this.heap[Math.floor(currentIndex / 2)], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[Math.floor(currentIndex / 2)],
        ];

        // Update the current index to the index of the parent
        currentIndex = Math.floor(currentIndex / 2);
      }
    }
  }

  /**
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }
}

// Create a new instance of MinHeap
const minHeap = new MinHeap();

// Test the insert() function
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(7);
minHeap.insert(1);
minHeap.insert(9);

//Heap after Inserts
console.log(minHeap);

// Test the top() function
console.log(minHeap.top()); // Output: 1

// Print the heap structure
minHeap.printHorizontalTree();
