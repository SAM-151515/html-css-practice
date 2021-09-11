const toDoEl = document.getElementById('to-do-el')


function add() {
	let toDo = prompt("Please enter your to-do:", "");
	toDoEl.innerHTML += `
		<div class="to-do">
			<div class="check-box" id="check-el">
			</div>
			<h2>${toDo}</h2>
		</div>`
}