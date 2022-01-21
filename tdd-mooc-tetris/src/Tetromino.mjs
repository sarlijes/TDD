import { RotatingShape } from "./RotatingShape.mjs";
import { twoDimensionalArraytoString } from "./Utils.mjs";

/*
"You will need to parameterize Tetromino with how many orientations it has. 
If we just rotate the I piece 360 degrees around a single block, it would move 
left/right and up/down by one block, even if it was staying in place. 

So we need to limit it to 2 orientations instead of the default 4."
*/

export class Tetromino extends RotatingShape {
  static T_SHAPE = new Tetromino([
    [".", "t", "."],
    ["t", "t", "t"],
    [".", ".", "."],
  ], 0, 4, "T_SHAPE");

  static I_SHAPE = new Tetromino([
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    ["i", "i", "i", "i", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
  ], 0, 2, "I_SHAPE");

  static ROTATED_I_SHAPE = new Tetromino([
    [".", ".", "i", ".", "."],
    [".", ".", "i", ".", "."],
    [".", ".", "i", ".", "."],
    [".", ".", "i", ".", "."],
    [".", ".", ".", ".", "."],
  ], 0, 2, "ROTATED_I_SHAPE");

  static O_SHAPE = new Tetromino([
    [".", "o", "o"],
    [".", "o", "o"],
    [".", ".", "."],
  ], 0, 2, "O_SHAPE"); // TODO what should these be? 0 and 1?

  tetromino_shape;
  #shape_enum;
  #currentOrientation;
  #orientations;

  constructor(shape, currentOrientation, orientations, shape_enum) {
    super(twoDimensionalArraytoString(shape));
    this.tetromino_shape = shape;

    this.#currentOrientation = currentOrientation;
    this.rotateRight()
    this.#orientations = [
      shape,
      this.rotateRight(),
      this.rotateRight().rotateRight(),
      this.rotateRight().rotateRight().rotateRight()
    ].slice(0, orientations)
    this.#shape_enum = shape_enum;

  }

  rotateLeft() {
    if (this.#shape_enum === "I_SHAPE") {
      const rotated = Tetromino.ROTATED_I_SHAPE;
      return twoDimensionalArraytoString(rotated.shape);
    } else {
      return this.rotateRight().rotateRight().rotateRight();
    }
  }

  toString() {
    return twoDimensionalArraytoString(this.tetromino_shape);
  }
}
