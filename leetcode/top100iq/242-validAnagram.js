//LINK: https://leetcode.com/problems/valid-anagram/
//DESCRIPTION:
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const firstWord = 'anagramn';
const secondWord = 'nagaramm';

const isAnagram2 = (first, second) => {
   if (first.length !== second.length) return false;

   hashHelper = str => {
      const hash = {};
      for (let letter of str) !hash[letter] ? (hash[letter] = 1) : hash[letter]++;
      return hash;
   };
   const firstHash = hashHelper(first);
   const secondHash = hashHelper(second);
   console.log({ firstHash, secondHash });

   for (let each in firstHash) {
      console.log(each, firstHash[each], secondHash[each]);
      if (firstHash[each] !== secondHash[each]) return false;
   }
   return true;
};

const isAnagram3 = (first, second) => {
   if (first.length !== second.length) return false;
   hashHelper = str => {
      const hash = {};
      for (let letter of str) !hash[letter] ? (hash[letter] = 1) : hash[letter]++;
      return hash;
   };
   const firstHash = hashHelper(first);
   const secondHash = hashHelper(second);
   for (let each in firstHash) if (firstHash[each] !== secondHash[each]) return false;
   return true;
};

const isAnagram = (first, second) => {
   if (first.length !== second.length) return false;
   const firstHash = {};
   const secondHash = {};
   for (let i = 0; i < first.length; i++) {
      !firstHash[first[i]] ? (firstHash[first[i]] = 1) : firstHash[first[i]]++;
      !secondHash[second[i]] ? (secondHash[second[i]] = 1) : secondHash[second[i]]++;
   }
   for (let each in firstHash) if (firstHash[each] !== secondHash[each]) return false;
   return true;
};

const ans = isAnagram(firstWord, secondWord);
console.log(`The final answer is "${ans}"`);
