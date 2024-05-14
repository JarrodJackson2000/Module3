/* Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array

a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case. */

const animals = ["Tiger", "Giraffe", "Gazelle", "Gator"];
console.log(animals);

animals.push("Lion", "Hippo");

console.log(animals);

animals.unshift("Rhino", "Cheetah");

console.log(animals);

animals.sort((array1, array2) => (array1 > array2 ? 1 : -1));

console.log(animals.sort());

function replaceMiddleAnimal(newValue) {
  animals.splice(2, 1, newValue);
}

//replaceMiddleAnimal("Elephant");

console.log(animals);

function findMatchingAnimals(beginsWith) {
  const matchingAnimals = animals.filter(function (animals) {
    return animals.toUpperCase().startsWith(beginsWith.toUpperCase());
  });
  return matchingAnimals;
}

console.log(findMatchingAnimals("L"));
