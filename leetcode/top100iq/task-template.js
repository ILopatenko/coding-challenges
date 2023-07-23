//LINK: <link to the task>
//DESCRIPTION: *optional

const testArr = [3, 5, 6, 9, 12];
const testStr = '';
const testNumber = 9;

const someFunction = argument => {
   for (let i = 0; i < argument.length; i++) {
      let current = argument[i];
      console.log(`\n New iteration of for loop`, { i, current });
   }
   return true;
};

const ans = someFunction(testArr);
console.log(`The final answer is "${ans}"`);
