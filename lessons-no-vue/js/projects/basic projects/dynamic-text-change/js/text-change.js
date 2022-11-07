let title = document.querySelector(".title");
let subtitle = document.querySelector(".subtitle");

function setDefaultText() {
  changeProductText(data[0]);
}

// get current product from array by slide index
function getCurrentProduct(slide) { 
  return data[slide];
}

function changeProductText(product) {
  title.innerHTML = product.title;
  subtitle.innerHTML = product.subtitle;
}

setDefaultText();