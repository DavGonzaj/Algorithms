/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     *
     * @type {BSTNode|null}
     */
    this.left = null;
    /** @type {BSTNode|null} */
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     *
     * @type {BSTNode|null}
     */
    this.root = null;
  }
  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(log(n)) - average case, O(n) - worst case (skewed tree).
   * - Space: O(log(n)) - average case, O(n) - worst case (skewed tree).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  contains(searchVal) {
    if (this.isEmpty()) {
      return false;
    }
    let current = this.root;

    while (current) {
      if (searchVal === current.data) {
        return true;
      } else if (searchVal < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  /**
   * Determines if this tree contains the given searchVal using recursion.
   * - Time: O(log(n)) - average case, O(n) - worst case (skewed tree).
   * - Space: O(log(n)) - average case, O(n) - worst case (skewed tree).
   * @param {number} searchVal The number to search for in the node's data.
   * @param {BSTNode} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {
    if (this.isEmpty()) {
      return false;
    }

    if (searchVal === current.data) {
      return true;
    } else if (searchVal < current.data) {
      return this.containsRecursive(searchVal, current.left);
    } else {
      return this.containsRecursive(searchVal, current.right);
    }
  }

  /**
   * Calculates the range (max - min) from the given startNode.
   * - Time: O(n) - all nodes must be visited to find the minimum and maximum.
   * - Space: O(n) - all nodes are visited in the worst case (skewed tree).
   * @param {BSTNode} startNode The node to start from to calculate the range.
   * @returns {number|null} The range of this tree or a subtree depending on if the
   *    startNode is the root or not.
   */
  range(startNode = this.root) {
    if (this.isEmpty()) {
      return null;
    }

    return this.max(startNode) - this.min(startNode);
  }

  /**
   * Determines if this tree is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    return this.root === null;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if (current === null) {
      return NaN;
    }
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    if (this.isEmpty()) {
      return NaN;
    }
    if (current.left === null) {
      return current.data; // Reached the leftmost node
    }

    return this.minRecursive(current.left); // Recursively call on the left child
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    if (current === null) {
      return NaN;
    }
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    if (this.isEmpty()) {
      return NaN;
    }
    if (current.right === null) {
      return current.data; // Reached the right most node
    }

    return this.minRecursive(current.right); // Recursively call on the right child
  }

  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

// console.log(oneNodeTree.min());
// console.log(twoLevelTree.min());
// console.log(oneNodeTree.max());
// console.log(twoLevelTree.max());
// console.log(twoLevelTree.minRecursive());
// console.log(twoLevelTree.maxRecursive());
// console.log(twoLevelTree.contains(5));
// console.log(twoLevelTree.contains(-19));
// console.log(twoLevelTree.containsRecursive());
console.log(twoLevelTree.range());
console.log(threeLevelTree.range());
/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
// const fullTree = new BinarySearchTree();
// fullTree
//   .insert(25)
//   .insert(15)
//   .insert(10)
//   .insert(22)
//   .insert(4)
//   .insert(12)
//   .insert(18)
//   .insert(24)
//   .insert(50)
//   .insert(35)
//   .insert(70)
//   .insert(31)
//   .insert(44)
//   .insert(66)
//   .insert(90);