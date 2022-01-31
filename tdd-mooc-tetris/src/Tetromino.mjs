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
  color;

  constructor(shape, currentOrientation, orientations, shape_enum) {
    super(twoDimensionalArraytoString(shape));

    this.currentOrientation = currentOrientation;
    this.orientations = orientations;
    this.shape_enum = shape_enum;
    this.color = shape_enum.substring(0, 1).toLowerCase();
  }

  toString() {
    return twoDimensionalArraytoString(this.shape);
  }
  rotateLeft() {
    if (this.shape_enum !== "undefined") {
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
    }
    return this.rotateRight().rotateRight().rotateRight();
  }

  rotateRight() {
    if (this.shape_enum !== "undefined") {
      if (this.shape_enum === "ROTATED_I_SHAPE") {
        const rotated = Tetromino.I_SHAPE;
        const result = new Tetromino(rotated.shape, 0, 2, "I_SHAPE");
        return result;
      }
      if (this.shape_enum === "I_SHAPE") {
        const rotated = Tetromino.ROTATED_I_SHAPE;
        const result = new Tetromino(rotated.shape, 0, 2, "ROTATED_I_SHAPE");
        return result;
      }
      if (this.shape_enum === "O_SHAPE") {
        return new Tetromino(this.shape, 0, 1, "O_SHAPE");
      }
    }
    let rows = this.shape.length;

    let cols = this.shape[0].length;

    let rotated = Array.from({ length: rows }, () => Array(cols).fill("_"));

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        rotated[col][rows - 1 - row] = this.shape[row][col];
      }
    }
    return new RotatingShape(twoDimensionalArraytoString(rotated));
  }

}
