/* 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
following:

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

We can sometimes avoid this using the toFixed function to force the number of decimal
places as below, but it’s not always useful:

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working? */

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working? This does not work because the + operator is concatenating the strings

/* a) Explain why the above code returns the wrong answer
b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.
c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns
the correct float result. https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10. */

let operation = "*";

let numDecimals = 5;
/* function currencyAddition(a, b) {
  let correctAddition = parseFloat(a) + parseFloat(b);
  return correctAddition.toFixed(1);
} */
console.log(calculate(twentyCents, tenCents, operation, numDecimals));

function calculate(a, b, operation, numDecimals) {
  const operator = operation;
  switch (operation) {
    case "-":
      let correctSubtraction = parseFloat(a) - parseFloat(b);
      return correctSubtraction.toFixed(numDecimals);
      break;

    case "+":
      let correctAddition = parseFloat(a) + parseFloat(b);
      return correctAddition.toFixed(numDecimals);
      break;

    case "/":
      let correctMultiplication = parseFloat(a) / parseFloat(b);
      return correctMultiplication.toFixed(numDecimals);
      break;

    case "*":
      let correctDivision = parseFloat(a) * parseFloat(b);
      return correctDivision.toFixed(numDecimals);
      break;
  }
}
