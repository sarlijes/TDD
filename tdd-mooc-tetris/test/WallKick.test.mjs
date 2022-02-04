import { expect } from "chai";
import { Tetromino } from "../src/Tetromino.mjs";


import { Board } from "../src/Board.mjs";
// - it cannot be rotated when there is no room to rotate
// - [wall kick](https://tetris.fandom.com/wiki/Wall_kick):
//    when it is up against a wall and is rotated, but there is no
//   room to rotate, move it away from the wall if possible

describe("", () => {


  let board;
  let shape;

  beforeEach(() => {
    board = new Board(8, 6);
    shape = Tetromino.T_SHAPE;
    board.drop(shape);
  });

  it("", () => {


  });
});


it("", () => {

});


it("", () => {

});


it("", () => {

});