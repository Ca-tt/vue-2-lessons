/* ЭТАП 1. СОЗДАНИЕ ПРОГРАММЫ */;

// Этап 1: рандом
let sum = Math.floor(Math.random() * 1000);
console.log('- Клиент скупился на -', sum);

// Этап 2: коэффициент навара
let kof = 0;

if (sum > 250) {
  kof = 0.05;
  sum += sum * kof;
}

if (sum > 500) {
  kof = 0.1;
  sum += sum * kof;
}

console.log('- kof после if -', kof);
console.log('- sum после -', sum);

// Этап 3. Два числа после запятых

// sum = sum.toFixed(2);

// console.log('- sum с копейками -', sum);
// console.log('- тип sum после toFixed -', typeof sum);
// sum = Number(sum);
// console.log('- sum становится числом -', sum);

/* ==================== */;


/* ЭТАП 2. РЕФАКТОР КОДА */;

// function getRandom(min, max) {
//   return min + max;
// }

// let random = getRandom(100, 200);

// function calculate() {

//   let koefficient = 0;

//   if (random > 50) {
//     koefficient = 0.05;
//   }

//   else if (random > 300) {
//     koefficient = 0.1;
//   }

//   // four options
//   let round = getCalculation(random, koefficient);
//   let roundWithChange = getCalculation(random, koefficient);
//   let fivePercent = getCalculation(random, koefficient);
//   let tenPercent = getCalculation(random, koefficient);

//   log(random, round, roundWithChange, fivePercent, tenPercent);
// }

// function getCalculation(sum, koefficient) {
//   return sum * koefficient;
// }

// function log(sum, round, roundWithChange, fivePercent, tenPercent) {
//   console.log(`
//     "Сумма": ${sum},
//     "Скругление": ${round},
//     "Скругление с копейками": ${roundWithChange},
//     "5%": ${fivePercent},
//     "10%": ${tenPercent},
//   `);
// }