/*3. Which of the following console.log messages will print? Why? */

if (0) console.log("#1 zero is true"); // This will not print to the console as 0 is considered false
if ("0") console.log("#2 zero is true"); // This will print to the console as it is a string with at least 1 character so it is considered true
if (null) console.log("null is true"); // This will not print to the console as null is considered false
if (-1) console.log("negative is true"); //  This will print to the console as -1 is a real number and considered true
if (1) console.log("positive is true"); // This will print to the console as 1 is a real number and considered true
