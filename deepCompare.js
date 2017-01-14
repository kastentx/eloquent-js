// Deep Comparison
// a function that determines if two things are equal
// if necessary, a deep comparison is performed

var deepCompare = function(thingOne, thingTwo) {
  if (typeof(thingOne) !== typeof(thingTwo)) {
    console.log('A ' + typeof(thingOne) + ' cannot be equal to a ' + typeof(thingTwo) + '.\n');
    return false;
  } else if (typeof(thingOne) === 'object') {
    if (thingOne === null || thingTwo === null) {
      return 'error - null value';
    } else {
      for (property in thingOne) {
        if (deepCompare(thingOne[property], thingTwo[property]) !== true) {
          console.log('The ' + property + ' property is not equal in these objects.\n');
          return false;
        }
      } 
      return true;
    }
  } else if (thingOne === thingTwo) {
    console.log(thingOne + ' is equal to ' + thingTwo + '\n');
    return true;
  } else if (thingOne !== thingTwo) {
    console.log(thingOne + ' is not equal to ' + thingTwo + '\n');
    return false;
  }

}

console.log('ANSWER: ' + deepCompare({first: 'hello', second: 'gooby'}, {first: 'hello', second: 'goodbye'}));
console.log('ANSWER: ' + deepCompare({first: 'hello', second: 'goodbye'}, {first: 'hello', second: 'goodbye'}));
console.log('ANSWER: ' + deepCompare({first: 'hello', second: 'gooby'}, {first: 'hello'}));
console.log('ANSWER: ' + deepCompare(4, 4));
console.log('ANSWER: ' + deepCompare(4, 420));
console.log('ANSWER: ' + deepCompare(4, '4'));
console.log('ANSWER: ' + deepCompare('fnfn', 'erew'));
console.log('ANSWER: ' + deepCompare('fnfn', 'fnfn'));
