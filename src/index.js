import './style.css';
const scoreList = document.getElementById('scorelist')
const user = document.getElementById('user')
const score = document.getElementById('score')
const submitButton = document.getElementById('submitButton')

const scores = [
	{
		user : 'Victor',
		score : 20
	}
]

function displayList () {
	scores.forEach(val => {
	const li = document.createElement('li')
		li.classList.add('list-group-item');
				const text = `
				<div class="d-flex justify-content-between align-items-start" id="${val.index}">
					<span class="fw-bold">
						${val.user}
					</span>
					<span class="fw-bold">
					${val.score}
					</span>
				</div>`;
				li.innerHTML = text
				scoreList.appendChild(li)
	})
}

displayList();