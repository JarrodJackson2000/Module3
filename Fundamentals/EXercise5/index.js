/* Rewrite the following function using: a) function expression syntax, 
and b) arrow function
syntax. Test each version to make sure they work the same. */

function getGreeting(name) {
  return "Hello " + name + "!";
}

const greeting = function (x) {
  return "Hello " + x + "!";
};

console.log(greeting("Jarrod"));

const greeting2 = (y) => {
  return "Hello " + y + "!";
};

console.log(greeting2("Jarrod"));
