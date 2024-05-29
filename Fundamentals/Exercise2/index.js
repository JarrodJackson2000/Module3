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
//lessThan2 would also be incorrect since thirty and four are strings in this case
//When comparing 2 strings, JS will compare the first character of each of the strings.
//Since "3" is less than "4", "30" is less than "4". JS ignores the 2nd character
//in "30" because the first character of both strings were not equal, so it ignored any
//other characters
//To make this be false, you'd convert thirty and four to numbers before using the
//less than operator.
let lessThan2 = thirty < four;

console.log(addition);
console.log(addition1);
