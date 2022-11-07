let string = 'I love coffee (No) No';
let pattern = /No/gm;

let result = string.match(pattern);
console.log('- result -', result);

let newString = string.replaceAll(pattern, '');
console.log('- string -', newString);
