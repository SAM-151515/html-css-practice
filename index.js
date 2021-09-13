const toDoEl = document.getElementById('to-do-el')
let toDoList = []

toDoList = JSON.parse(localStorage.getItem("toDos"))
if(toDoList === null) {
	toDoList = []
}

function createElement() {
	const toDoList = JSON.parse(localStorage.getItem("toDos"))
	toDoEl.innerHTML = null
	if(toDoList) {
		for(let todo = 0; todo < toDoList.length; todo++) {
		toDoEl.innerHTML += `
		<div class="to-do">
			<div class="check-box" id="check-el" onclick="">
			</div>
			<h2>${toDoList[todo]}</h2>
		</div>`
		}
	}
}

function add() {
	const toDo = prompt("Please enter your To-do:", "");
	if(toDo == null || toDo == "") {
		//Do Nothing
	}
	else {
		toDoList.push(toDo)
		localStorage.setItem("toDos", JSON.stringify(toDoList))
		
		createElement()		
	}
}

function del() {
	localStorage.clear()
	toDoList = []
	createElement()
}

createElement()