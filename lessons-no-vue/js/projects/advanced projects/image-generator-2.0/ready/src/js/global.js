let image = document.querySelector(".generated-image");
let imageSrc = image.getAttribute("src");
let randomButton = document.querySelector(".random-button");
// console.log('- randomButton -', randomButton);


// let promise = new Promise((resolve, reject) => {
//   // resolve('done');
//   reject(new Error('error!'));
// })
// console.log(promise)

// promise.then(
//   result => { console.log(result.toUpperCase()); },
//   reject => { console.log(reject); }
// )

// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

// let response = fetch(url);

// response.then(
//   response => {
//     let result = '';
//     if (response.ok) {
//       result = response.json();

//       result.then(commits => {
//         commits.map((object) => console.log(object.commit.message));
//       })
//     }
//   },
//   reject => {
//     console.log('- reject -', reject);
//   }
// );

// fetch('https://www.google.com');

// async function getFile() {
//   const response = await fetch('https://dnepr-masterok.com.ua/humans.txt');
//   response.then(result => console.log(result));
// }

// console.log('- result -', result);


// promise = fetch(url);
// console.log('- promise -', promise);

export {
  image,
  imageSrc,
  randomButton
}
