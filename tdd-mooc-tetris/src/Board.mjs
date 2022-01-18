export class Board {
  width;
  height;
  board;
  hasFalling;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = [];
    for (let i = 0; i < height; i++) {
      this.temp = [];
      for (let j = 0; j < width; j++) {
        this.temp.push(".");
      }
      this.board.push(this.temp);
    }
    //console.log("board now:")
    //console.log(this.board)
    this.hasFalling = false;
  }

  toString() {
    let result = "";
    for (let i = 0; i < this.height; i++) {
      let temp = "";
      for (let j = 0; j < this.width; j++) {
        temp = temp.concat("", this.board[i][j].toUpperCase());
      }
      result = result.concat("", temp + "\n");
    }
    return result;
  }

  drop() {
    if (this.hasFalling) {
      throw "already falling";
    }
    this.board[0][Math.floor(this.width / 2)] = "x";
    // lowercase char is considered as a moving block
    this.hasFalling = true;
    //console.log("board after dropping:")
    //console.log(this.board)
  }

  tick() {
    // Find the currently falling block's coordinates
    let x = -1;
    let y = -1;

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.board[i][j] === "x") {
          y = i;
          x = j;
        }
      }
    }
    // console.log("x", x)
    // console.log("y", y)
    // Remove the block from it's previous row
    this.board[y][x] = ".";
    // Add the block to the row below
    this.board[y + 1][x] = "x";
  }
}
/*

*/
