/* 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator. */

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// Without conditional operator

function camelCase(cssProp) {
  let camelCased = "";
  let capitalizeNext = false;

  for (const char of cssProp) {
    if (char === "-") {
      capitalizeNext = true;
    } else {
      if (capitalizeNext) {
        camelCased += char.toUpperCase();
      } else {
        camelCased += char;
      }
      capitalizeNext = false;
    }
  }

  return camelCased;
}

// With conditional operator

function camelCase(cssProp) {
  let camelCased = "";
  let capitalizeNext = false;

  for (const char of cssProp) {
    if (char === "-") {
      capitalizeNext = true;
    } else {
      camelCased += capitalizeNext ? char.toUpperCase() : char;
      capitalizeNext = false;
    }
  }

  return camelCased;
}
