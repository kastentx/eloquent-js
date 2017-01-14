// Sum
// this function takes an array of numbers
// and returns the sum of these numbers

function range(start, end) {
  var numbersInRange = [];
  for (var i = start; i <= end; i++) {
    numbersInRange.push(Number(i));
  }
  return numbersInRange;
}

function sum(array) {
  var total = 0;
  for (num in array) {
    total += array[num];
  }
  return total;
}

console.log(sum(range(process.argv[2], process.argv[3])))
