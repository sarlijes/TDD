/* eslint-disable linebreak-style */
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Rotating falling tetrominoes", () => {

  let board;
  beforeEach(() => {
    board = new Board(12, 6);
    board.drop(Tetromino.T_SHAPE);
  });


  it("a falling tetromino can be moved left", () => {
    board.moveLeft();
    expect(board.toString()).to.equalShape(
      `....T.......
       ...TTT......
       ............
       ............
       ............
       ............`
    );
  });

  it("", () => {

  });


  it("", () => {

  });


  it("", () => {

  });


});


// - a falling tetromino can be rotated
// - it cannot be rotated when there is no room to rotate
// - [wall kick](https://tetris.fandom.com/wiki/Wall_kick): when it is up against a wall and is rotated, but there is no
//   room to rotate, move it away from the wall if possible
