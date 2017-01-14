var ancestry = JSON.parse(require('./ancestry.js')); 
var byName = {};
var ageDiffs = [];

ancestry.forEach(function(person){
  byName[person.name] = person;
});

for(person in byName){
  if(byName[byName[person].mother]){
    ageDiffs.push(byName[byName[person].mother].born - byName[person].born);
  }
}

var avgAgeDiff = ageDiffs.reduce(function(a,b){
  return a + b;
}) / ageDiffs.length;

console.log('Average Age difference between Mother/Child: ' + avgAgeDiff);
