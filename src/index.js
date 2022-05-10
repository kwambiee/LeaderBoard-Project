// css files here
import './style.css';
import Leaderboard, { displayScore } from './modules/addscore.js';
import * as Element from './modules/elements.js';

const newScore = new Leaderboard();

Element.submitScore.addEventListener('submit', (e) => {
  console.log(e.target);
  e.preventDefault();
  newScore.addScore(names, marks);
  newScore.displayScore;
});

newScore.displayScore;
