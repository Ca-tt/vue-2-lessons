let image = document.querySelector(".image");
let baseImageSize = "50x50";
let imageSrc = image.getAttribute("src");
let serviceProvider = "https://via.placeholder.com/";
let serviceLength = serviceProvider.length;
let imageGeneratorButton = document.querySelector(".image-generator-button");
let input = document.querySelector(".new-image-size");
let pressedKeyName = "Enter";

imageGeneratorButton.onclick = () => {
		setNewImageSize();
};

input.oninput = () => {
	setNewImageSize();
};

input.onkeydown = (e) => {
	let isEnter = checkEnterKey(e);
	if (isEnter) {
		setNewImageSize();
	}
};

// получаем данные из инпута
function getImageSize() {
	return input.value;
}

// задаём новый src
function setNewImageSize() {
	let newImageSize = getImageSize();
	let newImageSrc = serviceProvider + newImageSize;
	image.setAttribute("src", newImageSrc);
}

// при нажатии на Enter
function checkEnterKey(event) {
	return event.key == "Enter" ? true : false;
}

function getInputLength() {
	return input.value.length;
}

function insertValue(element, char) {
	element.value += char;
}
