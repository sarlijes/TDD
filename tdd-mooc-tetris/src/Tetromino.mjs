import { Block } from "../src/Block.mjs";
import { RotatingShape } from "./RotatingShape.mjs";
import { twoDimensionalArraytoString } from "./Utils.mjs";

export class Tetromino extends RotatingShape {
  static T_SHAPE = new Tetromino([
    [".", "t", "."],
    ["t", "t", "t"],
    [".", ".", "."],
  ]);
  tetromino_shape;

  constructor(shape) {
    super(twoDimensionalArraytoString(shape));
    this.tetromino_shape = shape;

    // this.shape = options.option
    // console.log("this.shape", this.shape)
    // console.log("this.color", this.color)
    // console.log("this", this)
  }

  toString() {
    return twoDimensionalArraytoString(this.tetromino_shape);
  }
}
