function makeCounter() {
  let count = 0;
  return count++;
}

let counter1 = makeCounter();
let counter2 = makeCounter();

// console.log('- counter1 -', counter1);
// console.log('- counter1 -', counter1);

// console.log('- counter2 -', counter2);
// console.log('- counter2 -', counter2);
// console.log('- counter2 -', counter2);

function closure() {
  let closedValue = 1;
  let delta = 10;

  return function close() {
    return closedValue += delta;
  }
}

// new instance saves local copy of object = function calculations
let newVar = closure();
let newVar1 = closure();

// console.log('- newVar -', newVar());
// console.log('- newVar -', newVar());
// console.log('- newVar -', newVar());

// console.log('- newVar -', newVar1());
// console.log('- newVar -', newVar1());

function makeAdder(x) {
  // console.log('- x -', x);
  // console.log('- y -', y);
  
  return function (y) {
    console.log('- x -', x);
    console.log('- y -', y);
    return x + y;
  };
}

let addNumber = makeAdder(5);
// let addNumber = makeAdder(10);

let ten = addNumber(5);
console.log('- ten -', ten);


// console.log('- result -', addNumber(5));
// console.log('- result -', addNumber(10));
// result = makeAdder(10);
// console.log('- result -', addNumber(15));


// console.log('- makeAdder(5) -', makeAdder(5));


// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

