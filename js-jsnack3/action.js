/* ASSIGNMENT
A partire da un array di oggetti,
creare una copia dell'array
e aggiungere ai singoli elementi dell'array una nuova proprietà "position"
che contiene una lettera casuale.
*/

$(document).ready(function () {
  // Creating an array of objects
  var movies = [
    {
      'title' : 'Fight Club',
      'director' : 'David Fincher',
      'year': '1999',
    },
    {
      'title' : 'Inception',
      'director' : 'Christopher Nolan',
      'year': '2010',
    },
    {
      'title' : 'Shutter Island',
      'director' : 'Martin Scorsese',
      'year': '2010',
    },
    {
      'title' : 'Into The Wild',
      'director' : 'Sean Penn',
      'year': '2007',
    },
    {
      'title' : 'Vanilla Sky',
      'director' : 'Cameron Crowe',
      'year': '2001',
    },
    {
      'title' : 'Devil\'s Advocate',
      'director' : 'Taylor Hackford',
      'year': '1997',
    },
    {
      'title' : 'Eternal Sunshine of the Spotless Mind',
      'director' : 'Michel Gondry',
      'year': '2004',
    },
    {
      'title' : 'Number 23',
      'director' : 'Joel Schumacher',
      'year': '2007',
    },
  ];
  console.log('The array of movies is:' , movies);

  // Creating a copy of the movies array
  var movies_copy = movies;
  console.log('The copy of the movies array is:', movies_copy);
  console.log('');

  // Scanning the copy of the movies array to add the new property and value
  for (var i = 0; i < movies_copy.length; i++) {
    // Generating random letter (with function)
    var random_letter = getRndCharacter();
    console.log('Random letter: ' + random_letter);
    // Adding "position : random letter" in each object (key : value)
    movies_copy[i].position = random_letter;
    // movies_copy[i]['position'] = random_letter;
  }
  console.log('');
  console.log('The copy of the movies array updated with the new property \'position\' and values is: ' , movies_copy);
});

// ------------------------------- FUNCTIONS -------------------------------

// Generating random letter
function getRndCharacter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
