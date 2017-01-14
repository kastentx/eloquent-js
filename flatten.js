// Flatten
// flattens an array of arrays into one long array

function flatten(array) {
  return array.reduce(function(a,b) { return a.concat(b) })
}

var myArray = [ [1, 2, 3], ['a', 'b', 'c'], ['X', 'Y', 'Z'] ];

console.log(flatten(myArray));
