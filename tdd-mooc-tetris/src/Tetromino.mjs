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

  rotateLeft() {
    if (this.shape_enum === "I_SHAPE") {
      // TODO not ideal
      const rotated = Tetromino.ROTATED_I_SHAPE;
      const result = new Tetromino(rotated.shape, 0, 2, "ROTATED_I_SHAPE");
      return result;
    }
    if (this.shape_enum === "ROTATED_I_SHAPE") {
      // TODO not ideal
      const rotated = Tetromino.I_SHAPE;
      const result = new Tetromino(rotated.shape, 0, 2, "I_SHAPE");
      return result;
    }

    if (this.shape_enum === "O_SHAPE") {
      const rotated = Tetromino.O_SHAPE;
      const result = new Tetromino(rotated.shape, 0, 1, "O_SHAPE");
      return result;
    }
    // console.log("🚀 ~ calling rotateRight 3 for", this.shape_enum);

    return this.rotateRight().rotateRight().rotateRight();
  }

  toString() {
    return twoDimensionalArraytoString(this.shape);
  }
}
