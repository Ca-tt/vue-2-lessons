/* ЦИКЛ FOR-OF С ОБЪЕКТАМИ И МАССИВАМИ */;

let numbers = [10, 100, 1000, 10000];

let emails = {
  damir: 'damir@gmail.com',
  ruslan: 'ruslan@gmail.com',
  timur: 'timur@gmail.com',
};

// получаем доступ к элементам - супер удобно
for (let element of numbers) {
  console.log('- element -', element);
}

// будет ошибка: emails is not iterable
for (let key of emails) {
  console.log('- key -', key);
  
}

/* ============== */;