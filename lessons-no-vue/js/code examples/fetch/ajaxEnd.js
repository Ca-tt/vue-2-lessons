let htmlUrl = './test.htm';
let randomAPIUrl = 'https://random-data-api.com/api/address/random_address';

let ajax = new XMLHttpRequest();
console.log('- ajax -', ajax);

sendRequest('./test.htm');

function sendRequest(url) {
  // асинхронные методы
  ajax.open('GET', url);
  console.log('- ajax -', ajax);
  ajax.send();
  console.log('- ajax -', ajax);
  ajax.onload = onRequestReady;
  ajax.onreadystatechange = onRequestReady;
  console.log('- ajax -', ajax);
  setTimeout(() => { console.log('waiting for 1 sec...'); }, 1000);
}

function onRequestReady() {
    console.log('- response data -', ajax.status);
}

