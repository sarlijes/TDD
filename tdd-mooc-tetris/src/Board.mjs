import { Block } from "./Block.mjs";
import { Tetromino } from "./Tetromino.mjs";
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
    //console.log("board now:")
    //console.log(this.board)
    this.hasFallingBlock = false;
  }

  hasFalling() {
    return this.hasFallingBlock;
  }

  toString() {
    return twoDimensionalArraytoString(this.board);
  }

  // lowercase char is considered as a moving block
  drop(block) {
    if (this.hasFallingBlock) {
      throw "already falling";
    }

    if (block instanceof Block) {

      // Simply place the Block to the middle of the first row
      this.board[0][Math.floor(this.width / 2)] = block.color.toLowerCase();
      this.hasFallingBlock = true;
    }

    if (block instanceof Tetromino) {
      const clearance = 3;
      const startingYPosition = 0;

      // Draw the Tetromino on the board
      for (let i = 0; i < block.height; i++) {
        for (let j = 0; j < block.width; j++) {
          if (block.shape[i][j] !== ".") {

            if (block.shape_enum === "T_SHAPE") {
              this.board[i][clearance + j] = block.color;
            }

            if (block.shape_enum === "I_SHAPE") {
              this.board[startingYPosition][clearance + j] = block.color;
            }

            if (block.shape_enum === "O_SHAPE") {
              this.board[i][clearance + j] = block.color;
            }

          }
        }
      }
    }
  }
  // TODO tests for helper function
  isLowerCase = (str) => str === str.toLowerCase() && str !== ".";

  // TODO refactor to be shorter (divide into smaller functions)
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
    console.log("");
    console.log("");
    // eslint-disable-next-line for-direction
    for (let x_axis = this.height - 1; x_axis >= 0; x_axis--) {
      // eslint-disable-next-line for-direction
      for (let y_axis = this.width - 1; y_axis >= 0; y_axis--) {
        // console.log(this.board[x_axis]);
        // console.log("?+");
        if (this.isLowerCase(this.board[x_axis][y_axis])) {

        }
      }
    }
    console.log("");
    console.log("");


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
      // TODO duplicate code
    } else {
      // Add the block to the row below
      this.board[y + 1][x] = char;
    }

    // console.log("board after dropping:")
    // console.log(this.toString())
  }
}
