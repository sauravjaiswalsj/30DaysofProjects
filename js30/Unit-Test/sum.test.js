// This uses jest library for the file
const { exportAllDeclaration } = require('@babel/types');
const sum = require('./sum');


// this is to test file 
// @param (sum(a,b)) equals sum
// check the output agains the actual output
test('adds 1 + 2 to equal 3 ', ()=>{
 expect(sum(1,2)).toBe(3);
});
