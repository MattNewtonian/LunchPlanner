const MEAL_COUNT = 31;



var mains = ["Chicken sammich", " Lasagna", " Plain Pizza", " Fried Beefcake", " Soylent Shake"];
var sides = ["Freedom fries", " Apple slices", " Tater tots", " Sad salad", " Hard-boiled egg"];
var desserts = ["Rice Pudding", " Gluten-free cookie", " Cheesecake Delux", " Sundae", " Graham Crackers"];

document.getElementById('mains').innerHTML = mains[0] + "," + mains[1] + "," + mains[2] + "," + mains[3] + "," + mains[4];
document.getElementById('sides').innerHTML = sides[0] + "," + sides[1] + "," + sides[2] + "," + sides[3] + "," + sides[4];
document.getElementById('desserts').innerHTML = desserts[0] + "," + desserts[1] + "," + desserts[2] + "," + desserts[3] + "," + desserts[4];
const meals = [];

const mealIdentifiers = [];


while (meals.length < MEAL_COUNT) {

  let mainId = Math.floor(Math.random() * mains.length);
  let sideId = Math.floor(Math.random() * sides.length);
  let dessertId = Math.floor(Math.random() * desserts.length);
  let mealId = `${mainId}${sideId}${dessertId}`;
  mealIdentifiers.push(mealId);

  if (mealIdentifiers.includes()) {
    continue;
  }

  meals.push({

    main: mains[mainId],
    side: sides[sideId],
    dessert: desserts[dessertId]
  });
}

console.table(meals);

document.getElementById("mealsDiv").innerHTML = "";



var wrapper = $('#mealsDiv'),
  container;
for (var key in meals) {
  container = $('<div id="mealsDiv" class="container"></div>');
  wrapper.append(container);

  container.append('<div class="date">' + (+key + 1) + '</div>');
  container.append('<div class="main">' + meals[key].main + '</div>');
  container.append('<div class="side">' + meals[key].side + '</div>');
  container.append('<div class="dessert">' + meals[key].dessert + '</div>');
}
