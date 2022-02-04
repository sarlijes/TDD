import { expect } from "chai";
import { Tetromino } from "../src/Tetromino.mjs";
import { moveToLeftEdge, moveToRightEdge } from "./TestHelpers.mjs";

import { Board } from "../src/Board.mjs";

describe("Wall kicks", () => {

  it("After rotating to right", () => {
    let board = new Board(12, 6);
    let shape = Tetromino.T_SHAPE;
    board.drop(shape);

    board.rotateRight();
    expect(board.toString()).to.equalShape(`
      .....T......
      .....TT.....
      .....T......
      ............
      ............
      ............`
    );
  });

  it("After rotating right and moved to left egde", () => {
    let board = new Board(12, 6);
    let shape = Tetromino.T_SHAPE;
    board.drop(shape);

    board.rotateRight();
    moveToLeftEdge(board);
    expect(board.toString()).to.equalShape(`
       T...........
       TT..........
       T...........
       ............
       ............
       ............`
    );
  });

  it("After rotating right, moved to left egde and rotated", () => {
    let board = new Board(12, 6);
    let shape = Tetromino.T_SHAPE;
    board.drop(shape);

    board.rotateRight();
    moveToLeftEdge(board);

    board.rotateRight();
    expect(board.toString()).to.equalShape(`
       ............
       .TTT........
       ..T.........
       ............
       ............
       ............`
    );
  });

  it("After rotating left, moved to right egde and rotated", () => {
    let board = new Board(12, 6);
    let shape = Tetromino.T_SHAPE;
    board.drop(shape);

    board.rotateLeft();
    moveToRightEdge(board);

    board.rotateLeft(true);
    expect(board.toString()).to.equalShape(`
       ............
       .........TTT
       ..........T.
       ............
       ............
       ............`
    );
  });
});


