// merge
const sortedA1 = [];
const sortedB1 = [2];
const expectedMerge1 = [2];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [2, 3, 4, 7];
const sortedB3 = [3];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left = [], right = []) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}
console.log(merge(sortedA1, sortedB1));
console.log(merge(sortedA2, sortedB2));
console.log(merge(sortedA3, sortedB3));
console.log(merge(sortedA4, sortedB4));

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums = []) {
  if (nums.length <= 1) {
    return nums;
  }

  const middlePoint = Math.floor(nums.length / 2);
  const left = nums.slice(0, middlePoint);
  const right = nums.slice(middlePoint);

  return merge(mergeSort(left), mergeSort(right));

  //we need to split the array, we use slice method we can declare a left variable as the left half, and a right variable as the right half.
  //left = leftArr
  //right = rightArr
}

return merge(leftArr, rightArr);

// //SOLUTION 2
// // merge
// const sortedA1 = [];
// const sortedB1 = [2];
// const expectedMerge1 = [2];

// const sortedA2 = [5];
// const sortedB2 = [2];
// const expectedMerge2 = [2, 5];

// const sortedA3 = [2, 3, 4, 7];
// const sortedB3 = [3];
// const expectedMerge3 = [2, 3, 3, 4, 7];

// const sortedA4 = [1, 2, 4, 5, 6, 9];
// const sortedB4 = [3, 7, 8, 10];
// const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// /**
//  * Efficiently merges two already sorted arrays into a new sorted array.
//  * Do not mutate the given arrays.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} left
//  * @param {Array<number>} right
//  * @returns {Array<number>} A new sorted array containing all the elements of
//  *    both given halves.
//  */
// function merge(left = [], right = []) {
//   tempArr = [];
//   let i = 0, j = 0;
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       console.log("i " + i)
//       tempArr.push(left[i]);
//       i++;
//     }
//     else {
//       // console.log("j " + j)
//       tempArr.push(right[j]);
//       j++;
//     }
//   }

//   if (i != left.length) {
//     //put remainder of left in tempArr
//     while (i < left.length) {
//       tempArr.push(left[i])
//       i++
//     }
//   }
//   else if (j != right.length) {
//     //put remainder of right in tempArr
//     while (j < right.length) {
//       tempArr.push(right[j])
//       j++
//     }
//   }
//   console.log(i)
//   console.log(j)

//   return tempArr;
// }

// console.log(merge(sortedA1, sortedB1))
// console.log(merge(sortedA2, sortedB2))
// console.log(merge(sortedA3, sortedB3))
// console.log(merge(sortedA4, sortedB4))

// // mergeSort
// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// /**
//  * Creates a new sorted array based on the given nums being recursively split
//  * and merged.
//  * Best: O(n log(n)) linearithmic.
//  * Avg: O(n log(n)) linearithmic.
//  * Worst: O(n log(n)) linearithmic.
//  * @param {Array<number>} nums
//  * @returns {Array<number>} A New sorted array.
//  */
// function mergeSort(nums = []) {
//   if (nums.length <= 1){
//     return nums;
//   }

//   const middlePoint = Math.floor(nums.length/2);
//   const left = nums.slice(0, middlePoint);
//   const right = nums.slice(middlePoint);

//   return merge(mergeSort(left), mergeSort(right));

//   //we need to split the array, we use slice method we can declare a left variable as the left half, and a right variable as the right half.
//   //left = leftArr
//   //right = rightArr
// }

// return merge(leftArr, rightArr)
