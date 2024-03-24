const baseURL = "whatever localhost is";

document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(".searchbox");
  const button = document.querySelector("button");
  const addToTable = document.querySelector(".addbutton");
  const removeFromTable = document.querySelector("td:last-child");

  button.addEventListener("click", () => {
    fetch(baseURL + "?");
  });
});

/**
 * create a new table row in the table
 */

function mapRow(food) {
  const tr = document.createElement("tr");
  const name = document.createElement("td");
  const sugars = document.createElement("td");
  const close = document.createElement("td");

  name.innerText = food.name;
  sugars.innerText = food.sugars;
  close.innerText = "Remove Item";

  return tr;
}

/**
 * search through sugar counter db
 *
 */

document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector(".search > input");

  searchBox.addEventListener("keyup", (search) => {
    // need to use query url here and show it as an option
  });
});

/**
 * add close to button on hover
 */
