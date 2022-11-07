let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

leftArrow.onclick = function () { 
  changeSlides(-1);
}

rightArrow.onclick = function () {
	changeSlides(1);
};

function changeSlides(number) {
	slides[currentSlide].classList.remove("active");
	currentSlide += number;
	if (currentSlide > slides.length - 1) {
		currentSlide = 0;
	}
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
  slides[currentSlide].classList.add("active");
}