const toDoEl = document.getElementById('to-do-el')
let toDos = []

toDos = JSON.parse(localStorage.getItem("toDos"))
if(toDos === null) {
	toDos = []
}

function add() {
	const toDo = prompt("Please enter your To-do:", "");
	if(toDo == null) {
		//Do Nothing
	}

	else {
		toDoEl.innerHTML += `
			<div class="to-do">
				<div class="check-box" id="check-el">
				</div>
				<h2>${toDo}</h2>
			</div>`

		toDos.push(toDo)
		localStorage.setItem("toDos", JSON.stringify(toDos))
	}
}

function renderListOnRefresh() {
	const toDos = JSON.parse(localStorage.getItem("toDos"))
	if(toDos) {
		for(let todo = 0; todo < toDos.length; todo++) {
		toDoEl.innerHTML += `
		<div class="to-do">
			<div class="check-box" id="check-el">
			</div>
			<h2>${toDos[todo]}</h2>
		</div>`
		}
	}	
}

renderListOnRefresh()
