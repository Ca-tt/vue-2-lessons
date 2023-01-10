// let peremennaja
let header = document.querySelector("header");
console.log(header)

window.onscroll = function () {
    
    // когда мы прокрутили страницу вниз
  if (window.pageYOffset > 0) {
    // добавляем класс
    header.classList.add('fixed');
  }
  // когда мы докрутили страницу вверх
  else {
    // удаляем класс
    header.classList.remove('fixed');
  }
}

$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 55,
	nav: false,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 4,
		},
	},
});
