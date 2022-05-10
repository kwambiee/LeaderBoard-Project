// css files here
import './style.css';
import Leaderboard from './modules/addscore.js';
import * as Element from './modules/elements.js';

const newScore = new Leaderboard();

const displayScore = (scores) => {
  let content = '';
  scores.scoreArray.forEach((element) => {
    content += `
    <li>${element.nameInput}:${element.marksInput}</li>`;
  });
  Element.scoreTable.innerHTML = content;
};
displayScore(newScore);

Element.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = Element.form.elements.names.value;
  const marksInput = Element.form.elements.marks.value;
  if (nameInput && marksInput) {
    newScore.addScore(nameInput, marksInput);
    newScore.updateScore();
    displayScore(newScore);
    Element.form.elements.marks.value = '';
    Element.form.elements.names.value = '';
  }
});
displayScore(newScore);
