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

  it("a falling tetromino can be rotated right", () => {
    board.rotateRight();
    expect(shape.rotateRight().toString()).to.equalShape(
      `.T.
       .TT
       .T.`
    );
    expect(board.toString()).to.equalShape(
      `.....T......
       .....TT.....
       .....T......
       ............
       ............
       ............`
    );
  });

  it("a falling tetromino can be rotated left", () => {
    board.rotateLeft();
    expect(board.currentlyFallingBlock.toString()).to.equalShape(
      `.T.
       TT.
       .T.`
    );
    let result = board.toString();
    expect(result).to.equalShape(
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

describe("Rotating falling tetrominoes - coordinates update correctly", () => {

  let board;
  let shape;
  beforeEach(() => {
    board = new Board(12, 6);
    shape = Tetromino.T_SHAPE;
    board.drop(shape);
  });

  xit("after rotating left", () => {
    board.rotateLeft();

    const position = shape.currentPosition;
    expect(position).not.to.equal(undefined);
    expect(position.x).to.equal(5);
    expect(position.y).to.equal(0);

    expect(board.toString()).to.equalShape(
      `.....T......
       ....TT......
       .....T......
       ............
       ............
       ............`
    );
  });

  xit("after rotating right", () => {
    board.rotateRight();

    const position = shape.currentPosition;
    expect(position).not.to.equal(undefined);
    expect(position.x).to.equal(5);
    expect(position.y).to.equal(0);

    expect(board.toString()).to.equalShape(
      `.....T......
       .....TT.....
       .....T......
       ............
       ............
       ............`
    );
  });

  it("", () => {

  });


});

// - a falling tetromino can be rotated
// - it cannot be rotated when there is no room to rotate
// - [wall kick](https://tetris.fandom.com/wiki/Wall_kick):
//    when it is up against a wall and is rotated, but there is no
//   room to rotate, move it away from the wall if possible
