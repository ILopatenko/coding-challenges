//https://leetcode.com/problems/two-sum/

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

const testArray = [3, 5, 2, 1, 4, 0];
const target = 9;

const twoSum = (array, target) => {
   const hash = {};
   /* 
   for (let i = 0; i < array.length; i++) {
      const current = array[i];
      if (hash[current]) {
         return [hash[current] - 1, i];
      } else {
         hash[target - current] = i + 1;
      }
   } */

   for (let i in array) {
      const current = array[i];

      if (hash[current]) {
         return [hash[current] - 1, +i];
      } else {
         hash[target - current] = +i + 1;
      }
   }
};

const answer = twoSum(testArray, target);
//console.clear();
console.log();
console.log(answer);
console.log();
