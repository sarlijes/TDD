import { RotatingShape } from "./RotatingShape.mjs";
import { twoDimensionalArraytoString } from "./Utils.mjs";

export class Tetromino extends RotatingShape {
  static T_SHAPE = new Tetromino(
    [
      [".", "t", "."],
      ["t", "t", "t"],
      [".", ".", "."],
    ],
    0,
    4,
    "T_SHAPE"
  );

  static I_SHAPE = new Tetromino(
    [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      ["i", "i", "i", "i", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
    ],
    0,
    2,
    "I_SHAPE"
  );

  static ROTATED_I_SHAPE = new Tetromino(
    [
      [".", ".", "i", ".", "."],
      [".", ".", "i", ".", "."],
      [".", ".", "i", ".", "."],
      [".", ".", "i", ".", "."],
      [".", ".", ".", ".", "."],
    ],
    0,
    2,
    "ROTATED_I_SHAPE"
  );

  static O_SHAPE = new Tetromino(
    [
      [".", "o", "o"],
      [".", "o", "o"],
      [".", ".", "."],
    ],
    0,
    1,
    "O_SHAPE"
  );

  shape_enum;
  currentOrientation;
  orientations;

  constructor(shape, currentOrientation, orientations, shape_enum) {
    super(twoDimensionalArraytoString(shape));

    this.currentOrientation = currentOrientation;
    this.orientations = orientations;
    this.shape_enum = shape_enum;
  }

  toString() {
    return twoDimensionalArraytoString(this.shape);
  }
}
