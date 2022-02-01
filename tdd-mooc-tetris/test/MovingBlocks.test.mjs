/* eslint-disable linebreak-style */
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Block } from "../src/Block.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Moving simple 1x1 blocks", () => {

  let board;
  let block;
  beforeEach(() => {
    board = new Board(3, 3);
    block = new Block("X");
    board.drop(block);
  });

  it("a falling block can be moved left", () => {
    board.moveLeft();
    const result = board.toString();
    expect(result).to.equalShape(`
     X..
     ...
     ...
     `);
  });

  it("a falling block can be moved right", () => {
    board.moveRight();
    const result = board.toString();
    expect(result).to.equalShape(`
     ..X
     ...
     ...
     `);
  });

  it("a falling block can be moved down", () => {
    board.moveDown();
    const result = board.toString();
    expect(result).to.equalShape(`
     ...
     .X.
     ...
     `);
  });

  it("a falling block can be moved several times to various directions", () => {
    board.moveRight();
    board.moveDown();
    board.moveDown();
    board.moveLeft();
    board.moveLeft();
    const result = board.toString();
    expect(result).to.equalShape(`
     ...
     ...
     X..
     `);
  });

});

describe("Moving falling tetrominoes", () => {

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

  it("a falling tetromino can be moved right", () => {
    board.moveRight();
    expect(board.toString()).to.equalShape(
      `......T.....
       .....TTT....
       ............
       ............
       ............
       ............`
    );
  });

  it("a falling tetromino can be moved down", () => {
    board.moveDown();
    expect(board.toString()).to.equalShape(
      `............
       .....T......
       ....TTT.....
       ............
       ............
       ............`
    );
  });

});

describe("", () => {
  it("", () => {

  });
  it("", () => {

  });
  it("", () => {

  });

});


// - it cannot be moved left beyond the board
// - it cannot be moved right beyond the board
// - it cannot be moved down beyond the board (will stop falling)
// - it cannot be moved left through other blocks
// - it cannot be moved right through other blocks
// - it cannot be moved down through other blocks (will stop falling)