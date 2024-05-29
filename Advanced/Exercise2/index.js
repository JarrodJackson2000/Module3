/* The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why?
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all. */

/*function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}*/

// Order they will be printed - #4, #3, #2, #1

let delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

//When variables are assigned to without first declaring it with let, var, or const, the
//value is globally declared, which means any code in this file can modify/access the variable.
//This can lead to unexpected and hard to track down bugs so it is better to use let or const
//so then you have block scoping; making the code easier to understand
//const should come before the cancelledTimeout function and before timeoutID
cancelledTimeout = () => {
  timeoutID = setTimeout(delayMsg, 12000, "#5: Delayed by 12sec");
  return timeoutID;
};

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
//By making the changes mentioned above, timeoutID will no longer be accessible below.
//The output of cancelledTimeout() should be assigned to a constant so it can be used
//by the clearTimeout function below.
cancelledTimeout();

clearTimeout(timeoutID);
