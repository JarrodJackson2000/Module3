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
  //This code would only replace the middle animal if the array had
  //5 animals in it. This is because it is replacing the item at index 2 (item 3).
  //For all other arrays, index 2 won't be the middle. This can be fixed by dividing
  //the array's length by 2, and then using Math.floor to floor the value (to prevent decimal numbers)
  //By doing that, you'd have the index of the middle of the array, and then you can replace
  //the item at that index. 
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
