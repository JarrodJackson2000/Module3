/* The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?

It fails because the value of this is not bound to the setTimout function. 

a) Fix the setTimeout call by wrapping the call to car.description() inside a
function
b) Change the year for the car by creating a clone of the original and overriding it
c) Does the delayed description() call use the original values or the new values from
b)? Why? It uses the value from the original cars because it is asyncroness so when it is removed into its own envirmoment on the timer the cars object has not been changed
d) Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function
e) Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d) */

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
//setTimeout(car.description, 200); //fails

//bind returns a new function, it doesn't execute a function. This means that when the
//arrow function inside the setTimeout executes, the car.description method will not be called.
//If you remove the arrow function so the 1st parameter is only car.description.bind(car), then
//it'll work as expected.
//setTimeout(() => car.description.bind(car), 1000);

//let carClone = { ...car };

let boundCar = car.description.bind(car);

//In the exercise, what it meant by creating a clone and overriding the year was this:
//car = {...car, year: 2020}
//We want to set car to a clone of itself and override the year so then it changes it's object reference
//Calling car.description() inside of a function will give you the new car (the clone), and the bind
//method would give you the old car (before the clone)
let carClone = { ...boundCar };

//The description method shouldn't be changed in this case. The intention is to change the data in the
//car object, and have the description method log it to the console
carClone.description = () => {
  console.log("This car is a Nissan Skyline from 1992");
};

setTimeout(carClone.description, 1000);

car.description = () => {
  console.log("This car is a Toyota Supra from 1990");
};

car.description();
