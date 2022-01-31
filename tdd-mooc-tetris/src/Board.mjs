import { twoDimensionalArraytoString } from "./Utils.mjs";

export class Board {
  width;
  height;
  board;
  hasFallingBlock;

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
    this.hasFallingBlock = false;
  }

  hasFalling() {
    return this.hasFallingBlock;
  }

  toString() {
    return twoDimensionalArraytoString(this.board);
  }

  drop(block) {
    if (this.hasFallingBlock) {
      throw "already falling";
    }
    this.board[0][Math.floor(this.width / 2)] = block.color.toLowerCase();
    // lowercase char is considered as a moving block
    this.hasFallingBlock = true;
  }
  // TODO tests for helper function
  isLowerCase = (str) => str === str.toLowerCase() && str !== ".";

  // TODO refactor to be shorter
  tick() {
    // Find the currently falling block's coordinates
    let x = -1;
    let y = -1;
    let char = "";

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.isLowerCase(this.board[i][j])) {
          y = i;
          x = j;
          char = this.board[i][j];
        }
      }
    }
    // Remove the block from it's previous row
    this.board[y][x] = ".";
    // Check if the block has reached the bottom, stop it if yes
    if (typeof this.board[y + 1] === "undefined") {
      this.board[y][x] = char.toUpperCase();
      this.hasFallingBlock = false;
    }
    // Check if the block can drop (the space is free)
    else if (this.board[y + 1][x] !== ".") {
      this.board[y][x] = char.toUpperCase();
      this.hasFallingBlock = false;
      //TODO duplicate code
    } else {
      // Add the block to the row below
      this.board[y + 1][x] = char;
    }
  }
}
