//#2

/* case insensitive string compare */

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.
 */
function caseInsensitiveStringCompare(strA, strB) {
      // if(strA.length !== strB.length){
      //       return false
      // }
      // let strAlower = strA.toLowerCase()
      // let strBlower = strB.toLowerCase()
      console.log("compare:",strA.toLowerCase() === strB.toLowerCase())
      // if(strA.toLowerCase() === strB.toLowerCase()){
      //       return true;
      // } else{
      //       return false;
      // }
      return(strA.toLowerCase() === strB.toLowerCase())
}

console.log(caseInsensitiveStringCompare(strA1,strB1))
console.log(caseInsensitiveStringCompare(strA2,strB2))
console.log(caseInsensitiveStringCompare(strA3,strB3))