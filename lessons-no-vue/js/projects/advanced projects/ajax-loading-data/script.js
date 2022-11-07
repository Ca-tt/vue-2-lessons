/* Global variables */
const OffsetY = 150;
const DeltaY = window.innerHeight - OffsetY;

const LimitSizeDeltha = 20;
let newLimit = LimitSizeDeltha;

let cards = [];


/* load data when page is ready */
window.onload = updateCards;

/* control cards visibility on scroll */
window.onscroll = toggleCard;

// замыкание при window.scroll + flag

// ЦЕЛЬ: добиться следующего эффекта
// при скролле, при достижении scrollY = 300, замыкать значение переменной flag
// flag - это условие (запуска или замыкания) другой функции, которая, в идеале, выполняет манипуляции с элементами страницы. Но для старта - просто вывода в консоли

// замыкание удалось
// теперь нужно придумать способ, как вызвать фунцию один раз после замыкания

function closure(currentHeight = 0, cardHeight = 600) {

  // теперь моя задача как-то закрыть limit,
  // чтобы тот отдавался динамично

  // переключатель не работает как рубильник
  // изначально он включен (или выключен?)
  // после того, как мы обновляем лимит, он включается/выключается
  
  // updateFlag

  function getCurrentLimit(oldLimit, delta) {
    return oldLimit + delta;
  }
  
  // start values
  let baseLimit = cardHeight;
  let baseUpdateFlag = false;
  
  let currentLimit = checkLimit(baseLimit, baseUpdateFlag);

  function checkLimit(limit, flag) {
    return updateFlag; // true || false
  }


  // проблема в том, что я должен получать значения
  // динамично, исходя из базовых параметров
  // ага. То есть должна быть инициализация и уже потом последующая 
  // рекурсивная обработка

  let newUpdateFlag = checkFlag(currentUpdateFlag);
  
  // while event is firing

  
  // check currentLimit
  // if height > currentLimit
  // return updateFlag = true
  // and increaseLimit
  

  // check currentUpdateFlag
  // if currentUpdateFlag = true
  // increaseLimit and disable updateFlag

  // function checkFlag(flag, currentLimit) {
  //   let cardHeight = 600;
  //   if (flag) {
  //     let newLimit = currentLimit + cardHeight;
  //     return newLimit +baseLimit += cardHeight;
  //   }
  //   return newLimit; // baseLimit || baseLimit += cardHeight (600); 
  // }

  // now we always have currentLimit and currentUpdateFlag
  // every scroll they are updated indendently
  // and dependently on their value we can call fetchNewItems()
  
  // when both conditions are met
  function fetchNewItems(flag = false, height, currentLimit = baseLimit) {
    if (flag && height > currentLimit) {
      console.log('- fetching items... -');
    }
  }

  fetchNewItems();


  function checkHeight(height, baseLimit) {
    
    if (height >= baseLimit) {
      // closure
      let flag = true;
      return [flag, baseLimit += 300];
    }
    else {
      let flag = false;
      return [flag, baseLimit];
    };
  }

  // closure

  // console.log('- checkHeight(height) -', checkHeight(height));

  // мы постоянно проверяем высоту
  // на основе неё мы получаем updateFlag
  // если updateFlag, мы увеличиваем лимит и начинаем подгрузку
  // а updateFlag снова становится false

  let [flag, limit] = checkHeight(height);
  // let [newLimit, newFlag] = checkFlag(flag, limit);

  console.log('- newLimit -', limit);
  console.log('- newFlag -', flag);
  
  checkFlag(flag);

  function checkFlag(flag) {
    if (flag) {
      // let newLimit = + oldLimit;
      console.log('- limit reached -');
      flag = false;
      // return [newLimit, flag];
    }
    // else return [oldLimit, true];
  }

}


window.onscroll = updateData;

const cardHeight = 600;
const deltaY = 600;

