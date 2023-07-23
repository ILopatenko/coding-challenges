//LINK: https://leetcode.com/problems/roman-to-integer/

const testValue = 'MCMXCIV';

const romanToIntLong = str => {
   const hash1 = {
      I: 1,
      X: 10,
      C: 100,
   };

   const hash2 = {
      V: 5,
      L: 50,
      D: 500,
      M: 1000,
   };

   const hash = {
      I: 1,
      X: 10,
      C: 100,
      V: 5,
      L: 50,
      D: 500,
      M: 1000,
   };
   let sum = 0;
   for (let i = 0; i < str.length; i++) {
      let current = str[i];
      console.log({ i, current });
      if (hash2[current]) {
         console.log('This number can not decrease');
         sum += hash2[current];
         console.log({ sum });
      } else {
         console.log('This number can decrease');
         console.log('lets check the next number');
         if (str[i + 1] === undefined) {
            console.log('There is no next number (this one is last)');
            sum += hash1[current];
            console.log({ sum });
         } else {
            console.log('This one is not last');
            if (hash[str[i + 1]] > hash[current]) {
               console.log('Next is bigger');
               sum += hash[str[i + 1]] - hash[current];
               console.log({ sum });
               i++;
            } else sum += hash[current];
         }
      }
   }
   return sum;
};

const romanToInt = str => {
   const hash2 = {
      V: 5,
      L: 50,
      D: 500,
      M: 1000,
   };

   const hash = {
      I: 1,
      X: 10,
      C: 100,
      V: 5,
      L: 50,
      D: 500,
      M: 1000,
   };
   let sum = 0;
   for (let i = 0; i < str.length; i++) {
      if (hash2[str[i]]) sum += hash2[str[i]];
      else {
         if (i === str.length) sum += hash[str[i]];
         else {
            if (hash[str[i + 1]] > hash[str[i]]) {
               sum += hash[str[i + 1]] - hash[str[i]];
               i++;
            } else sum += hash[str[i]];
         }
      }
   }
   return sum;
};

let ans = romanToInt(testValue);
console.log(ans);
