// Range
// this function takes two arguments and returns an array 
// containing all the numbers from 'start' to 'end' (inclusive)
// **optional** third argument specifies the correct step size

function range(start, end, step) {
  var numbersInRange = [];
  var stepSize = Math.abs(step || 1)
  var i = start;
  
  if (start < end) {
    while (i <= end) {
      numbersInRange.push(i);
      i += stepSize;
    }
  } else if (start > end) {
    while (i >= end) {
      numbersInRange.push(i);
      i -= stepSize;
    }
  } else if (start == end) {
    numbersInRange.push(i); 
  }
  
  return numbersInRange;
}

console.log(range(Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4])))
