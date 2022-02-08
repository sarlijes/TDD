import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Block } from "../src/Block.mjs";

describe("Empty boards", () => {
  it("Small board starts empty", () => {
    let board = new Board(3, 3);
    expect(board.toString()).to.equalShape(
      `...
       ...
       ...`
    );
  });

  it("Wide board starts empty", () => {
    let board = new Board(9, 3);
    expect(board.toString()).to.equalShape(
      `.........
       .........
       .........`
    );
  });
});

describe("Falling blocks", () => {
  let board;
  beforeEach(() => {
    board = new Board(3, 3);
  });

  describe("When a block is dropped", () => {
    beforeEach(() => {
      board.drop(new Block("X"));
    });

    it("it starts from the top middle", () => {
      expect(board.toString()).to.equalShape(
        `.X.
         ...
         ...`
      );
    });

    it("it starts from the top middle also for the wide board", () => {
      let wideBoard = new Board(9, 3);
      wideBoard.drop(new Block("X"));
      expect(wideBoard.toString()).to.equalShape(
        `....X....
        .........
        .........`
      );
    });

    it("it moves down one row per tick", () => {
      board.tick(false);

      expect(board.toString()).to.equalShape(
        `...
         .X.
         ...`
      );
    });

    it("at most one block may be falling at a time", () => {
      const before = board.toString();
      expect(() => board.drop(new Block("Y"))).to.throw("already falling");
      const after = board.toString();
      expect(after).to.equal(before);
    });
  });

  describe("When a block reaches the bottom", () => {
    beforeEach(() => {
      board.drop(new Block("X"));
      board.tick(false);
      board.tick(false);
    });

    it("it is still moving on the last row", () => {
      expect(board.toString()).to.equalShape(
        `...
         ...
         .X.`
      );
      expect(
        board.hasFalling(),
        "the player should still be able to move the block"
      ).to.be.true;
    });

    it("it stops when it hits the bottom", () => {
      board.tick(false);

      expect(board.toString()).to.equalShape(
        `...
         ...
         .X.`
      );
      expect(board.hasFalling(), "the block should stop moving").to.be.false;
    });
  });

  describe("When a block lands on another block", () => {
    beforeEach(() => {
      board.drop(new Block("X"));
      board.tick(false);
      board.tick(false);
      board.tick(false);
      board.drop(new Block("Y"));
      board.tick(false);
    });

    it("it is still moving on the row above the other block", () => {
      expect(board.toString()).to.equalShape(
        `...
         .Y.
         .X.`
      );
      expect(
        board.hasFalling(),
        "the player should still be able to move the block"
      ).to.be.true;
    });

    it("it stops when it hits the other block", () => {
      board.tick(false);

      expect(board.toString()).to.equalShape(
        `...
         .Y.
         .X.`
      );
      expect(board.hasFalling(), "the block should stop moving").to.be.false;
    });
  });
});
