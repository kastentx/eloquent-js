// Lists
// prepend adds an element to the beginning of a list
// printList prints out a list
// nth returns the nth value in a list, or undefined
// arrayToList makes a list out of an array
// listToArray makes an array out of a list

var prepend = function(element, list) {
  if (list.value === undefined) {
    list.value = element;
  } else if (list.rest === undefined) {
    list.rest = {};
    list.rest.value = list.value;
    list.value = element;
  } else {
    prepend(list.value, list.rest);
    list.value = element;
  }
  return list;
}

var nth = function(position, list) {
  var distToTarget = position - 1;
  var list = (list || {});

  if (distToTarget === 0) {
    return list.value;
  } else {
    return nth(distToTarget, list.rest);
  }
}

var printList = function(list, count) {
  var position = (count || 1);

  if (position === 1) {
    console.log('\n' + '**** PRINT LIST ****\n');
  }
  if (list !== undefined && list.value !== undefined) {
    console.log('Element ' + position + ': ' + list.value + '\n');
    position++;
    printList(list.rest, position);
  } else {
    console.log('********************\n');
  }
}

var listToArray= function(list) {
  var newArray = [];
  var arrayPos = 0;
  var listPos = 1; 
  while (nth(listPos, list) !== undefined) {
    newArray[arrayPos] = nth(listPos, list);
    arrayPos++;
    listPos++;
  }
  return newArray;
}

var arrayToList = function(array) {
  var newList = {};
  
  for (var i = (array.length-1); i >= 0; i--) {
    prepend(array[i], newList);
  }
  return newList;
}

// CODE TO BE EXECUTED - BELOW THIS LINE

var myArray = [1, 2, 3];

console.log('MyArray: ' + myArray);
var myList = arrayToList(myArray);
printList(myList);

console.log('3rd element: ' + nth(3, myList));
console.log('4th element: ' + nth(4, myList));

console.log('converting list to array...');
var myNewArray = listToArray(myList);
console.log('MyNewArray: ' + myNewArray);
