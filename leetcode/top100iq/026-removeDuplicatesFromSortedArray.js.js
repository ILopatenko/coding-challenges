//LINK: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

testArray = [1, 1, 2];

const removeDuplicates = arr => {
   let index = 0;
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[index]) {
         arr[index + 1] = arr[i];
         index++;
      }
   }
   return ++index;
};
