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
   * DFS Preorder: (CurrNode, Left, Right)
   * Converts this BST into an array following Depth First Search preorder.
   * Example on the fullTree var:
   * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPreorder(node = this.root, vals = []) {
    if (node) {
      vals.push(node.data); // pushing current node
      this.toArrPreorder(node.left, vals); // Traverse the left subtree
      this.toArrPreorder(node.right, vals); // Traverse the right subtree
    }
    return vals;
  }

  /**
   * DFS Inorder: (Left, CurrNode, Right)
   * Converts this BST into an array following Depth First Search inorder.
   * See debugger call stack to help understand the recursion.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrInorder(node = this.root, vals = []) {
    if (node) {
      this.toArrInorder(node.left, vals); // Traverse the left subtree
      vals.push(node.data); // pushing current node
      this.toArrInorder(node.right, vals); // Traverse the right subtree
    }
    return vals;
  }

  /**
   * DFS Postorder (Left, Right, CurrNode)
   * Converts this BST into an array following Depth First Search postorder.
   * Example on the fullTree var:
   * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPostorder(node = this.root, vals = []) {
    if (node) {
      this.toArrPostorder(node.left, vals); // Traverse the left subtree
      this.toArrPostorder(node.right, vals); // Traverse the right subtree
      vals.push(node.data); /// pushing current node
    }
    return vals;
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
  insert(newVal) {
    let newNode = new BSTNode(newVal);

    // If the tree is empty, set the new node as the root and return the tree
    if (this.isEmpty()) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    // Traverse the tree until a suitable position is found for the new node
    while (current) {
      // Will ignore duplicates
      if (newVal === current.data) {
        // If the new value is equal to the current node's data, ignore it and return the tree
        return this;
      }

      if (newVal < current.data) {
        // If the new value is less than the current node's data, move to the left child
        if (current.left === null) {
          // If the left child is null, insert the new node as the left child and return the tree
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        // If the new value is greater than the current node's data, move to the right
        if (current.right === null) {
          // If the right is null, insert the new node as the right and return the tree
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */
  insertRecursive(newVal, curr = this.root) {
    if (this.isEmpty()) {
      // If the tree is empty, set the new node as the root and return the tree
      this.root = new BSTNode(newVal);
      return this;
    }

    if (newVal === curr.data) {
      // Ignore duplicate values (assuming duplicates are not allowed)
      return this;
    }

    if (newVal < curr.data) {
      // If the new value is less than the current node's data
      if (curr.left === null) {
        // If the left child is null, insert the new node as the left child and return the tree
        curr.left = new BSTNode(newVal);
        return this;
      }
      // Recursively call insertRecursive on the left child
      return this.insertRecursive(newVal, curr.left);
    } else {
      // If the new value is greater than the current node's data
      if (curr.right === null) {
        // If the right child is null, insert the new node as the right child and return the tree
        curr.right = new BSTNode(newVal);
        return this;
      }
      // Recursively call insertRecursive on the right child
      return this.insertRecursive(newVal, curr.right);
    }
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
// console.log(twoLevelTree.range());
// console.log(threeLevelTree.range());
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
const fullTree = new BinarySearchTree();
fullTree
  .insert(25)
  .insert(15)
  .insert(10)
  .insert(22)
  .insert(4)
  .insert(12)
  .insert(18)
  .insert(24)
  .insert(50)
  .insert(35)
  .insert(70)
  .insert(31)
  .insert(44)
  .insert(66)
  .insert(90);

// fullTree.print();

console.log(fullTree.toArrPreorder());
console.log(fullTree.toArrInorder());
console.log(fullTree.toArrPostorder());
console.log(emptyTree.toArrPreorder());
console.log(emptyTree.toArrInorder());
console.log(emptyTree.toArrPostorder());
