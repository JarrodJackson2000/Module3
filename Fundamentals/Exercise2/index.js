/*2. Which of the below are not giving the right answer? Why are they not correct? How can we
fix them?*/

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition =
  three + four; /* = 34  This one is not correct because it concatenates 
the strings, we must specify them to be numbers */

//Like this
let addition1 = Number(three) + Number(four);

let multiplication = three * four;
let division = three / four;
let subtraction = three - four;
let lessThan1 = three < four;
let lessThan2 = thirty < four;

console.log(addition);
console.log(addition1);
