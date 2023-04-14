/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
    var start = 0
    var end =str.length-1
    // newString = str.replace(/\s+/g,' ').trim();
    // return newString
    for(var i=0, j=str.length-1, x=0;x<str.length ; x++ ){
        if(str[i]!= ' ' && start ===0){
            start=i
        }
        else{
            i++
        }

        if(str[j]!=' ' && end ===str.length-1){
            end=j
        }
        else{
            j--
        }
    }
    return str.slice(start,end+1)
}

/*****************************************************************************/



console.log(trim(str1))

//second solution


 //function trim(str) {
//     newStr=""
//     for(var i=0;i<str.length;i++){
//         if(str[i]!=' '){
//             newStr+=str[i]
//         }

//         if(str[i]== ' '  && str[i-1]!= ' ' && str[i+1]!=' '){
//             newStr+=str[i]
//         }
//     }

//     return newStr
// }