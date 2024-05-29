/* Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds. 
a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters
b) Use apply to improve your solution so that delayed functions can take any number of
parameters
c) Modify multiply to take 4 parameters and multiply all of them, and test that your
delay prototype function still works. */

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}
//multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

Function.prototype.delay = function (ms) {
  const func = this;
  return function (...args) {
    setTimeout(() => {
      //This part works as expected, but the exercise was intending on this part using apply
      //to make the delayed functions take any number of parameters
      //To do that, you'd do
      //func.apply(this, args)
      func(...args);
    }, ms);
  };
};

multiply.delay(2000)(5, 5, 2, 2);
