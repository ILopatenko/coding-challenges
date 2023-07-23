//LINK: https://leetcode.com/problems/two-sum/

/*Given an array of integers [nums] and an integer [target], return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.*/

const testNums = [2, 7, 11, 15];
const target = 9;

const twoSum = (arr, target) => {
   hash = {};
   for (let i = 0; i < arr.length; i++) {
      if (hash[target - arr[i]] !== undefined) return [hash[target - arr[i]], i];
      hash[arr[i]] = i;
   }
};

let ans = twoSum(testNums, target);
console.log(ans);
