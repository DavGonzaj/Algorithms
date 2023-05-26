/* 
  Interview question from Slalom Consulting, LLC

  Given a 3x3 Two Dimensional array representing a tic tac toe board,
  return whether or not there is a winner.

  A winner is when there is 3 "x" values or 3 "o" values in a row,
  column, or diagonal.
*/

const grid1 = [
  ["x", "x", ""],
  ["x", "x", "o"],
  ["", "o", ""],
];
const expected1 = false;

const grid2 = [
  ["", "o", "x"],
  ["o", "x", ""],
  ["x", "", ""],
];
const expected2 = true;

const grid3 = [
  ["x", "", "o"],
  ["x", "x", "o"],
  ["", "", "o"],
];
const expected3 = true;

const grid4 = [
  ["", "", ""],
  ["o", "o", ""],
  ["x", "x", "x"],
];
const expected4 = true;

/**
 * Determines if there is a tic tac toe winner based on three in a row for "x"
 * or "o".
 * Time: O(?).
 * Space: O(?).
 * @param {Array<Array<string>>} grid
 * @returns {boolean} Whether there is a winner or not.
 */
function checkTicTacToeWinner(grid) {
  // Check rows
  for (let row = 0; row < 3; row++) {
    if (
      grid[row][0] !== "" &&
      grid[row][0] === grid[row][1] &&
      grid[row][1] === grid[row][2]
    ) {
      return true;
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    if (
      grid[0][col] !== "" &&
      grid[0][col] === grid[1][col] &&
      grid[1][col] === grid[2][col]
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    grid[0][0] !== "" &&
    grid[0][0] === grid[1][1] &&
    grid[1][1] === grid[2][2]
  ) {
    return true;
  }

  if (
    grid[0][2] !== "" &&
    grid[0][2] === grid[1][1] &&
    grid[1][1] === grid[2][0]
  ) {
    return true;
  }

  return false;
}

/*****************************************************************************/

/**
 * Hard coded version. If you present a hard-coded solution for most algos, you
 * will likely be asked a follow up question about if the input size gets
 * too large to hard-code.
 * Determines if there is a tic tac toe winner based on three in a row for "x"
 * or "o".
 * @param {Array<Array<string>>} g A 2 dim array tic tac toe grid.
 * @returns {boolean} Whether there is a winner or not.
 */
const checkTicTacToeWinnerHardCoded = (g) =>
  [
    g[0][0] + g[0][1] + g[0][2], // row1
    g[1][0] + g[1][1] + g[1][2], // row2
    g[2][0] + g[2][1] + g[2][2], // row3
    g[0][0] + g[1][0] + g[2][0], // col1
    g[0][1] + g[1][1] + g[2][1], // col2
    g[0][2] + g[1][2] + g[2][2], // col3
    g[0][0] + g[1][1] + g[2][2], // top left to right
    g[0][2] + g[1][1] + g[2][0], // top right to left
  ].some((str) => str === "xxx" || str === "ooo");

/**
 * Determines if there is a tic tac toe winner based on three in a row for "x"
 * or "o".
 * Using loops is only an advantage over the hard-coded version if the game can
 * be expanded to a larger grid.
 * Time: O(n^2). n = grid.length.
 * Space: O(n^2). colSums stores every letter of every column.
 * @param {Array<Array<string>>} grid
 * @returns {boolean} Whether there is a winner or not.
 */
function checkTicTacToeWinner(grid) {}

console.log(checkTicTacToeWinner(grid1));

/* 
  Interview question from Slalom Consulting, LLC

  Given a 3x3 Two Dimensional array representing a tic tac toe board,
  return whether or not there is a winner.

  A winner is when there is 3 "x" values or 3 "o" values in a row,
  column, or diagonal.
*/

const grid1 = [
  ["x", "x", ""],
  ["x", "x", "o"],
  ["", "o", ""],
];
const expected1 = false;

const grid2 = [
  ["", "o", "x"],
  ["o", "x", ""],
  ["x", "", ""],
];
const expected2 = true;

const grid3 = [
  ["x", "", "o"],
  ["x", "x", "o"],
  ["", "", "o"],
];
const expected3 = true;

const grid4 = [
  ["", "", ""],
  ["o", "o", ""],
  ["x", "x", "x"],
];
const expected4 = true;

/**
 * Determines if there is a tic tac toe winner based on three in a row for "x"
 * or "o".
 * Time: O(?).
 * Space: O(?).
 * @param {Array<Array<string>>} grid
 * @returns {boolean} Whether there is a winner or not.
 */

/*****************************************************************************/

/**
 * Hard coded version. If you present a hard-coded solution for most algos, you
 * will likely be asked a follow up question about if the input size gets
 * too large to hard-code.
 * Determines if there is a tic tac toe winner based on three in a row for "x"
 * or "o".
 * @param {Array<Array<string>>} g A 2 dim array tic tac toe grid.
 * @returns {boolean} Whether there is a winner or not.
 */
const checkTicTacToeWinnerHardCoded = (g) =>
  [
    g[0][0] + g[0][1] + g[0][2], // row1
    g[1][0] + g[1][1] + g[1][2], // row2
    g[2][0] + g[2][1] + g[2][2], // row3
    g[0][0] + g[1][0] + g[2][0], // col1
    g[0][1] + g[1][1] + g[2][1], // col2
    g[0][2] + g[1][2] + g[2][2], // col3
    g[0][0] + g[1][1] + g[2][2], // top left to right
    g[0][2] + g[1][1] + g[2][0], // top right to left
  ].some((str) => str === "xxx" || str === "ooo");

/**
 * Determines if there is a tic tac toe winner based on three in a row for "x"
 * or "o".
 * Using loops is only an advantage over the hard-coded version if the game can
 * be expanded to a larger grid.
 * Time: O(n^2). n = grid.length.
 * Space: O(n^2). colSums stores every letter of every column.
 * @param {Array<Array<string>>} grid
 * @returns {boolean} Whether there is a winner or not.
 */

const isWinning = (str) => {
  return str === "xxx" || str === "ooo";
};

console.log("------ Test 1------");
console.log(checkTicTacToeWinner(grid1));
console.log(checkTicTacToeWinner(grid2));
console.log(checkTicTacToeWinner(grid3));
console.log(checkTicTacToeWinner(grid4));

function checkTicTacToeWinner(grid) {
  let diag1Concat = "";
  let diag2Concat = "";
  const colConcats = [];
  result = false;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i]; // row: ["x", "x", ""]
    let rowConcat = "";

    for (let j = 0; j < row.length; j++) {
      const val = row[j];
      rowConcat += val; // after the loop, rowConcat could get row1, row2, row3

      // if colConcats[0] is empty, colConcats[0]= "", after that += val
      colConcats[j] = (colConcats[j] || "") + val;

      if (i === j) {
        diag1Concat += val; // diag1 :g[0][0] + g[1][1] + g[2][2]
      }
      if (j === row.length - i - 1) {
        diag2Concat += val; //diag2: g[0][2] + g[1][1] + g[2][0]
      }
      if (isWinning(rowConcat) === true) {
        return true;
      }
    }
  }
  if (isWinning(diag1Concat) || isWinning(diag2Concat)) {
    return true;
  }
  for (const eachCombo of colConcats) {
    if (isWinning(eachCombo)) return true;
  }
  return false;
}

