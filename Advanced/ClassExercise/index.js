async function preparePizza() {
  console.log("Started preparing pizza...");
}

async function madeTheBase() {
  console.log("Made the base");
}

async function addedTheSauceAndCheese() {
  console.log("Added the sauce and cheese");
}

async function addedThePizzaToppings() {
  console.log("Added the pizza toppings");
}

async function cookedThePizza() {
  console.log("Cooked the pizza");
}

async function pizzaIsReady() {
  console.log("Pizza is ready");
}

async function makePizza() {
  await preparePizza();
  await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for 0.5 second

  await madeTheBase();
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second

  await addedTheSauceAndCheese();
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds

  await addedThePizzaToppings();
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds

  await cookedThePizza();
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Wait for 1.5 seconds

  await pizzaIsReady();
}

makePizza();
