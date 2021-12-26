// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

let total = basePrice;

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}
  // Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
  const btnPep = document.querySelector('.btn.btn-pepperoni');
  btnPep.addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

  // Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
  const btnMush = document.querySelector('.btn.btn-mushrooms');
  btnMush.addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
  // Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
  const btnGreenPep = document.querySelector('.btn.btn-green-peppers');
  btnGreenPep.addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
  // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  const btnSauce = document.querySelector('.btn.btn-sauce');
  btnSauce.addEventListener('click', function () {
    state.whiteSauce = !state.whiteSauce;

    renderEverything();
  });
  // Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  const btnGluten = document.querySelector('.btn.btn-crust');
  btnGluten.addEventListener('click', function () {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
  });

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.style.visibility = 'visible';
    sauce.classList.add("sauce-white");
  } else {
    sauce.style.visibility = 'hidden';
    sauce.classList.remove("sauce-white");
  };
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  };
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  (state.pepperoni) ? btnPep.classList.add('active') : btnPep.classList.remove('active');
  (state.mushrooms) ? btnMush.classList.add('active') : btnMush.classList.remove('active');
  (state.greenPeppers) ? btnGreenPep.classList.add('active') : btnGreenPep.classList.remove('active');
  (state.whiteSauce) ? btnSauce.classList.add('active') : btnSauce.classList.remove('active');
  (state.btnGluten) ? btnGluten.classList.add('active') : btnGluten.classList.remove('active');
}

function renderPrice() {
  // // Iteration 4: change the HTML of `<aside class="panel price">`
  const asideList = document.querySelector("aside");
  let boldPrice = document.querySelector("aside > b");
  let ingredientListElements = document.querySelectorAll("aside > ul > li");
  let ingredientList = document.querySelector("aside ul");
  let strongPrice = document.querySelector("strong");
  boldPrice.remove();
  for (let index = 0; index < ingredientListElements.length; index++) {
    const element = ingredientListElements[index];
    element.remove();
  }
  ingredientList.remove();
  strongPrice.remove();
  ingredientList = document.createElement("ul");
  asideList.appendChild(ingredientList);
  boldPrice = document.createElement("b");
  let cheesePizza = document.createTextNode(`$${basePrice} cheese pizza`);
  boldPrice.appendChild(cheesePizza);
  asideList.appendChild(boldPrice);

  ingredientList = document.createElement("ul");
  for (let element in ingredients) {
      const ingredient = ingredients[element];
      console.log(state[element]);
      if (state[element]) {
      let listElement = document.createElement("li");
      let elementContent = document.createTextNode(`$${ingredient.price} ${ingredient.name}`);
      console.log("element :", element,"state[element]", state[element]);
      total += ingredient.price;
      listElement.appendChild(elementContent);
      ingredientList.appendChild(listElement);
      }

  }
  asideList.appendChild(ingredientList);
  let totalContainer = document.createElement("strong");
  totalContainer.textContent = `$${total}`;
  asideList.appendChild(ingredientList);
  asideList.appendChild(totalContainer);
  total=basePrice;
  }

  renderEverything();

