function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups) {
      groups[groupName].push(element);
    } else {
      groups[groupName] = [element];
    }
  })
  return groups;
}

function average(array) {
  function plus(a, b) {return a + b;}
  return array.reduce(plus)/array.length;
}

var byCentury = groupBy(JSON.parse(require('./ancestry.js')), function(person) {
  return Math.ceil(person.died/100)
});

for (century in byCentury) {
  var ages = byCentury[century].map(function(person) { return person.died - person.born })
  console.log('Century: ' + century + ' Avg Age: ' + average(ages));
}
