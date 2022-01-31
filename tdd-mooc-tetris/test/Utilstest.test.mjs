import { expect } from "chai";
import { listOccupied, listMoving, twoDimensionalArraytoString } from "../src/Utils.mjs";
import { Board } from "../src/Board.mjs";
import { Block } from "../src/Block.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("2-dimensional array to string", () => {
  it("2-dimensional array of integers", () => {
    let arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = twoDimensionalArraytoString(arr);
    expect(result.toString()).to.equal("123\n456\n789\n");
  });

  it("2-dimensional array of chars", () => {
    let arr = [
      ["1", "2", "3"],
      ["4", "5", "6"],
    ];
    const result = twoDimensionalArraytoString(arr);
    expect(result.toString()).to.equal("123\n456\n");
  });
});

function blockFallToBottom(board) {
  for (let i = 0; i < board.height; i++) {
    board.tick();
  }
}

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Blocks - list occupied Points", () => {
  it("No block has been dropped", () => {
    let board = new Board(3, 3);
    const occupied = listOccupied(board);
    expect(occupied.length).to.equal(0);
  });

  it("One block has been dropped to the bottom - correct amount of Points", () => {
    let board = new Board(3, 3);
    board.drop(new Block("x"));
    blockFallToBottom(board);

    const occupied = listOccupied(board);
    expect(occupied.length).to.equal(1);
  });

  it("One block has been dropped to the bottom - correct coordinates", () => {
    let board = new Board(3, 3);
    board.drop(new Block("x"));
    blockFallToBottom(board);

    const occupied = listOccupied(board);
    expect(occupied[0].x).to.equal(1);
    expect(occupied[0].y).to.equal(2);
  });

  it("Two blocks have been dropped to the bottom - correct amount of occupied points", () => {
    let board = new Board(3, 3);
    board.drop(new Block("x"));
    blockFallToBottom(board);
    board.drop(new Block("x"));
    blockFallToBottom(board);

    const occupied = listOccupied(board);
    expect(occupied.length).to.equal(2);
  });

  it("Two blocks have been dropped to the bottom - correct coordinates", () => {
    let board = new Board(3, 3);
    board.drop(new Block("x"));
    blockFallToBottom(board);

    board.drop(new Block("x"));
    blockFallToBottom(board);

    const occupied = listOccupied(board);
    expect(occupied[1].x).to.equal(1);
    expect(occupied[1].y).to.equal(2);

    expect(occupied[0].x).to.equal(1);
    expect(occupied[0].y).to.equal(1);
  });

});

describe("Tetrominoes - list occupied Points", () => {

  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("No Tetromino has been dropped", () => {
    const occupied = listOccupied(board);
    expect(occupied.length).to.equal(0);
  });

  xit("One Tetromino has been dropped to the bottom - correct amount of Points", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);

    const occupied = listOccupied(board);
    expect(occupied.length).to.equal(4);
  });

  // it("One Tetromino has been dropped to the bottom - correct coordinates", () => {
  //   let board = new Board(3, 3);
  //   board.drop(new Block("xs"));
  //   fallToBottom(board);

  //   const occupied = listOccupied(board);
  //   expect(occupied[0].x).to.equal(1);
  //   expect(occupied[0].y).to.equal(2);
  // });
});


describe("List Points of moving items on a board", () => {

  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("Nothing has been dropped", () => {
    const moving = listMoving(board);
    expect(moving.length).to.equal(0);
  });

  it("One Block has been dropped - correct amount of moving Points", () => {
    board.drop(new Block("y"));

    const moving = listMoving(board);
    expect(moving.length).to.equal(1);
  });

  it("One Block has been dropped to the bottom - correct amount of moving Points", () => {
    board.drop(new Block("y"));
    fallToBottom(board);
    const moving = listMoving(board);
    expect(moving.length).to.equal(0);
  });

  it("One Tetramino has been dropped to the bottom - correct amount of moving Points", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);
    const moving = listMoving(board);
    expect(moving.length).to.equal(0);
  });

  // it("One Tetromino has been dropped to the bottom - correct coordinates", () => {
  //   let board = new Board(3, 3);
  //   board.drop(new Block("xs"));
  //   fallToBottom(board);

  //   const occupied = listOccupied(board);
  //   expect(occupied[0].x).to.equal(1);
  //   expect(occupied[0].y).to.equal(2);
  // });
});
