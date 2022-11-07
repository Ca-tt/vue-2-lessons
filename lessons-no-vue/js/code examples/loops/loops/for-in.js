// /* ЦИКЛ FOR-IN С ОБЪЕКТАМИ И МАССИВАМИ */;

// let numbers = [10, 100, 1000, 10000];

// let emails = {
//   damir: 'damir@gmail.com',
//   ruslan: 'ruslan@gmail.com',
//   timur: 'timur@gmail.com',
// };

// /* С МАССИВАМИ */;

// for (let number in numbers) {
//   console.log('- number -', number);
//   console.log('- numbers[number] -', numbers[number]);
// }

// /* С ОБЪЕКТАМИ */;

// for (const key in emails) {
//   console.log('- key -', key);
//   console.log('- emails.key -', emails.key);
// }

// /* ============== */;



// const fridge = {
//   food: {
//     sausage: "Колбаса 0.5кг натуральная сырокопчёная",
//     bread: "Прибалтийский чёрный",
//     butter: true,
//     water: "Кока-кола",
//     beer: false,
//     pureWaterBottles: 23,
//   },
//   freezer: {
//     cutlets: 28,
//     iceCream: 'Белая Бярёза',
//     meat: 'Свинная подчерёвина, 3кг',
//   },
//   food1: {},
//   food2: {},
//   freezer1: {},
//   freezer2: {},
// };

// for (const key in fridge) {
//   for (const food in fridge[key]) {
//     console.log('- fridge[key][food] -', fridge[key][food]);
//   }
// }

// function calculation(ingridient1, ingridient2) {

//   return juice;
// }

// calculation('яблоко', 'мандаринку');

// let juice = calculation('яблоко', 'мандаринку');
