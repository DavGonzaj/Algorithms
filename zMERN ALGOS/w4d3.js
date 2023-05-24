/* 
Given by Riot games.
*/
// b70a164c32a20c10

// b 70
// a 184
// c 42

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
  let strObj = {},
    newStr = "";
  for (let i = 0; i < s.length; i++) {
    let newSum = "";
    if (isNaN(s[i])) {
      for (let j = i + 1; !isNaN(s[j]); j++) {
        newSum += s[j];
      }

      if (s[i] in strObj) {
        strObj[s[i]] += parseInt(newSum);
      } else {
        strObj[s[i]] = parseInt(newSum);
      }
    }
  }

  const sortedKeys = Object.keys(strObj).sort();

  for (const key of sortedKeys) {
    newStr += key + strObj[key];
  }

  return newStr;
}
console.log(rehash(str1));

function rehashArray(str) {
  // 'b' - 'a' = 2
  const letterHashCounts = [];
  let numStr = "";
  let letter = str[0];

  //b70a164c32a20c10
  for (let i = 1; i < str.length; i++) {
    const num = parseInt(str[i]);
    const isNum = !isNaN(num);
    const isLetter = isNaN(num);

    if (isNum) {
      numStr += str[i];
    }

    if (isLetter || i === str.length - 1) {
      const letterCount = parseInt(numStr);
      let charCode = letter.charCodeAt() - "a".charCodeAt(); // 'c'- 'a' = 2
      if (letterHashCounts[charCode] === undefined) {
        letterHashCounts[charCode] = 0;
      }
      letterHashCounts[charCode] += letterCount;

      letter = str[i];
      numStr = "";
    }
  }
  console.log(letterHashCounts);

  let newHash = "";

  for (let i = 0; i < letterHashCounts.length; i++) {
    if (letterHashCounts[i]) {
      newHash += String.fromCharCode(i + 97);
      newHash += letterHashCounts[i];
    }
  }
  return newHash;
}

/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/
// 1 h, 1 e, 3 l, 2 o, 1 r, 1 d
const strA1 = "Hello World";
const strB1 = "lloeh wordl";
//const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {
  const obj1 = {};
  const obj2 = {};
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  for (let i of s1) {
    if (i in obj1) {
      obj1[i]++;
    } else {
      obj1[i] = 1;
    }
  }
  console.log(obj1);
  for (let j of s2) {
    if (j in obj2) {
      obj2[j]++;
    } else {
      obj2[j] = 1;
    }
  }
  console.log(obj2);
  for (let char in obj1) {
    if (char in obj2 == false || obj1[char] > obj2[char]) {
      return false;
    }
  }
  return true;
}

console.log(canBuildS1FromS2(strA1, strB1));
console.log(canBuildS1FromS2(strA2, strB2));
console.log(canBuildS1FromS2(strA3, strB3));
console.log(canBuildS1FromS2(strA4, strB4));
console.log(canBuildS1FromS2(strA5, strB5));
