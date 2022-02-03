import { expect } from "chai";
import {
  listOccupied,
  listMoving,
  twoDimensionalArraytoString,
  overlaps,
  getPotentialNewCoordinatesOfMovingItem,
  twoDimensionalArraysMatch,
  getPotentialNewCoordinatesOfRotatingItem
} from "../src/Utils.mjs";

import { Board } from "../src/Board.mjs";
import { Block } from "../src/Block.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { fallToBottom } from "./TestHelpers.mjs";

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
    board.drop(new Block("x"));
    fallToBottom(board);

    const occupied = listOccupied(board);
    expect(occupied[0].x).to.equal(1);
    expect(occupied[0].y).to.equal(2);
  });

  it("2 blocks have been dropped to the bottom - correct amount of occupied points",
    () => {
      let board = new Board(3, 3);
      board.drop(new Block("x"));
      fallToBottom(board);
      board.drop(new Block("x"));
      fallToBottom(board);

      const occupied = listOccupied(board);
      expect(occupied.length).to.equal(2);
    });

  it("Two blocks have been dropped to the bottom - correct coordinates", () => {
    let board = new Board(3, 3);
    board.drop(new Block("x"));
    fallToBottom(board);

    board.drop(new Block("x"));
    fallToBottom(board);

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

  it("T_SHAPE has been dropped to the bottom - correct amount of occupied points",
    () => {
      board.drop(Tetromino.T_SHAPE);
      fallToBottom(board);

      const occupied = listOccupied(board);
      expect(occupied.length).to.equal(4);
    });

  it("One T_SHAPE has been dropped to the bottom - correct coordinates",
    () => {
      let board = new Board(3, 3);
      board.drop(Tetromino.T_SHAPE);
      fallToBottom(board);

      // ...
      // .T.
      // TTT

      const occupied = listOccupied(board);
      expect(occupied[0].x).to.equal(1);
      expect(occupied[0].y).to.equal(1);

      expect(occupied[1].x).to.equal(0);
      expect(occupied[1].y).to.equal(2);

      expect(occupied[2].x).to.equal(1);
      expect(occupied[2].y).to.equal(2);

      expect(occupied[3].x).to.equal(2);
      expect(occupied[3].y).to.equal(2);
    });
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

  it("1 Block has been dropped - correct amount of moving Points", () => {
    board.drop(new Block("y"));

    const moving = listMoving(board);
    expect(moving.length).to.equal(1);
  });

  it("1 Block has been dropped to the bottom - correct amount of moving Points",
    () => {
      board.drop(new Block("y"));
      fallToBottom(board);
      const moving = listMoving(board);
      expect(moving.length).to.equal(0);
    });

  it("1 Tetramino has been dropped to the bottom - correct amount of moving Points",
    () => {
      board.drop(Tetromino.T_SHAPE);
      fallToBottom(board);
      const moving = listMoving(board);
      expect(moving.length).to.equal(0);
    });

  it("1 Tetromino has been dropped to the bottom - correct coordinates", () => {
    let board = new Board(3, 3);
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);

    const moving = listMoving(board);
    expect(moving.length).to.equal(0);
  });
});

describe("Points list overlaps", () => {

  let list1;
  let list2;

  beforeEach(() => {
    list1 = [];
    list2 = [];
  });

  it("Empty", () => {
    const overlap = overlaps(list1, list2);
    expect(overlap).to.equal(false);
  });

  it("Different Points in both", () => {
    list1.push({ x: 0, y: 0 });
    list2.push({ x: 55, y: 55 });

    const overlap = overlaps(list1, list2);
    expect(overlap).to.equal(false);
  });

  it("Two same Points in both", () => {
    list1.push({ x: 0, y: 0 });
    list2.push({ x: 0, y: 0 });
    list2.push({ x: 55, y: 55 });

    const overlap = overlaps(list1, list2);
    expect(overlap).to.equal(true);
  });

  it("Several same Points in both", () => {
    list1.push({ x: 0, y: 0 });
    list2.push({ x: 0, y: 0 });

    list1.push({ x: 3, y: 9 });
    list2.push({ x: 3, y: 9 });

    list1.push({ x: 2, y: 5 });
    list2.push({ x: 0, y: 5 });

    const overlap = overlaps(list1, list2);
    expect(overlap).to.equal(true);
  });

});

