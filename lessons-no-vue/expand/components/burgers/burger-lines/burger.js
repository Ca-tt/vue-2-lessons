let burgerButton = document.querySelector('.burger-button');
let burgerMenu = document.querySelector('.burger-menu');
let activeClassName = 'active';

burgerButton.onclick = function() {
  this.classList.toggle(activeClassName);
  if (!!burgerMenu) {
		burgerMenu.classList.toggle(activeClassName);
	}
}
