// ЗАДАЧА 1: ПОИСК HTML

let htmlString = `
  <p>Кажется, сюда случайно попал HTML </p>
  <section>Кажется, сюда случайно попал HTML </section>
  <table>Кажется, <b>сюда</b> случайно попал HTML </table>
  <input />Кажется, случайно попал HTML
`;

let htmlPatter = /<\/?[a-zA-Z]+ ?\/?>/gm;
let htmlMatch = htmlString.match(htmlPatter);
// console.log('- html matches -', htmlMatch);


// ЗАДАЧА 2: ПОИСК СЛОВ И БУКВ

let stringsWithHTML = `
  Меня не остановить. Я добъюсь вершины мира и позже превзойду её...
  It is a never-ending adventure: we learn from it every single day.
  <p>Кажется, сюда случайно попал HTML </p>
  <section>Кажется, сюда случайно попал HTML </section>
  <table>Кажется, <b>сюда</b> случайно попал HTML </table>
  <input />Кажется, случайно попал HTML
`;

let simpleString = `Меня не остановить. Я добъюсь вершины мира и позже превзойду её...`;

// let lettersPattern = /[a-zA-Zа-яА-Яё]+/gm;

let wordsNotHTMLPattern = /[^<?\/?>\w][а-яА-Яё\w.-]+/gm; // хз как, но оно работает!
let allCharactersPattern = /[^<?\/?>\w][а-яА-Яё\w.,: -]+/gm;

let words = stringsWithHTML
  .match(wordsNotHTMLPattern)
  .map(word => word.trimStart());


let characters = stringsWithHTML
  .match(allCharactersPattern)
  .map(string => string.length);

let sum = 0;

for (let stringLength of characters) {
  sum += stringLength;
}

console.log('- слов в строке: -', words.length);
console.log('- слова -', words);

console.log('Знаков в строке (кроме HTML)', sum);


// ЗАДАЧА 3: НОМЕР КАРТЫ

let cardsOptions = `
  5154 4148 3832 2216
  2137414838322216
  1111111111111111
  5553 4448 3932 1116
    5553  4448  3932  1116
`;
// 1. написать парсер слов
// 2. дополнить его парсером HTML

// 1. Находить число букв и слов (две разные регулярки?)
// 2. Находить число слов в тегах HTML (отдельно)
// 3. Узнавать разницу чисел (вычисления)