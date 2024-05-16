/* The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing
c) n. */

let num = 0;
let prevNum = 0;

function printFibonacci() {
  let newNum;
  if (num == 0) {
    prevNum = num++;
  } else {
    newNum = prevNum + num;
    console.log(newNum);
    prevNum = num;
    num = newNum;
  }
}

//setInterval(printFibonacci, 1000);

function printFibonacciTimeouts(limit) {
  let num = 0;
  let prevNum = 0;
  let count = 0;

  function fibonacci() {
    let newNum;
    if (num == 0) {
      prevNum = num++;
    } else {
      newNum = prevNum + num;
      console.log(newNum);
      prevNum = num;
      num = newNum;
    }

    count++;
    if (count < limit || limit === undefined) {
      setTimeout(fibonacci, 1000);
    }
  }

  fibonacci();
}

printFibonacciTimeouts(100);
