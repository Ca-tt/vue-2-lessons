const burger = document.querySelector(".burger");
const heart = document.querySelector(".fa-heart");
const line = document.querySelectorAll(".line");
const nav = document.querySelector(".nav-menu");
const editBtn = document.querySelector(".edit-btn");
const editPage = document.querySelector(".edit-page");
const closeEditBtn = document.querySelector(".close-btn");
heart.onclick = function () {
  heart.classList.toggle("fa-solid");
};
burger.onclick = function () {
  nav.classList.toggle("active");
  line[0].classList.toggle("active-first-line");
  line[1].classList.toggle("active-second-line");
  line[2].classList.toggle("active-third-line");
};
closeEditBtn.onclick = function () {
  editPage.classList.remove("active-page");
};
editBtn.onclick = function () {
  editPage.classList.toggle("active-page");
};
