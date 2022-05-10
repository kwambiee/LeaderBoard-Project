import { scoreTable } from './elements.js';

class Leaderboard {
  constructor() {
    this.getScore();
  }

  getScore() {
    this.scoreArray = JSON.parse(localStorage.getItem('scoreBoard')) || [];
  }

  updateScore() {
    localStorage.setItem('scoreBoard', JSON.stringify(this.scoreArray));
  }

  addScore() {
    const scores = { names, marks };
    this.scoreArray = [...this.scoreArray, scores];
    this.updateScore();
  }
}

const displayScore = (element) => {
  let content = '';
  content += `
<ul class="score-input">
    <li>${element.names}:${element.marks}</li>
</ul>
`;
  scoreTable.innerHTML = content;
};
displayScore();
