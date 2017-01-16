// Vector
// creating a Vector constructor with plus and minus
// as well as a length 'getter' property


var Vector = function(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(addVector) {
  // add the vector to this one
  return new Vector(
    this.x + addVector.x,
    this.y + addVector.y
  )
}

Vector.prototype.minus = function(subVector) {
  // subtract the vector from this one
  return new Vector(
    this.x - subVector.x,
    this.y - subVector.y
  )
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function() { return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)); }
});

var vectorA = new Vector(1, 1);
var vectorB = new Vector(2, 3);

console.log('Vector A:\nx: ' + vectorA.x + '\ny: ' + vectorA.y);
console.log('Vector B:\nx: ' + vectorB.x + '\ny: ' + vectorB.y);

var vectorC = vectorA.plus(vectorB);
console.log('A + B = C\nx: ' + vectorC.x + '\ny: ' + vectorC.y);

console.log('\nLength of A: ' + vectorA.length + '.')
console.log('\nLength of B: ' + vectorB.length + '.')
console.log('\nLength of C: ' + vectorC.length + '.')
