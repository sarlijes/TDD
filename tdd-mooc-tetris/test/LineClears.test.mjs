/* eslint-disable linebreak-style */
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { fallToBottom } from "./TestHelpers.mjs";

describe("Line clears", () => {
  let board;

  beforeEach(() => {
    board = new Board(8, 4);
  });

  it("Two I shapes land at the bottom, the line clears", () => {
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
      ........
      ........`
    );
  });

  it("Four O shapes land at the bottom, the line clears", () => {
    board.drop(Tetromino.O_SHAPE);
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    fallToBottom(board);

    board.drop(Tetromino.O_SHAPE);
    board.moveLeft();
    fallToBottom(board);

    board.drop(Tetromino.O_SHAPE);
    board.moveRight();
    board.moveRight();
    board.moveRight();
    fallToBottom(board);

    board.drop(Tetromino.O_SHAPE);
    board.moveRight();
    fallToBottom(board);

    board.checkClear();
    expect(board.toString()).to.equalShape(`
    ........
    ........
    ........
    ........`
    );
  });

  // TODO add test for a case where the block should stop when
  // dropped - maybe should check coordinates? Or simple check
  // when drawing the shape - if some of the cells is already occupied

});