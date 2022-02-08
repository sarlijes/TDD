import { expect } from "chai";
import { Tetromino } from "../src/Tetromino.mjs";
import { moveToLeftEdge, moveToRightEdge } from "./TestHelpers.mjs";

import { Board } from "../src/Board.mjs";

describe("Scoring (clearing rows)", () => {

  let board;

  beforeEach(() => {
    board = new Board(8, 4);
  });

  it("Initial score is 0", () => {
    expect(board.scores.totalScore).to.equal(0);
  });

  it("one row: two I shapes land at the bottom, the line clears", () => {
    board.drop(Tetromino.I_SHAPE);
    board.moveLeft();
    board.moveLeft();
    fallToBottom(board);

    board.drop(Tetromino.I_SHAPE);
    board.moveRight();
    board.moveRight();

    fallToBottom(board);

    expect(board.scores.totalScore).to.equal(40);
  });


  it("two rows: four O shapes land at the bottom, the lines clear", () => {
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

    expect(board.scores.totalScore).to.equal(100);
  });


  it("three rows", () => {
    board = new Board(5, 10);

    for (let i = 0; i < 3; i++) {
      board.drop(Tetromino.I_SHAPE);
      moveToLeftEdge(board);
      fallToBottom(board);
    }

    expect(board.toString()).to.equalShape(`
    .....
    .....
    .....
    .....
    .....
    .....
    .....
    IIII.
    IIII.
    IIII.
    `);

    board.drop(Tetromino.I_SHAPE);
    board.tick(false);
    board.tick(false);
    board.rotateRight();
    moveToRightEdge(board);
    fallToBottom(board);

    expect(board.scores.totalScore).to.equal(300);
  });

  it("three rows", () => {
    board = new Board(5, 10);

    for (let i = 0; i < 4; i++) {
      board.drop(Tetromino.I_SHAPE);
      moveToLeftEdge(board);
      fallToBottom(board);
    }

    expect(board.toString()).to.equalShape(`
    .....
    .....
    .....
    .....
    .....
    .....
    IIII.
    IIII.
    IIII.
    IIII.
    `);

    board.drop(Tetromino.I_SHAPE);
    board.tick(false);
    board.tick(false);
    board.rotateRight();
    moveToRightEdge(board);
    fallToBottom(board);

    expect(board.scores.totalScore).to.equal(1200);
  });
});

describe("Scoring (clearing several rows)", () => {

  let board;

  beforeEach(() => {
    board = new Board(8, 4);
  });

  it("Clearing one row four times", () => {

    for (let i = 0; i < 4; i++) {

      board.drop(Tetromino.I_SHAPE);
      board.moveLeft();
      board.moveLeft();
      fallToBottom(board);

      board.drop(Tetromino.I_SHAPE);
      board.moveRight();
      board.moveRight();
      fallToBottom(board);
    }
    expect(board.scores.totalScore).to.equal(160); // 40 * 4

  });
});

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick(true);
  }
}