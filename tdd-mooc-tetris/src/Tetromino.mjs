/* eslint-disable linebreak-style */
import { twoDimensionalArraytoString } from "./Utils.mjs";

export class Tetromino {
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

  static I_SHAPE_ORIENTATIONS = [[
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    ["i", "i", "i", "i", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
  ], [
    [".", ".", "i", ".", "."],
    [".", ".", "i", ".", "."],
    [".", ".", "i", ".", "."],
    [".", ".", "i", ".", "."],
    [".", ".", ".", ".", "."],
  ]
  ];

  static O_SHAPE_ORIENTATIONS = [[
    [".", "o", "o"],
    [".", "o", "o"],
    [".", ".", "."],
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

  static T_SHAPE = new Tetromino(
    Tetromino.T_SHAPE_ORIENTATIONS,
    0,
    "T_SHAPE"
  );

  static I_SHAPE = new Tetromino(
    Tetromino.I_SHAPE_ORIENTATIONS,
    0,
    "I_SHAPE"
  );

  static O_SHAPE = new Tetromino(
    Tetromino.O_SHAPE_ORIENTATIONS,
    0,
    "O_SHAPE"
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
    const state = this;
    const next = this.getNewRotationValue(this.currentOrientation + 1);
    return new Tetromino(
      state.orientations,
      next,
      state.shape_enum
    );
  }

  getNewRotationValue(newRotation) {
    if (newRotation < 0) {
      return newRotation + this.orientations.length;
    }
    if (newRotation === 0) {
      return 0;
    }
    if (newRotation >= this.orientations.length) {
      return newRotation - this.orientations.length;
    }
    return newRotation;
  }


  rotateLeft() {
    const state = this;
    const next = this.getNewRotationValue(this.currentOrientation - 1);
    return new Tetromino(
      state.orientations,
      next,
      state.shape_enum
    );
  }

}