/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    var arr=[]
	var x = true
	for(var i = 0; i<str.length;i++){
		if (str[i]=='{'|| str[i]=='}' || str[i]=='(' || str[i]==')' || str[i]=='[' || str[i]==']'){
			arr.push(str[i])
        }
    }
	for(var j = 0;j<arr.length;j++){
		if (arr[j]!=arr[arr.length-1-j]){
			x = false
	return x
}
}
}

console.log(bracesValid(str1))
console.log(bracesValid(str2))
console.log(bracesValid(str3))

//tylers solution


/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/


function bracesValid(str) {
    const stack = [];
    const closeToOpen = {')': '(', '}': '{', ']': '['};
    for(let i = 0; i < str.length; i++){
        switch(str[i]){
            case '(':
            case '{':
            case '[':
                stack.push(str[i]);
                break;
            case ')':
            case '}':
            case ']':
                if(closeToOpen[str[i]] === stack[stack.length -1]){
                    stack.pop()
                } else {
                    return false;
                }
                break;
                default:
                    break;

        }
    }
    return stack.length === 0;
}

console.log(bracesValid(str1))
console.log(bracesValid(str2))
console.log(bracesValid(str3))