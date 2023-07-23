//LINK: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
//DESCRIPTION: *optional

const haystack = 'sadbutsad';
const needle = 'sad';

const strStr = (str, parameter) => {
   let index = null;
   for (let i = 0; i < str.length; i++) {
      if (str[i] === parameter[0]) {
         index = i;
         for (let j = 1; j < parameter.length; j++) {
            if (str[index + j] !== parameter[j]) {
               index = null;
               break;
            }
         }
         if (index !== null) return index;
      }
   }
   return -1;
};

const ans = strStr(haystack, needle);
console.log(`The final answer is "${ans}"`);
