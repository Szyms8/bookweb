// const navbarV = document.getElementsByClassName("navbar-toggle");
const navbarV = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar");
// const navbarV = document.querySelector(".navbar-toggle");
const navI = document.querySelector(".fa-bars");
const navbarV2 = document.querySelector(".navbar-toggle2");
// const navbarLinksV = document.getElementsByClassName("navbar-links");
const navbarLinksV = document.querySelectorAll(".navbar-links");
const scrollLBtn = document.querySelector(".scrolll");
const scrollRBtn = document.querySelector(".scrollr");
const cardsBtnL = document.querySelector(".scrolll-recomended-left");
const cardsBtnR = document.querySelector(".scrollr-recomended-right");

const hamburger = document.querySelector(".navbar-links");
const navMenu = document.querySelector(".nav-menuu");

// const functionShow = () => {
// 	for (let i = 0; i < navbarLinksV.length; i++) {
// 		navbarLinksV[i].classList.toggle("active");
// 		navbarV.classList.toggle(".none");
// 		navbarV2.classList.toggle(".none");
// 	}



// navbarV.addEventListener("click", () => {
// 	navbarLinksV.classList.toggle("active")
// 	// navMenu.classList.toggle("active")
// })

// document.querySelectorAll(".navbar-links").forEach(x => x.addEventListener("click", () => {
// 	navbarLinksV.remove("active");

// }))

// document.addEventListener("click", e => {
// 	if(!menu.contains(e.target)) {
// 		menu.classList.remove("active")
// 	}
// })

const functionClose = () => {
	for (let i = 0; i < navbarLinksV.length; i++) {
		navbarLinksV[i].classList.remove("active");
		
	}
};

function fShow() {
	for (let i = 0; i < navbarLinksV.length; i++) {
		navbarLinksV[i].classList.toggle("active");
	}
	navI.classList.toggle("none");
	navbarV2.classList.toggle("none");
	// navbarLinksV.classList.toggle("active")

	// navbarV.addEventListener("click", () => {
	// 	navbarLinksV.classList.toggle("active")
	// 	// navMenu.classList.toggle("active")
	// })
}
function fClose() {
	for (let i = 0; i < navbarLinksV.length; i++) {
		navbarLinksV[i].classList.toggle("active");
	}
	navI.classList.toggle("none");
	navbarV2.classList.toggle("none");
}

// if (navbarLinksV.contains("active")){

// }

// function fClose2() {
// 	function fClose3() {
// 		for (let i = 0; i < navbarLinksV.length; i++) {
// 			navbarLinksV[i].classList.toggle("active");
// 		}
// 		navI.classList.toggle("none");
// 		navbarV2.classList.toggle("none");
// 	}
// 	navbarLinksV.addEventListener("click", fClose3);
// }

function fscrollL() {
	let left = document.querySelector(".scroll-images");
	left.scrollBy(-350, 0);
}
function fscrollR() {
	let left = document.querySelector(".scroll-images");
	left.scrollBy(350, 0);
}

function fscrollLCardsL() {
	let left = document.querySelector(".recent");
	left.scrollBy(-350, 0);
	// console.log("dipa");
}
function fscrollLCardsR() {
	let left = document.querySelector(".recent");
	left.scrollBy(350, 0);
	// console.log("dipa");
}

// navbarV.addEventListener("click", functionShow);
// navbarV2.addEventListener("click", functionShow);
scrollLBtn.addEventListener("click", fscrollL);
scrollRBtn.addEventListener("click", fscrollR);
cardsBtnL.addEventListener("click", fscrollLCardsL);
cardsBtnR.addEventListener("click", fscrollLCardsR);
navbarV.addEventListener("click", fShow);
navbarV2.addEventListener("click", fClose);
// navMenu.addEventListener("click", fClose2);
// navI.addEventListener("click", fClose);
// navbarLinksV.addEventListener("click", functionCloseNav);
navbarLinksV.addEventListener("click", functionClose);

