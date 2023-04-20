/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
  let change = {};
  while (cents > 0) {
    if (cents >= 25) {
      cents -= 25;
      if ("quarter" in change) {
        change["quarter"]++;
      } else {
        change["quarter"] = 1;
      }
    } else if (cents >= 10) {
      cents -= 10;
      if ("dime" in change) {
        change["dime"]++;
      } else {
        change["dime"] = 1;
      }
    } else if (cents >= 5) {
      cents -= 5;
      if ("nickel" in change) {
        change["nickel"]++;
      } else {
        change["nickel"] = 1;
      }
    } else if (cents > 0) {
      change["penny"] = cents;
      cents -= cents;
    }
  }
  return change;
}

console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2));
console.log(fewestCoinChange(cents3));
console.log(fewestCoinChange(cents4));
