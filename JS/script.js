const baseURL = "http://localhost:8080/food/search?name=";
let foodItems = [
  {
    name: "test",
    sugar: 0,
  },
  {
    name: "test2",
    sugar: 3,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  displayFoods(foodItems);

  // might need most of these sooner or later
  const searchBar = document.querySelector(".searchbox");
  const button = document.querySelector("button");
  const addToTable = document.querySelector(".addbutton");
  const removeFromTable = document.querySelector("td:last-child");
  const submitter = document.getElementById("submitter");

  submitter.addEventListener("click", () => {
    let entry = userEntry();
    foodItems.push(entry);
    displayFoods(foodItems);
  });
});

/**
 * show all foods in the foodItems array and remove old ones
 */
function displayFoods() {
  let itemTable = document.querySelector("table");
  let rowCount = itemTable.rows.length;

  for (let i = rowCount - 1; i > 0; i--) {
    itemTable.deleteRow(i);
  }

  foodItems.forEach((item) => {
    displayItem(item);
  });
}

/**
 * create a new table row in the table from form or search bar
  Html Template
 *    <template id="row-template">
            <tr> 
              <th>Click the "Remove Item" box to close!</th>
              <td>0g</td>
              <td>Remove Item</td>
            </tr>
      </template>
*/
function displayItem(item) {
  let itemTemplate = document.getElementById("row-template");
  let itemTableBody = document.getElementById("table-body");

  let templateContent = itemTemplate.content.cloneNode(true);
  templateContent.querySelector(".food-name").innerText = item.name;
  if (item.sugar == 1) {
    templateContent.querySelector(".sugar-in-grams").innerText =
      item.sugar + " gram of sugar";
  } else {
    templateContent.querySelector(".sugar-in-grams").innerText =
      item.sugar + " grams of sugar";
  }

  templateContent.querySelector(".removebutton").innerText = "Remove";

  itemTableBody.appendChild(templateContent);
}

/**
 * search through sugar counter db
 *
 */

/**
 * turn user created form into json item for the array
 */
function userEntry() {
  // const formData = new FormData(document.querySelector(".item-form"));
  // const json = {};

  // formData.forEach((value, key) => {
  //   json[key] = value;
  // });
  const name = document.getElementById("name");
  const sugars = document.getElementById("sugars");

  const json = {};

  json.name = name.value;
  json.sugar = sugars.value;

  return json;
}
