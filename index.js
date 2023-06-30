function isPalindrome(word) {
  // Write your algorithm here
 // reverse the input string

//if the reversed string is the same as the input
 // return true
//else
  //return false
}

/* 
  Add your pseudocode here
*/input :`mama`
output:`true`
input:`hi`
output:`false`

/*
  Add written explanation of your solution here
*/ //isPalindrome take an input string and check ehetjer the sting is palindrome if it id it return true otherwise false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("hi"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));


module.exports = isPalindrome;
