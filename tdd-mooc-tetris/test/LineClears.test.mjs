/* eslint-disable linebreak-style */
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { fallToBottom } from "./TestHelpers.mjs";

describe("Line clears", () => {

  let board;

  beforeEach(() => {
    board = new Board(8, 3);
  });

  it("Two I shapes land at the bottom, the line clears", () => {
    board = new Board(8, 3);
    board.drop(Tetromino.I_SHAPE);
    board.moveLeft();
    board.moveLeft();
    fallToBottom(board);

    board.drop(Tetromino.I_SHAPE);
    board.moveRight();
    board.moveRight();
    fallToBottom(board);

    board.checkClear();

    expect(board.toString()).to.equalShape(`
      ........
      ........
      ........`
    );

  });

  it("", () => {
  });



});