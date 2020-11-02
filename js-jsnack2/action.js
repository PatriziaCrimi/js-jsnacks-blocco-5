/* ASSIGNMENT
Creare un array di nomi
e chiedere all'utente due numeri.
Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.
*/

$(document).ready(function () {
  // Creating an array of names
  var names_list = ['William', 'Robert', 'Anne', 'Christian', 'Josephine', 'Karleen', 'Astrid', 'Clark', 'Judith'];
  console.log('The array containing the names is: ', names_list)
  // Entering two numbers from the user
  var first_num = parseInt(prompt('Please enter the first number.'));
  var second_num = parseInt(prompt('Now enter the second number.'));
  console.log('The two numbers entered by the user are:', first_num, 'and', second_num, '.');
  // Checking highest and lowest number
  if (first_num > second_num) {
    var max_num = first_num;
    var min_num = second_num -1;
  } else {
    var max_num = second_num;
    var min_num = first_num -1;
  }
  // Creating the new array containing the names included in the user's numbers range
  var names_final_array = [];
  for (var i = min_num; i < max_num; i++) {
    names_final_array.push(names_list[i]);
  }
console.log('The new array containing the names included in the user\'s numbers range is: ', names_final_array);
});
