/* eslint-disable linebreak-style */
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Rotating falling tetrominoes", () => {

  let board;
  let shape;
  beforeEach(() => {
    board = new Board(12, 6);
    shape = Tetromino.T_SHAPE;
    board.drop(shape);
  });


  xit("a falling tetromino can be rotated left", () => {
    board.moveDown();
    board.moveDown();
    expect(shape.rotateLeft().toString()).to.equalShape(
      `.T.
       TT.
       .T.`
    );
    expect(board.toString()).to.equalShape(
      `.....T......
       ....TT......
       .....T......
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
// - [wall kick](https://tetris.fandom.com/wiki/Wall_kick):
//    when it is up against a wall and is rotated, but there is no
//   room to rotate, move it away from the wall if possible
