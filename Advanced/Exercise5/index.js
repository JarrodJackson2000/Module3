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

//setTimeout(() => car.description.bind(car), 1000);

//let carClone = { ...car };

let boundCar = car.description.bind(car);

let carClone = { ...boundCar };

carClone.description = () => {
  console.log("This car is a Nissan Skyline from 1992");
};

setTimeout(carClone.description, 1000);

car.description = () => {
  console.log("This car is a Toyota Supra from 1990");
};

car.description();
