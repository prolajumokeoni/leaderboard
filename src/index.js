import './style.css';

const scoreList = document.getElementById('scorelist');
const userName = document.getElementById('user');
const scoreMark = document.getElementById('score');
const submitButton = document.getElementById('submitButton');
const refreshButton = document.getElementById('refreshButton');

let scores = [];
const apikey = '0ek6Ww2QQKM1sN3RSzoq';
const displayList = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apikey}/scores/`,
  );
  scores = await response.json();
  if (scores.result.length) {
    scores.result.forEach((val) => {
      const li = document.createElement('li');
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
      li.innerHTML = text;
      scoreList.appendChild(li);
    });
  }
};

displayList();

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const scoreData = {
    user: userName.value,
    score: scoreMark.value,
  };

  const addedData = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apikey}/scores/`,
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scoreData),
    },
  );
  if (addedData) {
    scoreList.innerHTML = '';
    await displayList();
    userName.value = '';
    scoreMark.value = '';
  }
});

refreshButton.addEventListener('click', () => {
  scoreList.innerHTML = '';
  displayList();
});
