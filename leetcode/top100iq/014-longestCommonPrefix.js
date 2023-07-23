//LINK: https://leetcode.com/problems/longest-common-prefix/

/*Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".*/

const tarr = ['flower', 'flow', 'flight'];
const longestCommonPrefix = arr => {
   let prefix = '';
   for (let i = 0; i < arr[0].length; i++) {
      let current = arr[0][i];
      for (let j = 1; j < arr.length; j++) {
         toCheck = arr[j][i];
         if (current !== toCheck) return prefix;
      }
      prefix += current;
   }
   return prefix;
};

let ans = longestCommonPrefix(tarr);
console.log(ans);
