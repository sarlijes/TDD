/* eslint-disable linebreak-style */
import { RotatingShape } from "./RotatingShape.mjs";
import { twoDimensionalArraytoString } from "./Utils.mjs";


export class NewTetromino extends RotatingShape {
  static T_SHAPE_ORIENTATIONS = [[
    [".", "t", "."],
    ["t", "t", "t"],
    [".", ".", "."],
  ], [
    [".", "t", "."],
    [".", "t", "t"],
    [".", "t", "."],
  ], [
    [".", ".", "."],
    ["t", "t", "t"],
    [".", "t", "."],
  ], [
    [".", "t", "."],
    ["t", "t", "."],
    [".", "t", "."],
  ]
  ];

  shape_enum;
  currentOrientation;
  orientations;
  color;
  currentPosition;

  static T_SHAPE = new NewTetromino(
    NewTetromino.T_SHAPE_ORIENTATIONS,
    0,
    "T_SHAPE"
  );

  constructor(orientations, currentOrientation, shape_enum) {
    super(twoDimensionalArraytoString(orientations[currentOrientation]));
    this.orientations = orientations;
    this.currentOrientation = currentOrientation;
    this.shape_enum = shape_enum;
    this.color = shape_enum.substring(0, 1).toLowerCase();
  }

  toString() {
    return twoDimensionalArraytoString(this.shape);
  }

  rotateRight() {
    const next = this.currentOrientation + 1;
    return new NewTetromino(
      NewTetromino.T_SHAPE_ORIENTATIONS,
      next,
      "T_SHAPE"
    );
  }
}
