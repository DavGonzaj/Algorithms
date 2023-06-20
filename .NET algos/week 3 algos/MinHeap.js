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
   * Extracts the min num from the heap and then re-orders the heap to
   * maintain order so the next min is ready to be extracted.
   * 1. Save the first node to a temp var.
   * 2. Pop last node off and set idx1 equal to the popped value.
   * 3. Iteratively swap the old last node that is now at idx1 with it's
   *    smallest child IF the smallest child is smaller than it.
   * - Time: O(log n) logarithmic due to shiftDown.
   * - Space: O(1) constant.
   * @returns {?number} The min number or null if empty.
   */
  extract() {
    // Check if the heap is empty
    if (this.heap.length <= 1) {
      return null;
    }

    // Save the minimum number (root) to a temporary variable
    const minNum = this.heap[1];

    // Replace the root with the last element in the heap
    this.heap[1] = this.heap.pop();

    // Perform iterative swapping to maintain heap order (shiftDown)
    let currentIndex = 1;
    const heapLength = this.heap.length;

    while (true) {
      const leftChildIndex = currentIndex * 2;
      const rightChildIndex = currentIndex * 2 + 1;

      let smallestChildIndex = null;

      // Find the smallest child among the left and right children
      if (
        leftChildIndex < heapLength &&
        this.heap[leftChildIndex] < this.heap[currentIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < heapLength &&
        this.heap[rightChildIndex] < this.heap[currentIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      // If there is no smaller child, heap order is restored
      if (smallestChildIndex === null) {
        break;
      }

      // Swap the current node with the smallest child
      [this.heap[currentIndex], this.heap[smallestChildIndex]] = [
        this.heap[smallestChildIndex],
        this.heap[currentIndex],
      ];
      currentIndex = smallestChildIndex;
    }

    // Return the minimum number
    return minNum;
  }

  /**
   * @param {number} i
   */
  idxOfParent(i) {
    return Math.floor(i / 2);
  }

  /**
   * @param {number} i
   */
  idxOfLeftChild(i) {
    return i * 2;
  }

  /**
   * @param {number} i
   */
  idxOfRightChild(i) {
    return i * 2 + 1;
  }

  /**
   * Swaps two nodes.
   * @param {number} i
   * @param {number} j
   */
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  /**
   * Retrieves the size of the heap, ignoring the null placeholder.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number}
   */
  size() {
    // - 1 since 0 index is unused
    return this.heap.length - 1;
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
    // // Push the new number to the back of the heap
    // this.heap.push(num);

    // // Check if the heap has more than one element
    // if (this.heap.length > 1) {
    //   let currentIndex = this.heap.length - 1;

    //   // Perform iterative swapping to maintain heap order
    //   while (
    //     currentIndex > 1 &&
    //     this.heap[Math.floor(currentIndex / 2)] > this.heap[currentIndex]
    //   ) {
    //     // Swap the current number with its parent
    //     [this.heap[Math.floor(currentIndex / 2)], this.heap[currentIndex]] = [
    //       this.heap[currentIndex],
    //       this.heap[Math.floor(currentIndex / 2)],
    //     ];

    //     // Update the current index to the index of the parent
    //     currentIndex = Math.floor(currentIndex / 2);
    //   }
    // }
    this.heap.push(num);
    this.shiftUp();
    // .push on array returns the new length
    return this.size();
  }

  // AKA: siftUp, heapifyUp, bubbleUp to restore order after insert
  shiftUp() {
    let idxOfNodeToShiftUp = this.heap.length - 1;

    while (idxOfNodeToShiftUp > 1) {
      const idxOfParent = this.idxOfParent(idxOfNodeToShiftUp);

      const isParentSmallerOrEqual =
        this.heap[idxOfParent] <= this.heap[idxOfNodeToShiftUp];

      // Parent is supposed to be smaller so ordering is complete.
      if (isParentSmallerOrEqual) {
        break;
      }

      this.swap(idxOfNodeToShiftUp, idxOfParent);
      // after swapping the node is at idxOfParent now.
      idxOfNodeToShiftUp = idxOfParent;
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

minHeap.extract();
minHeap.extract();

// minHeap.printHorizontalTree();
console.log(minHeap);
