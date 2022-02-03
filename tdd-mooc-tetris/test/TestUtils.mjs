/* eslint-disable linebreak-style */
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function getCrowdedBoard() {
  let board;
  board = new Board(8, 3);
  board.drop(Tetromino.I_SHAPE);
  board.moveLeft();
  board.moveLeft();
  fallToBottom(board);

  board.drop(Tetromino.I_SHAPE);
  board.moveRight();
  board.moveRight();
  fallToBottom(board);

  board.drop(Tetromino.O_SHAPE);
  board.moveLeft();
  board.moveLeft();
  board.moveLeft();
  fallToBottom(board);

  board.drop(Tetromino.O_SHAPE);
  board.moveRight();
  board.moveRight();
  board.moveRight();
  fallToBottom(board);

  return board;
}


function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

export {
  getCrowdedBoard
};