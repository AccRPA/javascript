/**
 * Write a JavaScript program to check to two 
 * numbers and return true if one of the number
 * is 100 or if the sum of the two numbers is 100
 */

const checkTwoNumbers = (a, b) => a === 100 || b === 100 || (a + b) === 100;
console.log(checkTwoNumbers(1,2));
console.log(checkTwoNumbers(50,50));
console.log(checkTwoNumbers(50,100));