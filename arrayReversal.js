// Array Reversal
// two functions - one that returns a reversed array
// and one that reverses the original array

var reverseArray = function(array) {
  var lastPos = array.length - 1;
  var reversed = [];
  for (var i = 0; i < array.length; i++) {
    reversed[i] = array[lastPos-i];
  }
  
  return reversed;
}

var reverseArrayInPlace = function(array) {
  var length = array.length;
  var temp = [];
  for (var i = 0; i < length; i++) {
    temp.push(array.pop())
  }
  for (var j = 0; j < length; j++) {
    array[j] = temp[j];
  }

  return array;
}

var myArray = [1,2,3,4,5,6];

console.log('Original Array: ' + myArray);
console.log('New Array: ' + reverseArray(myArray));
console.log('Original Array: ' + myArray);

console.log('Original Array: ' + myArray);
console.log('New Array: ' + reverseArrayInPlace(myArray));
console.log('Original Array: ' + myArray);


