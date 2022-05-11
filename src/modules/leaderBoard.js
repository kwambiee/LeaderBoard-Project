import { scoreTable } from './elements.js';

const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BQzGyizpa0M5oxSRbjoy/scores/';

const addScore = async (userscore) => {
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(userscore),
  });
  return request.json();
};

scoreTable.innerHTML = '';

const getScore = async () => {
  const request = await fetch(url);
  const data = await request.json();

  scoreTable.innerHTML = data.result
    .map((score) => `<li>${score.user}: ${score.score}</li>`)
    .join('');
};
export { addScore, getScore };
