/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
R - read/restate
I - input
O - output
T - talk
*/

const str1 = "creature";
const expected1 = "erutaerc";



const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
// function reverseString(str) {
//   let left = 0
//   let right = str.length - 1
//   while(left<right){
//     let temp = str[left]
//     str[left]=str[right]
//     str[right]=temp
//     left++
//     right--
//   }

//   console.log(str)
//   return str
// }
// console.log(str1)
// console.log(str2)
// console.log(str3)
// console.log(str4)

//#3
function reverseString(str) {

  var newString = "";

  for (var i = str.length - 1; i >= 0; i--) { 
      newString += str[i]; 
  }

  return newString; 
}

console.log(reverseString('hello'))

