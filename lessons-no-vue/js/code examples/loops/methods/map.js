let names = [
  'Nicolas',
  'cudiano',
  'danny',
  'famid',
  'alex',
];

names.map(function (name) {
  return name;
})

let newNames = names.map(returnName);

function returnName(name) {
  return name;
}

console.log('- newNames -', newNames);
