let menu = document.querySelector(".menu");
let edit = document.querySelector(".edit-image");
let burger = document.querySelector(".burger");
let cross = document.querySelector(".cross");

// handle all clicks
burger.onclick = function () {
	menu.classList.toggle("active");
};

cross.onclick = function () {
	menu.classList.toggle("active");
};

edit.onclick = function () {
	menu.classList.toggle("active");
};

let input = {
	width: document.querySelector(".width-input"),
	height: document.querySelector(".height-input"),
	background: document.querySelector(".background-input"),
	color: document.querySelector(".color-input"),
	text: document.querySelector(".text-input"),
	extension: document.querySelector(".extension-input"),
};
let inputs = Object.values(input);
// console.log('- inputs -', inputs);


let parameters = {
	serviceProvider: "https://dummyimage.com/",
	width: input.width.value,
	height: input.height.value,
	background: input.background.value,
	color: input.color.value,
	text: input.text.value,
	extension: input.extension.value,
};

function getParameter(input) {
	return input.value;
}

function updateParameter(key, value) {
	parameters[key] = value;
}

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

	return newSrc;
}

let downloadLink = document.querySelector(".download-link");
function setDownloadLink(src) {
	downloadLink.href = src;
	downloadLink.download = src;
}

downloadLink.onclick = function (e) {
	e.preventDefault();
	downloadImage(downloadLink.getAttribute("href"));
};

// on any of input change return parameters
inputs.forEach((input) => {
	input.oninput = () => {
		let parameterName = input.id;
		let parameterValue = getParameter(input);
		updateParameter(parameterName, parameterValue);

		let newSrc = generateSrc();
		updateImage(newSrc);
		setDownloadLink(newSrc);
	};
});

async function downloadImage(imageSrc) {
	saveAs(imageSrc, `image${parameters.extension}`);
}

// set new image size
function updateImage(src) {
	image.setAttribute("src", src);
}

