//https://leetcode.com/problems/palindrome-number/description/

/* Given an integer x, return true if x is a palindrome, and false otherwise. */

const testNumber = 23999312;
const isPalindrome = number => {
   if (number < 10 && number >= 0) return true;
   if (number < 0 || number % 10 === 0) return false;
   const array = [];
   while (number > 0) {
      const last = number % 10;
      array.unshift(last);
      number = (number - last) / 10;
   }
   for (let i = 0; i <= array.length / 2 - 1; i++)
      if (array[i] !== array[array.length - 1 - i]) return false;
   return true;
};

const answer = isPalindrome(testNumber);
//console.clear();
console.log();
console.log({ testNumber, answer });
console.log();
