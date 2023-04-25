/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums=[], i = 0) {
    if(i===nums.length){
        return 0
    }
    return nums[i] +sumArr(nums, i+1)
}

function nonRec(nums) {
    var sum = 0
    // in is for objects of is for arrays
    for(i of nums){
        sum+=i
    }
    return sum
}


// console.log(nonRec(nums1))
// console.log(nonRec(nums2))
// console.log(nonRec(nums3))
console.log(sumArr(nums1))
console.log(sumArr(nums2))
console.log(sumArr(nums3))

/*****************************************************************************/
