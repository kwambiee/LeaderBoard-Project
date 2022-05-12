// css files here
import './style.css';
import { addScore, getScore } from './modules/leaderBoard.js';
import * as Element from './modules/elements.js';

Element.refresh.addEventListener('click', getScore);

Element.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = Element.form.names.value;
  const scoreInput = Element.form.marks.value;
  const userscore = { user: `${nameInput}`, score: `${scoreInput}` };

  addScore(userscore).then(() => {
    getScore();
  });
});
