/* eslint-disable linebreak-style */
import { expect } from "chai";
import { NewTetromino } from "../src/NewTetromino.mjs";
import { getCrowdedBoard } from "./TestHelpers.mjs";


describe("Rotating falling tetrominoes in limited space", () => {

  let board;
  beforeEach(() => {
    board = getCrowdedBoard();
  });


  it("initial setup is correct when other shapes exist at at board", () => {
    expect(board.toString()).to.equalShape(`
      OO....OO
      OO....OO
      IIIIIIII`
    );
  });


  it("Shape I is not rotated when there is no space to rotate", () => {
    board.drop(NewTetromino.I_SHAPE);
    board.rotateLeft();
    expect(board.toString()).to.equalShape(`
      OOIIIIOO
      OO....OO
      IIIIIIII`
    );
  });


});

// - it cannot be rotated when there is no room to rotate
// - [wall kick](https://tetris.fandom.com/wiki/Wall_kick):
//    when it is up against a wall and is rotated, but there is no
//   room to rotate, move it away from the wall if possible

// it("", () => {
