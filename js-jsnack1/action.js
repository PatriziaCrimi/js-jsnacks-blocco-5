/* ASSIGNMENT
Creare un array di oggetti: ogni oggetto descriverà una bici da corsa
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

$(document).ready(function () {
  // Creating the racing bikes array (array of objects)
  var racing_bikes = [
    {
      'name' : 'Alchemy Atlas',
      'weight' : 8, //Kilograms
    },
    {
      'name' : 'ARC8 Escapee',
      'weight' : 7, //Kilograms
    },
    {
      'name' : 'Argon 18',
      'weight' : 7.8//Kilograms
    },
    {
      'name' : 'Basso Diamante',
      'weight' : 10, //Kilograms
    },
    {
      'name' : 'BH Ultralight',
      'weight' : 6.9, //Kilograms
    },
    {
      'name' : 'Bmc Teammachine',
      'weight' : 9.5//Kilograms
    },
    {
      'name' : 'Emme4 Superlight',
      'weight' : 6.8, //Kilograms
    },
  ]
  console.log('The array of racing bikes is: ' , racing_bikes);

  // Scanning the array of bikes
  var highest_weight = racing_bikes[0].weight;
  console.log('First bike weight: ' , highest_weight);
  for (var i = 1; i < racing_bikes.length; i++) {
    var current_bike_weight = racing_bikes[i].weight;
    console.log('Current bike weight: ', current_bike_weight);
    if (current_bike_weight > highest_weight) {
      highest_weight = current_bike_weight;
    }
    /*
    // Scanning the single objects within the array
    for (var key in racing_bikes[i]) {
    }
    */
  }
  console.log('The highest bike weight is: ' , highest_weight);
});
