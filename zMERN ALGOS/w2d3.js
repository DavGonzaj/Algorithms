// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

/*
const squareMatrix1 = [ [1, 2, 3],  [4, 5, 6], [9, 8, 9],];
*/

// matrix[1][2] = 6
const squareMatrix1 = [
  [1, 2, 3], // [r][c]
  [4, 5, 6],
  [9, 8, 9],
];

const expectedA1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
   // [0][0], [1][1], [2][2]
    right to left diagonal: 3 + 5 + 9 = 17
  // [0][2], [1][1], [2][0]
    absolute difference = 2
  */

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expectedA2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < sqrMatrix.length; i++) {
    // [ [ 1, 2, 3] ,  [4, 5, 6]]
    for (let j = 0; j < sqrMatrix[i].length; j++) {
      if (i === j) {
        left += sqrMatrix[i][j];
      }
      if (i + j === sqrMatrix.length - 1) {
        right += sqrMatrix[i][j];
      }
    }
  }
  return Math.abs(left - right);
}

function diagonalDifference(sqrMatrix) {
  const left = [];
  const right = [];

  for (let i = 0; i < sqrMatrix.length; i++) {
    left.push(sqrMatrix[i][i]);
  }
  let pos = sqrMatrix.length - 1;
  for (let i = sqrMatrix.length - 1; i >= 0; i--) {
    right.push(sqrMatrix[i][pos]);
    if (pos >= 0) {
      pos -= 1;
    }
  }
  return Math.abs(left - right);
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));
