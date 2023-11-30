/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

let word="Athira is a good girl";

function lengthOfWord()
{
    let count =0;
    for(let i=word.length-1;i>=0;i--)
    {
      if(word.charAt(i)!==' ')
      {
        count++;
      }
      else
      {
        if(count>0)
        {
            return count;
        }
      }
    }

}
let count=lengthOfWord(word);
console.log("Last word length is :"+count)

let str1="listen";
let str2="silent";
 str1=str1.toLowerCase().split("").sort().join("");
 str2=str2.toLowerCase().split("").sort().join("");
if(str1 == str2)
{
    console.log("The given string is anagram")
}
else
{
    console.log("Not anagram")
}