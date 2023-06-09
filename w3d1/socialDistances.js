/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
  var seen1 = false;
  var distance = 0;
  for (var i = 0; i< queue.length; i++) {
    if (queue[i] === 1) {
      if (seen1 && distance < 6) {
        return false;
      } else {
        seen1 = true;
        distance = 0;
      }
    } else {
      distance++;
    }
  }
  return true;
}

console.log(socialDistancingEnforcer(queue1));
console.log(socialDistancingEnforcer(queue2));
console.log(socialDistancingEnforcer(queue3));
console.log(socialDistancingEnforcer(queue4));


//one liner solution
function isAnagram(s1, s2) {
  for (i in s1) {
    //checks # of occurences of current char in both strings
    if((s2.toLowerCase().split(s1[i]).length) != (s1.toLowerCase().split(s1[i]).length)) {
      return false
    }
  }
  return true
}