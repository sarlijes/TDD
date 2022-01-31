import { expect } from "chai";
import { listOccupied, twoDimensionalArraytoString } from "../src/Utils.mjs";
import { Board } from "../src/Board.mjs";
import { Block } from "../src/Block.mjs";

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

function fallToBottom(board) {
  for (let i = 0; i < board.height; i++) {
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
    fallToBottom(board);

    const occupied = listOccupied(board);
    expect(occupied.length).to.equal(1);
  });

  it("One block has been dropped to the bottom - correct coordinates", () => {
    let board = new Board(3, 3);
    board.drop(new Block("xs"));
    fallToBottom(board);

    const occupied = listOccupied(board);
    expect(occupied[0].x).to.equal(1);
    expect(occupied[0].y).to.equal(2);
  });
});