function updateData() {
  let scrollHeight = window.scrollY;
  let startOldLimit = 0;
  let startNewLimit = 600;
  
  function updateNewLimit(limit) {
    let oldLimit = limit;
    let newLimit = limit + deltaY;
    return [oldLimit, newLimit];
  }

  if (scrollHeight > newLimit) {
    return updateNewLimit()
  }



  function increaseLimit(oldLimit, newLimit) {
    oldLimit = newLimit;
    newLimit += deltaY;
    return [oldLimit, newLimit];
  }
  
  console.log('- oldLimit -', startOldLimit);
  console.log('- newLimit -', startNewLimit);

  updateLimit(startOldLimit, startNewLimit);

  function updateLimit(scrollHeight) {
    let [oldLimit, newLimit] = increaseLimit(oldLimit, newLimit);
    
    if (scrollHeight > newLimit) {
      console.log('- fetching data.... -');
      
    }

    // console.log('- oldLimit -', oldLimit);
    // console.log('- newLimit -', newLimit);
  }


  // console.log('- increaseLimit -', increaseLimit());




  
  
}

async function updateCards() {
  cards = await requestProducts(newLimit);
  return cards;
}

// control cards visibility on scroll
function toggleCard() {
  // requestNewProducts(cards, cardsLength);
  
  // let lastCard = cards[cards.length - 1];
  // console.log('- lastCard -', lastCard);
  

  // добавить флаг?
  // preventDefault?
  // сама проверка неправильная!
  // может нужно while или другое условие?

  // когда мы доходим до последней карточки
  // увеличиваем лимит и сразу передвигаем последнюю карточку на другое место
  // чтобы newLimit не увеличивался

  // флаг (или штука), которая будет блокировать функцию при повторном скроле
  // блок будет работать до тех пор, пока мы не выйдем из цикла
  // а затем флаг (блок) будет снова разблокирован

  // а что, если возвращать флаг, выполнять функцию вне цикла, затем снова блочить флаг?

  // let scrolledCount 
  // if scrolledCount == limit тогда меняе

  let flag = true;

  for (let card of cards) {
    if ((card.offsetTop - DeltaY) < window.scrollY) {
      card.classList.remove('hidden');
    }
    else if (card.offsetTop > window.innerHeight) {
      card.classList.add('hidden');
    }
  }

  // при переборе массива всё равно мы доходим до карточки
  // нужная переменная типа currentPageScroll, которая будет отсеивать остальные карточки
  
  // можно использовать метод scrollTo у window

  for (let card of cards) {
    // if (lastCard.offsetTop > window.) {
    //   console.log('- card -', card);
    //   console.log('- newLimit -', newLimit);
    // }
  }
}

function increaseNewLimit() {
  newLimit += LimitSizeDeltha;
  console.log('- newLimit -', newLimit);
  return newLimit;
}

// function requestNewProducts(newlimit) {

// }



async function requestProducts(newLimit = LimitSizeDeltha) {
  // get products from json
  let productsUrl = `https://fakestoreapi.com/products?limit=${newLimit}`;
  let response = await fetch(productsUrl);
  let productsData = await response.json();
  
  // spawn cards from json data
  spawnCards(productsData);
  return getCards();
}


function spawnCards(array) {
  // find page elements
  let section = document.querySelector('.product-grid');
  let template = document.querySelector('template').content.querySelector('.card');

  for (let product of array) {
    // make a copy of template elements
    let clone = template.cloneNode(true);
    
    // find content to change
    let img = clone.querySelector('.card-img');
    let title = clone.querySelector('.product-name');
    let price = clone.querySelector('.price');
    
    // change content
    img.src = product.image;
    title.innerHTML = product.title;
    price.innerHTML = product.price;
    
    // insert clone into document
    section.appendChild(clone);
  }
}

function getCards() {
  let cards = document.querySelectorAll('.product-section .card');
  return cards;
}

// function info() {
//   // cards
//   console.log('- cards -', cards);
//   console.log('- cards.length -', cards.length);
  
//   console.log('- newLimit -', newLimit);
// }