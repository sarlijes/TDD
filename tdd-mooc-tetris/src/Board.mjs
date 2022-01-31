import { Block } from "./Block.mjs";
import { Tetromino } from "./Tetromino.mjs";
import { twoDimensionalArraytoString, isLowerCase, listOccupied, listMoving, overlaps, getPotentialNewPositionOfMovingItem } from "./Utils.mjs";

export class Board {
  width;
  height;
  board;
  hasFallingBlock;

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
    //console.log("board now:")
    //console.log(this.board)
    this.hasFallingBlock = false;
  }

  hasFalling() {
    return this.hasFallingBlock;
  }

  toString() {
    return twoDimensionalArraytoString(this.board);
  }

  // lowercase char is considered as a moving block
  drop(block) {
    if (this.hasFallingBlock) {
      throw new Error("already falling");
    }

    if (block instanceof Block) {

      // Simply place the Block to the middle of the first row
      this.board[0][Math.floor(this.width / 2)] = block.color.toLowerCase();
    }

    if (block instanceof Tetromino) {
      const clearance = 3;
      const startingYPosition = 0;

      // Draw the Tetromino on the board
      for (let i = 0; i < block.height; i++) {
        for (let j = 0; j < block.width; j++) {
          if (block.shape[i][j] !== ".") {

            if (block.shape_enum === "T_SHAPE") {
              this.board[i][clearance + j] = block.color;
            }

            if (block.shape_enum === "I_SHAPE") {
              this.board[startingYPosition][clearance + j] = block.color;
            }

            if (block.shape_enum === "O_SHAPE") {
              this.board[i][clearance + j] = block.color;
            }

          }
        }
      }
    }
    this.hasFallingBlock = true;
  }

  // TODO refactor to be shorter
  tick() {
    // 0. Find the coordinates of the items currently moving
    const coordinatesOfMovingItems = listMoving(this);

    // 1. Find the coordinates of the already occupied spaces of the board
    const occupied = listOccupied(this);

    // 2. Investigate whether the current block or Tetramino could be ticked or not
    const potentialNewPositionOfMovingItem =
      getPotentialNewPositionOfMovingItem(coordinatesOfMovingItems, this);

    const newPotentialPositionWasFound = potentialNewPositionOfMovingItem.length > 0;
    const newPotentialPositionIsSafe = !overlaps(potentialNewPositionOfMovingItem, occupied);
    const allItemsCanBeRepositioned = potentialNewPositionOfMovingItem.length === coordinatesOfMovingItems.length;

    const couldBeTicked = newPotentialPositionWasFound &&
      newPotentialPositionIsSafe &&
      allItemsCanBeRepositioned;


    // 3b. If yes, tick
    // 3b. If not, stop the item

    // Find the currently falling block's char
    let char = "";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (isLowerCase(this.board[i][j])) {
          char = this.board[i][j];
        }
      }
    }

    if (couldBeTicked) {
      for (let i in potentialNewPositionOfMovingItem) {
        let point = potentialNewPositionOfMovingItem[i];
        let new_y = point.y;
        let new_x = point.x;
        // Remove the block from it's current place
        this.board[new_y - 1][new_x] = ".";
      }

      for (let i in potentialNewPositionOfMovingItem) {
        let point = potentialNewPositionOfMovingItem[i];
        let new_y = point.y;
        let new_x = point.x;
        // Add the block to the new position
        this.board[new_y][new_x] = char;
      }

    } else {
      // Board cannot be ticked (= moving item cannot go downwards)
      // Stop possible moving items, set hasFalling to false
      for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
          if (isLowerCase(this.board[i][j])) {
            this.board[i][j] = char.toUpperCase();
            this.hasFallingBlock = false;
          }
        }
      }

    }
  }
}
