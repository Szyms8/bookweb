// alert("bubba")
let todoInput,
	errorInfo,
	addBtn,
	ulList,
	newTodo,
	popupV,
	popupInfo,
	todoToEdit,
	popupInput,
	popupAddBtn,
	popupcloseBtn;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	// pobiera wszystkie nasze el.
	todoInput = document.querySelector(".todo-input");
	errorInfo = document.querySelector(".error-info");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");

	popupV = document.querySelector(".popup");
	popupInfo = document.querySelector(".popup-info");
	popupInput = document.querySelector(".popup-input");
	popupAddBtn = document.querySelector(".accept");
	popupcloseBtn = document.querySelector(".cancel");
};

const prepareDOMEvents = () => {
	//nadajemy nasłuchiwanie
	addBtn.addEventListener("click", addNewTodo);
	ulList.addEventListener("click", checkClick);
	popupcloseBtn.addEventListener("click", closePopupFunction);
	popupAddBtn.addEventListener("click", changeTodoText);
	todoInput.addEventListener("keyup", enterKeyCheck);
};

const addNewTodo = () => {
	if (todoInput.value !== "") {
		newTodo = document.createElement("li");
		newTodo.textContent = todoInput.value;
		createToolsArea();
		ulList.append(newTodo);

		todoInput.value = "";
		errorInfo.textContent = "";
	} else {
		errorInfo.textContent = "Wpisz treść zadania";
	}
};

const createToolsArea = () => {
	const toolsPanel = document.createElement("div");
	toolsPanel.classList.add("tools");
	// newTodo.append(toolsPanel);

	const completeBtn = document.createElement("button");
	completeBtn.classList.add("complete");
	completeBtn.innerHTML = `<i class="fas fa-check"></i>`;

	const editBtn = document.createElement("button");
	editBtn.classList.add("edit");
	editBtn.textContent = "EDIT";

	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete");
	deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;

	toolsPanel.append(completeBtn, editBtn, deleteBtn);

	newTodo.append(toolsPanel);
};

const checkClick = (e) => {
	if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed");
		e.target.classList.toggle("completed");
	} else if (e.target.matches(".edit")) {
		editTodo(e);
	} else if (e.target.matches(".delete")) {
		deleteTodo(e);
	}
};

const editTodo = (e) => {
	todoToEdit = e.target.closest("li");
	popupInput.value = todoToEdit.firstChild.textContent;
	console.log(todoToEdit.firstChild);
	popupV.style.display = "flex";
};

const closePopupFunction = () => {
	popupV.style.display = "none";
	popupInfo.textContent = "";
};

const changeTodoText = () => {
	if (popupInput.value !== "") {
		todoToEdit.firstChild.textContent = popupInput.value;
		popupV.style.display = "none";
		popupInfo.textContent = "";
	} else {
		popupInfo.textContent = "Musisz podać jakąś treść";
	}
};

const deleteTodo = (e) => {
	e.target.closest("li").remove();

	const allTodos = ulList.querySelectorAll("li");

	if (allTodos.length === 0) {
		errorInfo.textContent = "Brak zadań na liście";
	}
};

const enterKeyCheck = (e) => {
	if (e.key === "Enter") {
		addNewTodo();
	}
};

document.addEventListener("DOMContentLoaded", main);
const navbarV = document.getElementsByClassName("navbar-toggle")[0];
const navbarV2 = document.getElementsByClassName("navbar-toggle2")[0];
const navbarLinksV = document.getElementsByClassName("navbar-links");
const scrollLBtn = document.querySelector(".scrolll");
const scrollRBtn = document.querySelector(".scrollr");
const cardsBtnL = document.querySelector(".scrolll-recomended-left")
const cardsBtnR = document.querySelector(".scrollr-recomended-right")


const functionShow = () => {
	for (let i = 0; i < navbarLinksV.length; i++) {
		navbarLinksV[i].classList.toggle("active");
		navbarV.classList.toggle("none");
		navbarV2.classList.toggle("none");
	}
};




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

navbarV.addEventListener("click", functionShow);
navbarV2.addEventListener("click", functionShow);
scrollLBtn.addEventListener("click", fscrollL);
scrollRBtn.addEventListener("click", fscrollR);
cardsBtnL.addEventListener("click", fscrollLCardsL);
cardsBtnR.addEventListener("click", fscrollLCardsR);
