/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";



const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
// function acronymize(str) {}

function acronymize(str) {
    var strAcro = ""
    var splitStr = str.split(" ");
    // console.log(splitStr)
    for (i = 0; i < splitStr.length; i++) {
        if (splitStr[i] != ""){
            strAcro += splitStr[i][0].toUpperCase()

        }
        // console.log(splitStr[i][0].toUpperCase())

    }
return strAcro
    // console.log(splitStr)

}
console.log(acronymize(str1))

console.log(acronymize(str2))

console.log(acronymize(str3))

console.log(acronymize(str4))






// /* 
//   Acronyms
//   Create a function that, given a string, returns the string’s acronym 
//   (first letter of each word capitalized). 
//   Do it with .split first if you need to, then try to do it without
// */

// const str1 = "object oriented programming";
// const expected1 = "OOP";

// // The 4 pillars of OOP
// const str2 = "abstraction polymorphism inheritance encapsulation";
// const expected2 = "APIE";

// const str3 = "software development life cycle";
// const expected3 = "SDLC";

// // Bonus: ignore extra spaces
// const str4 = "  global    information tracker    ";
// const expected4 = "GIT";

// /**
//  * Turns the given str into an acronym.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} wordsStr A string to be turned into an acronym.
//  * @returns {string} The acronym.
//  */
// function acronymize(str) {
//     var acro=""
//     for(i=0;i<str.length;i++){
//         if(i==0 && str[i] != " "){
//             acro+=str[i]
//         }

//         if(str[i]===" "){
//             continue
//         }

//         if(str[i]!=" " && str[i-1]===" "){
//             acro+=str[i]
//         }
//     }
//     return acro.toUpperCase()
// }

// console.log(acronymize(str1))
// console.log(acronymize(str2))
// console.log(acronymize(str3))
// console.log(acronymize(str4))