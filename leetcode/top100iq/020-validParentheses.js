//LINK: https://leetcode.com/problems/valid-parentheses/

/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid..*/

const tstr = '((';

const isValidFULL = str => {
   const all = {
      '(': 1,
      ')': 2,
      '[': 3,
      ']': 4,
      '{': 5,
      '}': 6,
   };
   let temp = [];

   if (str.length % 2 !== 0 || all[str[0]] % 2 === 0) return false;
   temp.push(str[0]);
   console.log('before loop');
   console.log({ temp });

   for (let i = 1; i < str.length; i++) {
      let current = str[i];
      console.log({ i, current });
      if (all[str[i]] % 2 === 0) {
         console.log('current is closing part');
         if (all[str[i]] - all[temp.at(-1)] === 1) {
            temp.pop();
         } else return false;
      } else {
         console.log('current is opening part');
         temp.push(current);
         console.log('new temp', { temp });
      }
   }
   return temp.length === 0;
};

const isValid = str => {
   const all = {
      '(': 1,
      ')': 2,
      '[': 3,
      ']': 4,
      '{': 5,
      '}': 6,
   };
   let temp = [];

   if (str.length % 2 !== 0 || all[str[0]] % 2 === 0) return false;
   temp.push(str[0]);
   for (let i = 1; i < str.length; i++) {
      let current = str[i];
      if (all[current] % 2 === 0) {
         if (all[current] - all[temp.at(-1)] === 1) {
            temp.pop();
         } else return false;
      } else {
         temp.push(current);
      }
   }

   return temp.length === 0;
};

let ans = isValid(tstr);
console.log(ans);
