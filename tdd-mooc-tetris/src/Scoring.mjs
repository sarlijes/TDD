
export class Scoring {

  totalScore;

  constructor() {
    this.totalScore = 0;
  }

  update(clearedRowsCount) {
    if (clearedRowsCount === 1) {
      this.totalScore = this.totalScore + 40;
    }
    if (clearedRowsCount === 2) {
      this.totalScore = this.totalScore + 100;
    }
    if (clearedRowsCount === 3) {
      this.totalScore = this.totalScore + 300;
    }
    if (clearedRowsCount === 4) {
      this.totalScore = this.totalScore + 1200;
    }
  }
}