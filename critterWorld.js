// Constants
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

// Helper Functions
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function elementFromChar(legend, ch) {
  if (ch == ' ') {
    return null;
  }
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}
function charFromElement(element) {
  if (element == null) {
    return ' ';
  } else {
    return element.originChar
  }
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

// Bouncing Critter
function BouncingCritter() {
  this.direction = randomElement(directionNames);
}
BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != ' ') {
    this.direction = view.find(' ') || 's';
  }
  return {type: 'move', direction: this.direction}
}

// World Object
function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for(var x = 0; x < line.length; x++) {
      grid.set(new Vector(x, y),
               elementFromChar(legend, line[x]));
    }
  });
}
World.prototype.toString = function() {
  var output = '';
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += charFromElement(element);
    }
    output += '\n';
  }
  return output;
}

// Wall
function Wall() {}

// TEST CODE TO BE RUN
var world = new World(plan, 
  {
    '#': Wall,
    'o': BouncingCritter 
  }
);

console.log(world.toString());
