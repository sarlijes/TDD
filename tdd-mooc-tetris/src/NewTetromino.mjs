/* eslint-disable linebreak-style */
import { twoDimensionalArraytoString } from "./Utils.mjs";

export class NewTetromino {
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

  shape;
  shape_enum;
  currentOrientation;
  orientations;
  color;
  currentPosition;
  height;
  width;

  static T_SHAPE = new NewTetromino(
    NewTetromino.T_SHAPE_ORIENTATIONS,
    0,
    "T_SHAPE"
  );

  constructor(orientations, currentOrientation, shape_enum) {
    // super(twoDimensionalArraytoString(orientations[currentOrientation]));
    this.orientations = orientations;
    this.currentOrientation = currentOrientation;
    this.shape_enum = shape_enum;
    this.color = shape_enum.substring(0, 1).toLowerCase();
    this.shape = orientations[currentOrientation];

    this.height = this.shape.length;
    this.width = this.shape[0].length;
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

  rotateLeft() {
    const next = this.currentOrientation + 3;
    return new NewTetromino(
      NewTetromino.T_SHAPE_ORIENTATIONS,
      next,
      "T_SHAPE"
    );
  }

}