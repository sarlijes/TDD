import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Rotating falling tetrominoes", () => {

  let board;
  let shape_new;

  beforeEach(() => {
    board = new Board(12, 6);
    shape_new = Tetromino.T_SHAPE;
    board.drop(shape_new);
  });

  it("a falling tetromino can be rotated right", () => {
    board.rotateRight();
    expect(shape_new.rotateRight().toString()).to.equalShape(
      `.T.
       .TT
       .T.`
    );
    expect(board.toString()).to.equalShape(
      `.....T......
       .....TT.....
       .....T......
       ............
       ............
       ............`
    );
  });

  it("a falling tetromino can be rotated left", () => {
    board.rotateLeft();
    expect(board.currentlyFallingBlock.toString()).to.equalShape(
      `.T.
       TT.
       .T.`
    );
    let result = board.toString();
    expect(result).to.equalShape(
      `.....T......
       ....TT......
       .....T......
       ............
       ............
       ............`
    );
  });
});

describe("Rotating falling tetrominoes T_SHAPE - coordinates update correctly",
  () => {

    let board;
    beforeEach(() => {
      board = new Board(12, 6);
      let shape = Tetromino.T_SHAPE;
      board.drop(shape);
    });

    it("after rotating left", () => {
      board.rotateLeft();

      const position = board.currentlyFallingBlock.currentPosition;
      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(4);
      expect(position.y).to.equal(0);

      expect(board.toString()).to.equalShape(`
       .....T......
       ....TT......
       .....T......
       ............
       ............
       ............`
      );
    });

    it("after rotating right", () => {
      board.rotateRight();

      const position = board.currentlyFallingBlock.currentPosition;
      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(5);
      expect(position.y).to.equal(0);

      expect(board.toString()).to.equalShape(`
       .....T......
       .....TT.....
       .....T......
       ............
       ............
       ............`
      );
    });
  });

let s = "Rotating falling tetrominoes T_SHAPE - "
  + "coordinates update correctly also after having ticked downwards first";

describe(s,
  () => {

    let board;
    beforeEach(() => {
      board = new Board(12, 6);
      let shape = Tetromino.T_SHAPE;
      board.drop(shape);
      board.tick();
      board.tick();
    });

    it("after rotating left", () => {
      board.rotateLeft();

      const position = board.currentlyFallingBlock.currentPosition;
      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(4);
      expect(position.y).to.equal(2);

      expect(board.toString()).to.equalShape(`
       ............
       ............
       .....T......
       ....TT......
       .....T......
       ............`
      );
    });

    xit("after rotating right", () => {
      board.rotateRight();

      const position = board.currentlyFallingBlock.currentPosition;
      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(5);
      expect(position.y).to.equal(2);

      expect(board.toString()).to.equalShape(`
       ............
       ............
       .....T......
       .....TT.....
       .....T......
       ............`
      );
    });
  });

describe("Rotating falling tetrominoes O_SHAPE - coordinates update correctly",
  () => {

    let board;
    beforeEach(() => {
      board = new Board(10, 6);
      let shape = Tetromino.O_SHAPE;
      board.drop(shape);
    });

    it("after rotating left", () => {
      board.rotateLeft();

      const position = board.currentlyFallingBlock.currentPosition;
      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(4);
      expect(position.y).to.equal(0);

      expect(board.toString()).to.equalShape(`
      ....OO....
      ....OO....
      ..........
      ..........
      ..........
      ..........`
      );
    });

    it("after rotating right", () => {
      board.rotateRight();

      const position = board.currentlyFallingBlock.currentPosition;
      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(4);
      expect(position.y).to.equal(0);

      expect(board.toString()).to.equalShape(`
       ....OO....
       ....OO....
       ..........
       ..........
       ..........
       ..........`
      );
    });
  });

s = "Rotating falling tetrominoes O_SHAPE - "
  + "coordinates update correctly also after having ticked downwards first";


describe("Rotating falling tetrominoes O_SHAPE - coordinates update correctly",
  () => {

    let board;
    beforeEach(() => {
      board = new Board(10, 6);
      let shape = Tetromino.O_SHAPE;
      board.drop(shape);
      board.tick();
      board.tick();
    });

    it("after rotating left", () => {
      board.rotateLeft();

      const position = board.currentlyFallingBlock.currentPosition;
      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(4);
      expect(position.y).to.equal(2);

      expect(board.toString()).to.equalShape(`
      ..........
      ..........
      ....OO....
      ....OO....
      ..........
      ..........`
      );
    });

    it("after rotating right", () => {
      board.rotateRight();

      const position = board.currentlyFallingBlock.currentPosition;
      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(4);
      expect(position.y).to.equal(2);

      expect(board.toString()).to.equalShape(`
       ..........
       ..........
       ....OO....
       ....OO....
       ..........
       ..........`
      );
    });
  });


describe("Rotating falling tetrominoes I_SHAPE - coordinates update correctly",
  () => {

    let board;
    beforeEach(() => {
      board = new Board(10, 6);
      let shape = Tetromino.I_SHAPE;
      board.drop(shape);
      board.tick();
      board.tick();
    });

    it("after rotating left", () => {
      expect(board.toString()).to.equalShape(`
       ..........
       ..........
       ...IIII...
       ..........
       ..........
       ..........`
      );

      board.rotateLeft();

      expect(board.toString()).to.equalShape(`
       ..........
       ..........
       .....I....
       .....I....
       .....I....
       .....I....`
      );
      const position = board.currentlyFallingBlock.currentPosition;
      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(5);
      expect(position.y).to.equal(2);

    });

    it("after rotating right", () => {

      expect(board.toString()).to.equalShape(`
       ..........
       ..........
       ...IIII...
       ..........
       ..........
       ..........`
      );

      board.rotateRight();

      expect(board.toString()).to.equalShape(`
       ..........
       ..........
       .....I....
       .....I....
       .....I....
       .....I....`
      );
      const position = board.currentlyFallingBlock.currentPosition;
      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(5);
      expect(position.y).to.equal(2);


    });
  });


