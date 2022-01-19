import { Block } from "../src/Block.mjs";

export class Tetromino {
  static T_SHAPE = new Tetromino([
    [".", "t", "."],
    ["t", "t", "t"],
    [".", ".", "."],
  ]);
  tetromino_shape;

  constructor(shape) {
    this.tetromino_shape = shape;
    // this.shape = options.option
    // console.log("this.shape", this.shape)
    // console.log("this.color", this.color)
    // console.log("this", this)
  }

  toString() {
    let result = "";
    for (let i = 0; i < this.tetromino_shape.length; i++) {
      let temp = "";
      for (let j = 0; j < this.tetromino_shape[i].length; j++) {
        temp = temp.concat("", this.tetromino_shape[i][j].toUpperCase());
      }
      result = result.concat("", temp + "\n");
    }
    return result;
  }
}
