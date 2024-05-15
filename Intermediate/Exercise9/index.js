/* 9. Given the below salaries object, perform the following tasks.

a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
b) Write a function topEarner(salaries) that calculates and returns the name of the person
earning the highest salary */

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salaries) {
  let total = 0;
  for (let salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}

console.log(sumSalaries(salaries));

function topEarner(salaries) {
  let topSalary = 0;
  let topEarnerName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > topSalary) {
      topSalary = salary;
      topEarnerName = name;
    }
  }

  return topEarnerName;
}

console.log(topEarner(salaries));
