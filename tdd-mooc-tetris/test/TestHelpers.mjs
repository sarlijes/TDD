/* eslint-disable linebreak-style */
import { Board } from "../src/Board.mjs";
import { NewTetromino } from "../src/NewTetromino.mjs";

function getCrowdedBoard() {
  let board;
  board = new Board(8, 3);
  board.drop(NewTetromino.I_SHAPE);
  board.moveLeft();
  board.moveLeft();
  fallToBottom(board);

  board.drop(NewTetromino.I_SHAPE);
  board.moveRight();
  board.moveRight();
  fallToBottom(board);

  board.drop(NewTetromino.O_SHAPE);
  board.moveLeft();
  board.moveLeft();
  board.moveLeft();
  fallToBottom(board);

  board.drop(NewTetromino.O_SHAPE);
  board.moveRight();
  board.moveRight();
  board.moveRight();
  fallToBottom(board);

  return board;
}
// Crowded board looks like this:
//
// OO....OO
// OO....OO
// IIIIIIII

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

export {
  getCrowdedBoard,
  fallToBottom
};