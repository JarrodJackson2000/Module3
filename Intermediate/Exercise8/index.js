/* The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.

a) Create a new phoneBookDEF Map to store names beginning with D, E or F
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
c) Update the phone number for Caroline
d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map
e) Combine the contents of the two individual Maps into a single phoneBook Map
f) Print out the full list of names in the combined phone book */

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

//console.log(phoneBookABC);

let phoneBookDEF = new Map([
  ["Dave", "0412212212"],
  ["Eric", "0432132132"],
  ["Frank", "0499999999"],
]);
/*phoneBookDEF.set("Dave", "0412212212");
phoneBookDEF.set("Eric", "0432132132");
phoneBookDEF.set("Frank", "0499999999");*/

//console.log(phoneBookDEF);
phoneBookABC.set("Caroline", "0498765432");

//console.log(phoneBookABC);

let printPhoneBook = (contacts) => {
  console.log(contacts);
};

printPhoneBook(phoneBookABC);

printPhoneBook(phoneBookDEF);

let phoneBookABCDEF = new Map([
  ...phoneBookABC.entries(),
  ...phoneBookDEF.entries(),
]);

printPhoneBook(phoneBookABCDEF);
