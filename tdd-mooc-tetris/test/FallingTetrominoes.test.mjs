import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

// TODO remove after everything works
// eslint-disable-next-line no-unused-vars
function printHelper(result) {
  const splitted = result.split("\n");

  for (let row in splitted) {
    console.log(splitted[row]);
  }
}

describe("T_SHAPE Tetromino: Falling tetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("start from the top middle", () => {
    board.drop(Tetromino.T_SHAPE);

    const result = board.toString();

    expect(result).to.equalShape(
      `....T.....
       ...TTT....
       ..........
       ..........
       ..........
       ..........`
    );
  });

  it("stop when they hit the bottom", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ....T.....
       ...TTT....`
    );
  });

  it("stop when they land on another block", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ....T.....
       ...TTT....
       ....T.....
       ...TTT....`
    );
  });
});


describe("I_SHAPE Tetromino: Falling tetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("start from the top middle", () => {
    board.drop(Tetromino.I_SHAPE);

    const result = board.toString();

    expect(result).to.equalShape(
      `...IIII...
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
  });
});

describe("O_SHAPE Tetromino: Falling tetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("start from the top middle", () => {
    board.drop(Tetromino.O_SHAPE);

    const result = board.toString();

    expect(result).to.equalShape(
      `....OO....
       ....OO....
       ..........
       ..........
       ..........
       ..........`
    );
  });
});

describe("T_SHAPE Tetromino: Falling tetrominoes - smaller board", () => {
  let board;
  beforeEach(() => {
    board = new Board(3, 3);
  });

  it("start from the top middle", () => {
    board.drop(Tetromino.T_SHAPE);

    const result = board.toString();
    expect(result).to.equalShape(
      `.T.
       TTT
       ...`
    );
  });

  it("stop when they hit the bottom", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);

    const result = board.toString();
    expect(result).to.equalShape(
      `...
      .T.
      TTT`
    );
  });



});
describe("different tetrominoes have correct starting position", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("T_SHAPE start from the top middle", () => {
    let shape = new Tetromino(Tetromino.T_SHAPE.shape, 0, 4, "T_SHAPE");

    board.drop(shape);
    const position = board.currentlyFallingBlock.currentPosition;

    expect(position).not.to.equal(undefined);
    expect(position.x).to.equal(3);
    expect(position.y).to.equal(0);

    expect(board.toString()).to.equalShape(`
      ....T.....
      ...TTT....
      ..........
      ..........
      ..........
      ..........
      `);
  });

  it("O_SHAPE start from the top middle", () => {
    let shape = Tetromino.O_SHAPE;
    board.drop(shape);
    const position = shape.currentPosition;

    expect(position).not.to.equal(undefined);
    expect(position.x).to.equal(4);
    expect(position.y).to.equal(0);

    expect(board.toString()).to.equalShape(
      `....OO....
       ....OO....
       ..........
       ..........
       ..........
       ..........`
    );
  });

  it("I_SHAPE start from the top middle", () => {
    let shape = Tetromino.I_SHAPE;
    board.drop(shape);
    const position = shape.currentPosition;

    expect(position).not.to.equal(undefined);
    expect(position.x).to.equal(3);
    expect(position.y).to.equal(0);

    expect(board.toString()).to.equalShape(
      `...IIII...
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
  });
});

describe(
  "different tetrominoes have correct starting position after moving down",
  () => {
    let board;
    beforeEach(() => {
      board = new Board(10, 6);
    });

    it("T_SHAPE is moved one down", () => {
      let shape = Tetromino.T_SHAPE;
      board.drop(shape);
      board.moveDown();

      const position = board.currentlyFallingBlock.currentPosition;

      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(3);
      expect(position.y).to.equal(1);

      expect(board.toString()).to.equalShape(`
        ..........
        ....T.....
        ...TTT....
        ..........
        ..........
        ..........
        `);
    });

    it("T_SHAPE is ticked moved one down", () => {
      let shape = Tetromino.T_SHAPE;
      board.drop(shape);
      board.tick();

      const position = board.currentlyFallingBlock.currentPosition;

      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(3);
      expect(position.y).to.equal(1);

      expect(board.toString()).to.equalShape(`
        ..........
        ....T.....
        ...TTT....
        ..........
        ..........
        ..........
        `);
    });

    it("I_SHAPE is moved one down", () => {

    });

    it("I_SHAPE is moved one down", () => {
      let shape = Tetromino.I_SHAPE;
      board.drop(shape);
      board.moveDown();

      const position = board.currentlyFallingBlock.currentPosition;

      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(3);
      expect(position.y).to.equal(1);

      expect(board.toString()).to.equalShape(
        `..........
         ...IIII...
         ..........
         ..........
         ..........
         ..........`
      );
    });

    it("I_SHAPE is ticked moved one down", () => {
      let shape = Tetromino.I_SHAPE;
      board.drop(shape);
      board.tick();

      const position = board.currentlyFallingBlock.currentPosition;

      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(3);
      expect(position.y).to.equal(1);

      expect(board.toString()).to.equalShape(
        `..........
         ...IIII...
         ..........
         ..........
         ..........
         ..........`
      );
    });

    it("O_SHAPE is moved one down", () => {
      let shape = Tetromino.O_SHAPE;
      board.drop(shape);
      board.moveDown();

      const position = board.currentlyFallingBlock.currentPosition;

      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(4);
      expect(position.y).to.equal(1);

      expect(board.toString()).to.equalShape(
        `..........
         ....OO....
         ....OO....
         ..........
         ..........
         ..........`
      );
    });

    it("O_SHAPE is ticked moved one down", () => {
      let shape = Tetromino.O_SHAPE;
      board.drop(shape);
      board.tick();

      const position = board.currentlyFallingBlock.currentPosition;

      expect(position).not.to.equal(undefined);
      expect(position.x).to.equal(4);
      expect(position.y).to.equal(1);

      expect(board.toString()).to.equalShape(
        `..........
         ....OO....
         ....OO....
         ..........
         ..........
         ..........`
      );
    });

    it("O_SHAPE is moved one down", () => {

    });
    // same for going left and going right + one test with several moves
    // then proceed to rotating
    it("", () => {

    });


  });