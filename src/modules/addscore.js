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
