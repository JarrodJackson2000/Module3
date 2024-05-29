/* Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own. */

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

function unique(duplicatesArray) {
  newArray = "";
  newArray = new Set(duplicatesArray);
  //This correctly gets only the unique items from the duplicatesArray, but the
  //exercise is asking to return an array instead of a set. You can convert the
  //set to an array by using Array.from() like this:
  //return Array.from(newArray)
  return newArray;
}

const grades = ["A", "B", "C", "B", "A", "A", "F", "B", "A", "B"];

console.log(unique(grades));
