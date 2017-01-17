var plan =
  ['############################',
   '#      #    #      o      ##',
   '#                          #',
   '#          #####           #',
   '##         #   #    ##     #',
   '###           ##     #     #',
   '#           ###      #     #',
   '#  ####                    #',
   '#  ##        o             #',
   '# o #          o       ### #',
   '#   #                      #',
   '############################'];

var directionNames = 'n ne e se s sw w nw'.split(' ');

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Vector
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(addVector) {
  return new Vector(
    this.x + addVector.x,
    this.y + addVector.y
  )
}
Vector.prototype.minus = function(subVector) {
  return new Vector(
    this.x - subVector.x,
    this.y - subVector.y
  )
}
Object.defineProperty(Vector.prototype, 'length', {
  get: function() { return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)); }
});

// Grid
function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}
Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width &&
         vector.y >= 0 && vector.y < this.height;
}
Grid.prototype.get = function(vector) {
  return this.space[vector.x + vector.y * this.width];
}
Grid.prototype.set = function(vector, value) {
  this.space[vector.x + vector.y * this.width] = value; 
}

// TEST CODE TO BE RUN
var myGrid = new Grid(2,2);
myGrid.set(new Vector(0,1),'X');
console.log(myGrid.get(new Vector(0,0)));
console.log(myGrid.get(new Vector(0,1)));
