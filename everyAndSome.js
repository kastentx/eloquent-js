// Every and Some
// functions that take an array as an argument
// and return whether a condition holds for every or some elements
// in the array

function every(array, test) {
  var outcome = true;

  array.forEach(function(element){
    if(!test(element)) {
      outcome = false;
    }
  });
  return outcome;
}

function some(array, test) {
  var outcome = false;

  array.forEach(function(element){
    if(test(element)) {
      outcome = true;
    }
  });
  return outcome;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
