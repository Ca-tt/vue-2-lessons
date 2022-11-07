let randomAPIUrl = 'https://random-data-api.com/api/address/random_address';

let ajax = new XMLHttpRequest();

ajax.open('GET', randomAPIUrl);
ajax.send();

ajax.onload = () => {
  console.log('- response data -', ajax.response);
};