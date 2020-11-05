/* ASSIGNMENT
Creare un array di oggetti: ogni oggetto descriverà una bici da corsa
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

$(document).ready(function () {
  // Creating the racing bikes array (array of objects)
  var min_weight = 3;
  var max_weight = 10;
  var racing_bikes = [
    {
      'name' : 'Alchemy Atlas',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'ARC8 Escapee',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'Argon 18',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'Basso Diamante',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'BH Ultralight',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'Bmc Teammachine',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'Emme4 Superlight',
      'weight' :getRandomNumber(min_weight, max_weight), // Kilograms
    },
  ]
  console.log('The array of racing bikes is: ' , racing_bikes);
  console.log('');


  // ---------------- Finding out the bike lowest weight ----------------

  // Assigning the lowest weight to the first bike
  var lowest_weight = racing_bikes[0].weight;
  var lowest_weight_bike;
  console.log(racing_bikes[0].name + ':' , lowest_weight , 'kilograms.');
  // Scanning the array of bikes to compare the weights
  for (let i = 1; i < racing_bikes.length; i++) {
    let current_weight = racing_bikes[i].weight;
    console.log(racing_bikes[i].name + ':' , current_weight, 'kilograms.');
    // Finding the lowest weight
    if (current_weight < lowest_weight) {
      lowest_weight = current_weight;
      lowest_weight_bike = racing_bikes[i].name;
    }
  }
  console.log('');
  // Check for same weight bikes (only if their weight is the lowest weight)
  var same_weight_bikes = [];
  // Scanning the array of bikes to look for same lowest weight bikes
  for (let i = 0; i < racing_bikes.length; i++) {
    if (lowest_weight === racing_bikes[i].weight) {
      same_weight_bikes.push(racing_bikes[i].name);
    }
  }
  // Printing on screen the results
  if (same_weight_bikes.length > 1) {
    // If the array of same weight bikes has more than one element, there are more bikes sharing the same lowest weight
    console.log('There are more bikes sharing the lowest weight of', lowest_weight ,'. They are:' , same_weight_bikes , '.');
    // Printing on screen HTML
    $('#results > p').text('There are more bikes sharing the lowest weight of' + lowest_weight + '. They are: ' + same_weight_bikes + '.');
  } else {
    // If the array of same weight bikes has only one element, there is only one bike with that lowest weight
    console.log('The bike with the lowest weight is: ' + lowest_weight_bike + ' weighing' , lowest_weight, 'kilograms.');
    // Printing on screen HTML
    $('#results > p').text('The bike with the lowest weight is: ' + lowest_weight_bike + ' weighing ' + lowest_weight + ' kilograms.');
  }
});

// ------------------------------ FUNCTIONS ------------------------------

// Generating random number
function getRandomNumber(min, max) {
  let multiplier = 100; // rounding to two figures
  return Math.round((Math.random() * (max - min + 1) + min) * multiplier) / multiplier;
}
