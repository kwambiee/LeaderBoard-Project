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

  addScore(nameInput, marksInput) {
    const scores = { nameInput, marksInput };
    this.scoreArray = [...this.scoreArray, scores];
    this.updateScore();
  }
}

export default Leaderboard;
