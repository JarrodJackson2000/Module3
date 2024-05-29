/* 10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:

a) Print the total number of minutes that have passed so far today
b) Print the total number of seconds that have passed so far today
c) Calculate and print your age as: 'I am x years, y months and z days old'
d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
of days in between the two given dates. */

const today = new Date();
console.log("Current time is " + today);
console.log(today.getHours() + " hours have passed so far today");

function totalMinutes(today) {
  let zeroDay = new Date();
  zeroDay.setHours(0, 0, 0, 0);
  let result = (today - zeroDay) / (1000 * 60);
  return result.toFixed(2) + " minutes have passed so far today";
}

console.log(totalMinutes(today));

function totalSeconds(today) {
  let zeroDay = new Date();
  zeroDay.setHours(0, 0, 0, 0);
  let result = (today - zeroDay) / 1000;
  return result + " seconds have passed so far today";
}

console.log(totalSeconds(today));

let myBirthday = new Date("2000-12-20");

console.log(myBirthday);

let years = today.getFullYear() - myBirthday.getFullYear();
let months = today.getMonth() - myBirthday.getMonth();
let days = today.getDate() - myBirthday.getDate();

if (months < 0) {
  years--;
  months = (Math.abs(months) + 12) % 12;
}

if (days < 0) {
  months--;
  days = (Math.abs(days) + 30) % 30;
}

console.log(`I am ${years} years, ${months} months and ${days} days old.`);

//This works as expected, but there is a way to do this with less code.
//Since date1 and date2 are both Date objects, you can get the milliseconds since the Unix epoch
//with dateObject.getTime(). With this you can get the millisecond difference between the two dates,
//and then divide the millisecond difference by 1000 * 60 * 60 * 24 to get the difference in days.
//You can then use Math.abs to make sure the difference is a positive number, and Math.floor
//to make the result a whole number. Doing it this way would also remove the assumption that
//a month is 30 days long, making the result more accurate.
//For example:
/*
function daysInBetween(date1, date2) {
  const time1 = date1.getTime()
  const time2 = date2.getTime()
  const difference = time1 - time2
  const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24)
  return `${Math.abs(daysDifference)} days between these two dates`
}
*/
function daysInBetween(date1, date2) {
  let result = "";
  let resultYears = Math.abs(date1.getFullYear() - date2.getFullYear());
  let finalResultYears = resultYears * 365;
  let resultMonths = Math.abs(date1.getMonth() - date2.getMonth());
  let finalResultMonths = resultMonths * 30;
  let resultDays = Math.abs(date1.getDate() - date2.getDate());
  return (result =
    finalResultMonths +
    finalResultYears +
    resultDays +
    " days between these two dates");
}

console.log(daysInBetween(today, myBirthday));
