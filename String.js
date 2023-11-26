/*
Classroom Assignment 1:

let yourName = "suresh";
write a function to reverse the string.

// hints
1) convert the input into characters
2) loop them in reverse direction
3) concate the string
4) print the new string

Classroom Assignment 2:

If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

const str = "madam";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
	reversedStr += str[i];
}
console.log(reversedStr);
if (reversedStr==str) {
    console.log("The word is a palindrome")
}else{
    console.log("The word is not a palindrome")
}




