/* We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.

a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below
b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it
c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value */

async function NewPromiseAsynchronously() {
  try {
    const promise1 = new Promise((resolve, reject) => {
      let x = 20;
      let result = Math.floor(Math.random() * x);
      if (result % 2 == 0) resolve(`Even. The random number was ${result}`);
      else reject(`Odd. The random number was ${result}`);
    });
    let result = await promise1;
    console.log(result);
  } catch (Error) {
    console.log("Error: " + Error);
  }
}
NewPromiseAsynchronously();
