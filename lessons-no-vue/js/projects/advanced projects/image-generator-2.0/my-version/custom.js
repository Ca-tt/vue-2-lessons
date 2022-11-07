// elements
let image = document.querySelector(".generated-image");
let imageSrc = image.getAttribute("src");

let input = {
	// sizing
	width: document.querySelector(".width-input"),
	height: document.querySelector(".height-input"),

	// colors
	background: document.querySelector(".background-input"),
	color: document.querySelector(".color-input"),

	// text
	text: document.querySelector(".text-input"),

	// extension
	extension: document.querySelector(".extension-input"),
};
let inputs = Object.values(input);

let parameters = {
	serviceProvider: "https://dummyimage.com/",
	width: input.width.value,
	height: input.height.value,
	// colors
	background: input.background.value,
	color: input.color.value,
	// text
	text: input.text.value,
	// extension
	extension: input.extension.value,
};

function getParameter(input) {
	return input.value;
}

function updateParameter(key, value) {
	parameters[key] = value;
}

console.log("- parameters.color -", parameters.color.split("#")[1]);

function generateSrc() {
	let newSrc = "";
	newSrc =
		parameters.serviceProvider +
		parameters.width +
		"x" +
		parameters.height +
		"/" +
		parameters.background.split("#")[1] +
		"/" +
		parameters.color.split("#")[1] +
		parameters.extension +
		"?text=" +
		parameters.text;
	console.log("- newSrc -", newSrc);
	return newSrc;
}

let downloadLink = document.querySelector(".download-link");
function setDownloadLink(src) {
	downloadLink.href = src;
	downloadLink.download = src;
}

downloadLink.onclick = function (e) {
	e.preventDefault();
	console.log(
		"- downloadLink.getAttribute -",
		downloadLink.getAttribute("href")
	);
	downloadImage(downloadLink.getAttribute("href"));
};

// 	downloadImage(downloadLink.getAttribute("src"));
// };

// get data from input
// function getImageSize() {
// 	return input.size.value.split("x");
// }

// input.size.oninput = () => {
// 	console.log("- getImageSize() -", getImageSize());
// };

// on any of input change return parameters
inputs.forEach((input) => {
	input.oninput = () => {
		console.log("- input -", input);
		let parameterName = input.id;
		let parameterValue = getParameter(input);
		console.log("- parameterName -", parameterName);
		console.log("- parameterValue -", parameterValue);

		updateParameter(parameterName, parameterValue);
		let newSrc = generateSrc();
		updateImage(newSrc);
		setDownloadLink(newSrc);
		// downloadImage(newSrc);
	};
	// input.oninput = getImageParameters();
});

async function downloadImage(imageSrc) {
	saveAs(imageSrc, "image.png");
	// var FileSaver = require("./file-saver.js");
	// let xhr = new XMLHttpRequest();
	// xhr.open('GET', imageSrc);
	// xhr.send();
	// const image = await fetch('https://cors.io/?' + imageSrc, {
	// 	method: "GET",
	// 	headers: {
	// 		AccessControlRequestMethod: "GET",
	// 		AccessControlAllowOrigin: "*",
	// 	},
	// }).then((response) => console.log(response.json()));
	// console.log('- image -', image);

	// const imageBlog = await image.blob();
	// const imageURL = URL.createObjectURL(imageBlog);

	// const link = document.createElement("a");
	// link.href = imageURL;
	// link.download = "image file name here";
	// document.body.appendChild(link);
	// link.click();
	// document.body.removeChild(link);
}

// set new image size
function updateImage(src) {
	// let newImageSize = getImageSize();
	// let newImageSrc = parameters.serviceProvider + newImageSize;

	// console.log("- newImageSize -", newImageSize);
	// console.log("- newImageSrc -", newImageSrc);

	image.setAttribute("src", src);
}

// input.size.oninput = () => {
// 	setImageSize();
// };

function getWidth() {
	return input.width.value;
}

function getImageParameters() {
	// sizing
	let size = input.size.value;
	let width = input.width.value;
	let height = input.height.value;

	// colors
	let background = input.background.value;
	let color = input.color.value;

	// text
	let text = input.text.value;

	// extension
	let extension = input.extension.value;

	// generate adequate format

	parameters[0] = width;
	parameters[1] = "x";
	parameters[2] = height;

	parameters[3] = background;
	parameters[4] = color;
	parameters[5] = extension;
	parameters[6] = text;

	let newSrc = parameters.join("/");
	// console.log("- newSrc -", newSrc);

	return newSrc;
}

// input.size.onkeydown = (e) => {
// 	let pressedKey = "Enter";

// 	let isEnter = checkEnterKey(e, pressedKey);
// 	if (isEnter) {
// 		setImageSize();
// 	}
// };

// при нажатии на Enter
function checkEnterKey(event, key) {
	return event.key == key ? true : false;
}

// function getInputLength() {
// 	return input.size.value.length;
// }

function insertValue(element, char) {
	element.value += char;
}
