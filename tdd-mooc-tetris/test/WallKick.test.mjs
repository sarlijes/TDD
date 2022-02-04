import { expect } from "chai";
import { Tetromino } from "../src/Tetromino.mjs";
import {
  fallToBottom,
  getCrowdedBoard,
  moveToLeftEdge,
  moveToRightEdge
} from "./TestHelpers.mjs";

import { Board } from "../src/Board.mjs";
// - it cannot be rotated when there is no room to rotate
// - [wall kick](https://tetris.fandom.com/wiki/Wall_kick):
//    when it is up against a wall and is rotated, but there is no
//   room to rotate, move it away from the wall if possible

describe("Wall kicks", () => {


  let board;
  let shape;

  beforeEach(() => {
    board = new Board(12, 6);
    shape = Tetromino.T_SHAPE;
    board.drop(shape);
  });

  it("Initial setup", () => {
    expect(board.toString()).to.equalShape(
      `.....T......
       ....TTT.....
       ............
       ............
       ............
       ............`
    );
  });

  it("After rotating to right", () => {
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
    board.rotateRight();
    moveToLeftEdge(board);
    board.rotateRight();
    expect(board.toString()).to.equalShape(`
       ............
       TTT.........
       .T..........
       ............
       ............
       ............`
    );
  });


  it("", () => {

  });


  it("", () => {

  });
});