function matchingLine(position, velocity, grid) {
  // velocity is essentially just a representation of change in direction
  const newPosition = {
    x: position.x + velocity.x,
    y: position.y + velocity.y,
  };
  if (newPosition.x == grid.length || newPosition.y == grid.length) {
    // check to see if we are still within the bounds of the grid
    return true; // made it to the other side of the grid so we know that the entire row matches
  }
  if (grid[newPosition.y][newPosition.x] !== grid[position.y][position.x]) {
    return false; // if value at newPosition is not the same as the  value at last checked position then we can stop looking
  }
  return matchingLine(newPosition, velocity, grid); // continue moving in the same direction
}

function checkTicTacToeWinner2(grid) {
  for (let i = 0; i < grid.length; i++) {
    if (
      matchingLine({ x: 0, y: i }, { x: 1, y: 0 }, grid) ||
      matchingLine({ x: i, y: 0 }, { x: 0, y: 1 }, grid)
    )
      // col123: - 00-10-20 , 01-11-21, 02-12-22          row123 : 00-01-02, 10-11-12, 20-21-22
      return true;
  }
  // check diagonals
  return (
    matchingLine({ x: 0, y: 0 }, { x: 1, y: 1 }, grid) ||
    matchingLine({ x: 0, y: grid.length - 1 }, { x: 1, y: -1 }, grid)
  );
  // diag1: 00-11-22                              diag2: 02-11-20
}

/* grid:                                           
        00  01  02                                           
        10  11  12                                             
        20  21  22                                             
        */

console.log("------test helper2------");
console.log(checkTicTacToeWinner2(grid1));
console.log(checkTicTacToeWinner2(grid2));
console.log(checkTicTacToeWinner2(grid3));
console.log(checkTicTacToeWinner2(grid4));

// if prev == curr, return currVal, else false
const helper = (str, prev = 0, curr = 1) => {
  if (curr >= str.length) {
    return true;
  }
  if (str[prev] && str[prev] === str[curr]) {
    return helper(str, curr, curr + 1);
  } else {
    return false;
  }
};

function checkTicTacToeWinnerBacktracking(grid) {
  let r = 0;
  let c = 0;
  let len = grid.length;

  while (r < len) {
    c = 0;
    console.log("STARTING: r: ", r, " | c: ", c);
    let startingVal = grid[r][c];
    let rowConcat = startingVal;
    let colConcat = startingVal;
    let diagConcat = startingVal;

    while (c < len - 1 && helper(rowConcat)) {
      if (grid[r][c + 1] === "") break;
      rowConcat += grid[r][c + 1];
      c++;
      if (c === len - 1) {
        console.log(rowConcat);
      }
    }

    while (c < len - 1 && helper(colConcat)) {
      if (grid[r + 1][c] === "") break;
      colConcat += grid[r + 1][c];
      c++;
      if (c === len - 1) {
        console.log(rowConcat);
      }
    }

    if (helper(colConcat)) {
      colConcat += grid[r + 1][c];
    }
    // if(helper(diagConcat)){
    //     diagConcat+= grid[r+1][c+1];
    // }
    r++;
  }
}
