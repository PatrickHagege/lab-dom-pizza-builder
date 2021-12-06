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
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
      oneSauce.classList.add("sauce-white");
    } else {
      oneSauce.style.visibility = 'hidden';
      oneSauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((glutenFree) => {
    if (state.glutenFreeCrust) {
      glutenFree.classList.add("crust-gluten-free");
    } else {
      glutenFree.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const asideList = document.querySelector("aside.panel.price");
  let boldPrice = document.querySelector("aside.panel.price > b");
  let ingredientList = document.querySelector("aside.panel.price > ul");
  let strongPrice = document.querySelector("aside.panel.price > strong");
  
  //asideList.removeChild(boldPrice);
  //asideList.removeChild(ingredientList);
  //asideList.removeChild(strongPrice);

  // boldPrice = document.createElement("b");
  // let cheesePizza = document.createTextNode(`$${basePrice} cheese pizza`);
  // boldPrice.appendChild(cheesePizza);
  // asideList.appendChild(boldPrice);

  // ingredientList = document.createElement("ul");
  // let mushroomsListElement = document.createElement("li");
  // let mushroomsContent = document.createTextNode(`$${ingredients.mushrooms.price} mushrooms`);
  // mushroomsListElement.appendChild(mushroomsContent);
  // ingredientList.appendChild(mushroomsListElement)
  // asideList.appendChild(ingredientList);

  // asideList.innerHTML=`<h2>Your pizza's price</h2>
  // <b>$${basePrice} cheese pizza</b>
  // <ul>
  //   <li>$${ingredients.pepperoni.price} pepperoni</li>
  //   <li>$${ingredients.mushrooms.price} mushrooms</li>
  //   <li>$${ingredients.greenPeppers.price} green peppers</li>
  //   <li>$${ingredients.whiteSauce.price} white sauce</li>
  //   <li>$${ingredients.glutenFreeCrust.price} gluten-free crust</li>
  // </ul>
  // <strong>$${totalPrice}</strong>`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
const btnPep = document.querySelector('.btn.btn-pepperoni')
btnPep.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  this.classList.toggle('active');
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
const btnMush = document.querySelector('.btn.btn-mushrooms');
btnMush.addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  this.classList.toggle('active');
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
const btnGreenPep = document.querySelector('.btn.btn-green-peppers');
btnGreenPep.addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  this.classList.toggle('active');
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
const btnSauce = document.querySelector('.btn.btn-sauce');
btnSauce.addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  this.classList.toggle('active');
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
const btnGluten = document.querySelector('.btn.btn-crust');
btnGluten.addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  this.classList.toggle('active');
  renderEverything();
});