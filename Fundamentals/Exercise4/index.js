/* 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b. What does the ‘+=’ do? */

/* let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
} */

let a = 2,
  b = 11;
let result = `${a} + ${b} is `;
//This works as expected, but a way to write this with less code would be:
//result += a + b < 10 ? 'less than 10' : 'greater than 10'
//Since the ternary operator returns the part after the ? if the condition is true,
//and returns the part after the : if the condition is false,
//we can put the result += before the ternary.
//If a + b is less than 10, the code above will effectively be:
//result += 'less than 10'
//but if a + b is not less than 10, the code will effectively be:
//result += 'greater than 10'
a + b < 10 ? (result += `less than 10`) : (result += `greater than 10`);

console.log(result);
