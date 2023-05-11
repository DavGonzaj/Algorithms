/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { idx: 4, num: 6 },
  { idx: 7, num: 10 },
];

const nums2 = [];
const expected2 = [];

const nums3 = [1, 3, 7, 9];
const expected3 = [
  { idx: 1, num: 3 },
  { idx: 2, num: 7 },
  { idx: 3, num: 9 },
];
// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {
  let newArr = [];
  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i - 1] + 1 != sortedNums[i]) {
      newArr.push({ idx: i, nums: sortedNums[i] });
    }
  }
  return newArr;
}
console.log(allNonConsecutive(nums1));
console.log(allNonConsecutive(nums2));
console.log(allNonConsecutive(nums3));

// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums4 = [2, 5, 3, 6, 7, 23, 12];
const sum4 = 16;
const expected4 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const nums5 = [];
const sum5 = 5;
const expected5 = [];

const nums6 = [10, 15, 20, 35, 30];
const sum6 = 5;
const expected6 = [];

// Bonus （include 0):
const nums7 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum7 = 16;
const expected7 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus (include negative numbers):
const nums8 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum8 = -16;
const expected8 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) {
  let finalArr = [];

  for (let i = 0; i < nums.length; i++) {
    let tempArr = [],
      sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      tempArr.push(nums[j]);
      if (sum === targetSum) {
        finalArr.push(tempArr);
        break;
      }
      //  else if (sum > targetSum) {
      //     break;
      //   }
    }
  }
  return finalArr;
}
console.log(findConsqSums(nums4, sum4));
console.log(findConsqSums(nums5, sum5));
console.log(findConsqSums(nums6, sum6));
console.log(findConsqSums(nums7, sum7));
console.log(findConsqSums(nums8, sum8));
