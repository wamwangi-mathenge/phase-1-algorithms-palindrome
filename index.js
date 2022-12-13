function isPalindrome(word) {
  // Write your algorithm here
  // Lowercase the string and use the RegExp to remove unwanted characters
  const str = /[\W_]/g;
  const lowerStr = word.toLowerCase().replace(str, '');
  // Reversing the string
  const revStr = lowerStr.split('').reverse().join('');
  return revStr === lowerStr;
}

// isPalindrome("abba")
// isPalindrome("racecar")
// isPalindrome("a")
// isPalindrome("robot")
// isPalindrome("ab")

/* 
  Add your pseudocode here
  Declare a function called isPalindrome which receives one argument - word
    Use built-in functions that will reverse the string.
    Check if the reversed string is strictly equal to the normal string and return a boolean.
*/

/*
  Add written explanation of your solution here
  Declare a function called isPalindrome that receives one argument which is the word.
    Lowercase the string and use RegExp to remove unwanted characters.
    Use a new variable lowerStr to lowerCase all characters in the string
    Create a new variable that reverses the string
    Check if the reversed string is strictly equal to the regular string and return an appropriate boolean
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
