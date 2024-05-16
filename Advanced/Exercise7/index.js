/* In JavaScript, the toString method is used to convert an object to a string representation.
By default, when an object is converted to a String, it returns a string that looks something
like [object Object].
However, we can define our own toString methods for custom objects to provide a more
meaningful string representation.
a) Define a custom toString method for the Person object that will format and print
their details
b) Test your method by creating 2 different people using the below constructor function
and printing them
c) Create a new constructor function Student that uses call to inherit from Person and
add an extra property cohort

d) Add a custom toString for Student objects that formats and prints their details. Test
with 2 students. */

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); //prints person1: [object Object]

Person.prototype.toString = function () {
  return "Name: " + this.name + " Age: " + this.age + " Gender: " + this.gender;
};

console.log(person1.toString());

const person2 = new Person("Jarrod Jackson", 23, "Male");

const person3 = new Person("James Bond", 30, "Male");

console.log(person2.toString(), person3.toString());

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

Student.prototype.toString = function () {
  return (
    "Name: " +
    this.name +
    " Age: " +
    this.age +
    " Gender: " +
    this.gender +
    " Cohort: " +
    this.cohort
  );
};

const student1 = new Student(
  "Penny Winkle",
  22,
  "Female",
  "IOD - April Cohort"
);

const student2 = new Student("Will Smith", 40, "Male", "IOD - April Cohort");

console.log(student1.toString(), student2.toString());
