/* 1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings. */

function ucFirstLetters(str) {
  let splitString = str.split(" ");
  let resultString = "";
  splitString.forEach(function (item) {
    let result = item.substring(0, 1).toUpperCase() + item.slice(1) + " ";
    resultString += result;
  });
  return resultString;
}

console.log(ucFirstLetters("los angeles")); //Los Angeles
