//LINK: https://leetcode.com/problems/reverse-string/
//DESCRIPTION:
/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
*/

const testArr = ['h', 'e', 'l', 'l', 'o', '!'];

const reverseString = arr => {
   for (let i = 0; i <= arr.length / 2 - 1; i++) {
      let current = arr[i];
      console.log(`\n New iteration of for loop`, { i, current });
      let swap = current;
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = swap;
   }
   return arr;
};
const ans = reverseString(testArr);
console.log(`The final answer is "${ans}"`);

const reverseString = arr => {
   let swap;
   for (let i = 0; i <= arr.length / 2 - 1; i++) {
      swap = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = swap;
   }
};
