const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
"use strict";
// change code below this line

const [a, b, ...arr] = list;

// change code above this line
return arr;
}
const arr = removeFirstTwo(source);

console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];



//Utilice la asignación de desestructuración con el parámetro rest para realizar un efectivo, de Array.prototype.slice() modo que arr sea un subconjunto del conjunto original source con los dos primeros elementos omitidos.

//Original:
//const source = [1,2,3,4,5,6,7,8,9,10];
//function removeFirstTwo(list) {
// Only change code below this line
//const arr = list; // Change this line
// Only change code above this line
//return arr;
//}
//const arr = removeFirstTwo(source);