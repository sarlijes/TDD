import { Block } from "./Block.mjs";
import { Tetromino } from "./Tetromino.mjs";
import {
  twoDimensionalArraytoString,
  isLowerCase,
  listOccupied,
  listMoving,
  overlaps,
  getPotentialNewCoordinatesOfMovingItem
} from "./Utils.mjs";

export class Board {
  width;
  height;
  board;
  currentlyFallingBlock;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = [];
    for (let i = 0; i < height; i++) {
      this.temp = [];
      for (let j = 0; j < width; j++) {
        this.temp.push(".");
      }
      this.board.push(this.temp);
    }
  }

  hasFalling() {
    return this.currentlyFallingBlock !== undefined;
  }

  toString() {
    return twoDimensionalArraytoString(this.board);
  }

  // lowercase char is considered as a moving block
  drop(block) {
    if (this.currentlyFallingBlock !== undefined) {
      throw new Error("already falling");
    }

    if (block instanceof Block) {

      // Simply place the Block to the middle of the first row
      this.board[0][Math.floor(this.width / 2)] = block.color.toLowerCase();
    }

    if (block instanceof Tetromino) {
      let clearance = Math.floor(this.width / 3);
      if (clearance === 1) {
        clearance = 0;
      }
      const startingYPosition = 0;

      // Draw the Tetromino on the board
      for (let i = 0; i < block.height; i++) {
        for (let j = 0; j < block.width; j++) {
          if (block.shape[i][j] !== ".") {

            if (block.shape_enum === "T_SHAPE") {
              this.board[i][clearance + j] = block.color;
              if (block.currentPosition === undefined) {
                block.currentPosition = { x: clearance + j - 1, y: 0 };
              }
            }

            if (block.shape_enum === "I_SHAPE") {
              this.board[startingYPosition][clearance + j] = block.color;

              if (block.currentPosition === undefined) {
                block.currentPosition = { x: clearance + j, y: 0 };
              }

            }

            if (block.shape_enum === "O_SHAPE") {
              this.board[i][clearance + j] = block.color;
              if (block.currentPosition === undefined) {
                block.currentPosition = { x: clearance + j, y: 0 };
              }
            }

          }
        }
      }
    }
    this.currentlyFallingBlock = block;
  }

  // TODO refactor to be shorter
  tick() {
    const { couldBeMoved,
      coordinatesOfMovingItems,
      potentialNewCoordinatesOfMovingItem
    } = this.couldBeMoved("down");

    // Find the currently falling block's char
    let char;
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (isLowerCase(this.board[i][j])) {
          char = this.board[i][j];
          break;
        }
      }
    }

    if (couldBeMoved) {
      this.moveShape(
        coordinatesOfMovingItems,
        char,
        potentialNewCoordinatesOfMovingItem
      );

    } else {
      // Board cannot be ticked (= moving item cannot go downwards)
      // Stop possible moving items, set hasFalling to false
      for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
          if (isLowerCase(this.board[i][j])) {
            this.board[i][j] = char.toUpperCase();
            this.currentlyFallingBlock = undefined;
          }
        }
      }

    }
  }

  moveLeft() {
    const { couldBeMoved,
      coordinatesOfMovingItems,
      potentialNewCoordinatesOfMovingItem } = this.couldBeMoved("left");

    let char;

    if (couldBeMoved) {
      this.moveShape(
        coordinatesOfMovingItems,
        char,
        potentialNewCoordinatesOfMovingItem
      );
    }
  }

  moveRight() {
    const { couldBeMoved,
      coordinatesOfMovingItems,
      potentialNewCoordinatesOfMovingItem } = this.couldBeMoved("right");

    let char;

    if (couldBeMoved) {
      this.moveShape(
        coordinatesOfMovingItems,
        char,
        potentialNewCoordinatesOfMovingItem
      );
    }
  }

  moveDown() {
    const { couldBeMoved,
      coordinatesOfMovingItems,
      potentialNewCoordinatesOfMovingItem } = this.couldBeMoved("down");

    let char;

    if (couldBeMoved) {
      this.moveShape(
        coordinatesOfMovingItems,
        char,
        potentialNewCoordinatesOfMovingItem
      );
    }
  }

  moveShape(coordinatesOfMovingItems, char,
    potentialNewCoordinatesOfMovingItem) {

    for (let i in coordinatesOfMovingItems) {
      let point = coordinatesOfMovingItems[i];
      let old_y = point.y;
      let old_x = point.x;
      char = this.board[old_y][old_x];
      // Remove the block from it's current place
      this.board[old_y][old_x] = ".";
    }

    for (let i in potentialNewCoordinatesOfMovingItem) {
      let point = potentialNewCoordinatesOfMovingItem[i];
      let new_y = point.y;
      let new_x = point.x;
      // Add the block to the new position
      this.board[new_y][new_x] = char;
    }
    const firstNewCoordinate = potentialNewCoordinatesOfMovingItem[0];
    this.updateCurrentPosition(firstNewCoordinate.x, firstNewCoordinate.y);
  }

  updateCurrentPosition(x, y) {
    if (this.currentlyFallingBlock.shape_enum === "T_SHAPE") {

      if (this.board[y][x] !== "."
        && this.board[y + 1][x - 1] !== ".") {
        this.currentlyFallingBlock.currentPosition =
          { x: x - 1, y: y };
        return;
      }
    }
    this.currentlyFallingBlock.currentPosition =
      { x: x, y: y };

  }

  couldBeMoved(direction) {
    // 0. Find the coordinates of the items currently moving item
    const coordinatesOfMovingItems = listMoving(this);

    // 1. Find the coordinates of the already occupied spaces of the board
    const occupied = listOccupied(this);

    // 2. Investigate whether the current moving item could be moved or not
    const potentialNewCoordinatesOfMovingItem =
      getPotentialNewCoordinatesOfMovingItem(coordinatesOfMovingItems, this,
        direction);

    const newPotentialPositionWasFound =
      potentialNewCoordinatesOfMovingItem.length > 0;
    const newPotentialPositionIsSafe =
      !overlaps(potentialNewCoordinatesOfMovingItem, occupied);
    const allItemsCanBeRepositioned = potentialNewCoordinatesOfMovingItem.length
      === coordinatesOfMovingItems.length;

    const couldBeMoved = newPotentialPositionWasFound &&
      newPotentialPositionIsSafe &&
      allItemsCanBeRepositioned;

    return {
      couldBeMoved,
      coordinatesOfMovingItems,
      potentialNewCoordinatesOfMovingItem
    };
  }

  rotateRight() {
    // Rotate the block and save the rotated version into a new variable
    const rotatedBlock = this.currentlyFallingBlock.rotateRight();
    this.rotate(rotatedBlock);
  }

  rotate(rotatedBlock) {

    // Find the coordinates of the currently falling block
    const currentCoordinates = this.currentlyFallingBlock.currentPosition;


    // Wipe the block away from the board

    for (let i = 0; i < this.currentlyFallingBlock.shape.length; i++) {
      for (let j = 0; j < this.currentlyFallingBlock.shape[0].length; j++) {

        let xWithOffset = i + currentCoordinates.x;
        let yWithOffset = j + currentCoordinates.y;

        if (isLowerCase(this.board[yWithOffset][xWithOffset])) {
          this.board[yWithOffset][xWithOffset] = ".";
        }
        if (i === 0 && j === 0) {
          // Update coordinates
          // rotatedBlock.currentPosition = { x: xWithOffset + 2, y: yWithOffset };
          this.updateCurrentPosition(xWithOffset, yWithOffset);
          rotatedBlock.currentPosition = this.currentlyFallingBlock.currentPosition;
        }

      }
    }

    // Re-draw the rotated block to the board

    for (let i = 0; i < rotatedBlock.shape.length; i++) {
      for (let j = 0; j < rotatedBlock.shape[0].length; j++) {

        let xWithOffset = i + currentCoordinates.x;
        let yWithOffset = j + currentCoordinates.y;

        if (rotatedBlock.shape[j][i] !== ".") {
          let char = rotatedBlock.shape[j][i];
          this.board[yWithOffset][xWithOffset] = char;
        }
      }
    }
    // Set the rotated shape to currentlyFallingBlock
    this.currentlyFallingBlock = rotatedBlock;
  }

  rotateLeft() {
    // Rotate the block and save the rotated version into a new variable
    const rotatedBlock = this.currentlyFallingBlock.rotateLeft();
    this.rotate(rotatedBlock);
  }

}