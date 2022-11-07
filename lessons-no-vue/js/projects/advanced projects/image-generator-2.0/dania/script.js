let menu = document.querySelector(".menu");
let burger = document.querySelector(".burger");
let cross = document.querySelector(".cross");

burger.onclick = function() {
    menu.style.display = "flex";
    menu.style.animation = "open 0.5s ease-in-out";
}

cross.onclick = function() {
    menu.style.display = "none";
    menu.style.animation = "close 0.5s ease-in-out";
}


let heart = document.querySelector(".fa-heart");

heart.onclick = function() {
    if (!heart.classList.contains("liked")) {
        heart.classList.add("liked")
    } else {
        heart.classList.remove("liked")
    }
}

// let generated = document.querySelector(".generated");
// let opBlock = document.querySelector(".option-block");

// generated.onmouseover = function() {
//     generated.style.display = "none";
// }

// opBlock.onmouseover = function() {
//     generated.style.display = "none";
// }

// opBlock.onmouseout = function() {
//     generated.style.display = "block";
// }