describe("New potential positions of moving items", () => {
  let board;
  beforeEach(() => {
    board = new Board(5, 5);
  });

  it("Basic X block", () => {
    board.drop(new Block("x"));
    let tickedOnce = getPotentialNewCoordinatesOfMovingItem(
      listMoving(board), board);
    expect(tickedOnce.length).to.equal(1);
    expect(tickedOnce[0].x).to.equal(2);
    expect(tickedOnce[0].y).to.equal(1);
  });

  it("T tetramino", () => {
    board = new Board(10, 6);
    board.drop(Tetromino.T_SHAPE);
    let tickedOnce = getPotentialNewCoordinatesOfMovingItem(
      listMoving(board), board);
    expect(tickedOnce.length).to.equal(4);

    expect(tickedOnce[0].x).to.equal(4);
    expect(tickedOnce[0].y).to.equal(1);

    expect(tickedOnce[1].x).to.equal(3);
    expect(tickedOnce[1].y).to.equal(2);

    expect(tickedOnce[2].x).to.equal(4);
    expect(tickedOnce[2].y).to.equal(2);

    expect(tickedOnce[3].x).to.equal(5);
    expect(tickedOnce[3].y).to.equal(2);

    //       (4,1)
    // (3,2) (4,2) (5,2)

    // ..........
    // ....T.....
    // ...TTT....
    // ..........
    // ..........
    // ..........
  });
});

let s = "New potential positions of moving items - " +
  "corner cases regarding the bottom of the board";

describe(s, () => {
  let board;
  beforeEach(() => {
    board = new Board(5, 5);
  });

  it("Basic X block", () => {
    board.drop(new Block("x"));
    board.tick();
    board.tick();
    board.tick();
    board.tick();
    // .....
    // .....
    // .....
    // .....
    // ..X..
    let newPosition = getPotentialNewCoordinatesOfMovingItem(
      listMoving(board), board);
    expect(newPosition.length).to.equal(0);
  });

  // TODO pending implementation
  it("T tetramino", () => {
    board = new Board(10, 6);
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);
    let newPosition = getPotentialNewCoordinatesOfMovingItem(
      listMoving(board), board);
    expect(newPosition.length).to.equal(0);

    // ..........
    // ..........
    // ..........
    // ..........
    // ....T.....
    // ...TTT....
  });
});


describe("Two dimensional arrays match", () => {

  const arr1 = [
    [".", "t", "."],
    ["t", "t", "t"],
    [".", ".", "."],
  ];
  const arr2 = [
    [".", "T", "."],
    ["T", "T", "T"],
    [".", ".", "."],
  ];
  const arr3 = [
    [".", "t", "."],
    ["t", "t", "."],
    [".", "t", "."],
  ];
  const arr4 = [
    [".", "t", "."],
    [".", "t", "t"],
    [".", "t", "."],
  ];
  const arr5 = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ];

  xit("Same array is the same", () => {
    expect(twoDimensionalArraysMatch(arr5, arr5)).to.be.true;
  });

  it("Same array with different case is the same", () => {
    expect(twoDimensionalArraysMatch(arr1, arr2)).to.be.true;
  });

  it("Different arrays are not the same", () => {
    expect(twoDimensionalArraysMatch(arr1, arr3)).to.be.false;
    expect(twoDimensionalArraysMatch(arr1, arr4)).to.be.false;
    expect(twoDimensionalArraysMatch(arr1, arr5)).to.be.false;
    expect(twoDimensionalArraysMatch(arr3, arr2)).to.be.false;
  });

});

describe("Can get potential new coordinates of rotating item", () => {

  // let board;
  // let shape;


  // it("when there is plenty of space to rotate", () => {

  //   let board = new Board(10, 6);
  //   let shape = Tetromino.I_SHAPE;
  //   board.drop(shape);
  //   board.tick();
  //   board.tick();

  //   const rotatedBlock = shape.rotateLeft();

  //   const position = board.currentlyFallingBlock.currentPosition;

  //   const newCoordinates = getPotentialNewCoordinatesOfRotatingItem(
  //     rotatedBlock, position, board.board);

  //   expect(newCoordinates.length).to.equal(4);

  //   expect(newCoordinates[0].x).to.equal(5);
  //   expect(newCoordinates[0].y).to.equal(2);

  //   expect(newCoordinates[1].x).to.equal(5);
  //   expect(newCoordinates[1].y).to.equal(3);

  //   expect(newCoordinates[2].x).to.equal(5);
  //   expect(newCoordinates[2].y).to.equal(4);

  //   expect(newCoordinates[3].x).to.equal(5);
  //   expect(newCoordinates[3].y).to.equal(5);

  //   //    ..........
  //   //    ..........
  //   //    .....I....
  //   //    .....I....
  //   //    .....I....
  //   //    .....I....
  // });



  it("when the space is limited - tiny board", () => {

    let board = new Board(4, 1);
    let shape = Tetromino.I_SHAPE;
    board.drop(shape);
    //    IIII
    const rotatedBlock = shape.rotateLeft();
    const position = board.currentlyFallingBlock.currentPosition;

    const newCoordinates = getPotentialNewCoordinatesOfRotatingItem(
      rotatedBlock, position, board.board);

    expect(newCoordinates.length).to.equal(1);
  });

  it("when trying to rotate shape O (that doesn't rotate)", () => {

  });

  it("when the space is limited - crowded board - I shape", () => {

  });

});