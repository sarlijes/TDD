export class RotatingShape {
  shape = [];
  height = 0;
  width = 0;

  constructor(str) {
    let parts = str.split("\n");

    for (let i = 0; i < parts.length; i++) {
      let part = parts[i].trim();
      let temp = [];
      for (let j = 0; j < part.length; j++) {
        temp.push(part[j]);
        this.width = this.width + 1;
      }
      this.shape.push(temp);
      this.height = this.height + 1;
    }
  }

  toString() {
    let result = "";
    for (let i = 0; i < this.height; i++) {
      let temp = "";
      for (let j = 0; j < this.shape[i].length; j++) {
        temp = temp.concat("", this.shape[i][j]);
      }
      result = result.concat("", temp + "\n");
    }
    return result;
  }

  rotateLeft() {
    // Transpose matrix, source: https://bit.ly/3Af8xFT (Medium)
    for (let y = 0; y < this.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [this.shape[x][y], this.shape[y][x]] = [
          this.shape[y][x],
          this.shape[x][y],
        ];
      }
    }
    // Reverse the order of the columns
    this.shape.forEach((row) => row.reverse());
    return this.toString();
  }

  rotateRight() {
    // Transpose matrix, source: https://bit.ly/3Af8xFT (Medium)
    for (let y = 0; y < this.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [this.shape[x][y], this.shape[y][x]] = [
          this.shape[y][x],
          this.shape[x][y],
        ];
      }
    }
    // Reverse the order of the columns
    this.shape.forEach((row) => row.reverse());
    return this.toString();
  }
}
