/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

const strA5 = "nos";
const strB5 = "yes";
const expected5 = false;
/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
// function isAnagram(s1, s2) {
//     if(s1.length !== s2.length){
//         return false
//     }
//     for(var i = 0;i<s1.length;i++){
//         if(s1.length===s2.length && s1[i]===s2[i]){
//             return true
//         }
//     }
// }



// console.log(isAnagram(strA1,strB1))
// console.log(isAnagram(strA2,strB2))
// console.log(isAnagram(strA3,strB3))
// console.log(isAnagram(strA4,strB4))
// console.log(isAnagram(strA5,strB5))


//freqtable
function isAnagram(s1,s2){
    var s1FreqTable = makeFrequencyTable(s1.toLowerCase())
    var s2FreqTable = makeFrequencyTable(s2.toLowerCase())
    if(s1.length!== s2.length){
        return false
    }
    for (let key in s1FreqTable) {
        if(s1FreqTable[key]!==s2FreqTable[key]){
            return false
        }
        // console.log(key, s1FreqTable[key]===s2FreqTable[key]);
      }
      return true
}

function makeFrequencyTable(arr) {
    const freqTable={}
    for(let i = 0;i<arr.length;i++){
      if(!freqTable[arr[i]]){
        freqTable[arr[i]] = 1
      }else{
        freqTable[arr[i]]++
      }
      console.log(freqTable)
    }
    return freqTable
  }

console.log(isAnagram(strA1,strB1))
console.log(isAnagram(strA2,strB2))
console.log(isAnagram(strA3,strB3))
console.log(isAnagram(strA4,strB4))
console.log(isAnagram(strA5,strB5))