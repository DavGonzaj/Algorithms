/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    if(sortedNums[0]>searchNum){
        return false
    }
    if(sortedNums[sortedNums.length-1]<searchNum){
        return false
    }
    let start = 0
    let end = sortedNums.length-1
    
    while(start<= end){
        let guess = Math.floor((start+end)/2)
        if(sortedNums[guess]===searchNum){
            let count = 1
            for(i of sortedNums){
                if(i>searchNum){
                    return count
                }
                if(i===searchNum){
                    count++
                }
            }
            return count
        }
        else if(sortedNums[guess]<searchNum){
            start = guess+1
        }
        else{
            end = guess-1
        }
    }
    return false
}

console.log(binarySearch(nums2,searchNum2))
/*****************************************************************************/