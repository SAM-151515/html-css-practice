const toDoEl = document.getElementById('to-do-el')


function add() {
	toDoEl.innerHTML += `
		<div class="to-do">
			<div class="check-box" id="check-el">
			</div>
			<h2>Figma Project</h2>
		</div>`
}