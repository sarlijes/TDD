import { Tetromino } from "./Tetromino.mjs";
import { twoDimensionalArraytoString } from "./Utils.mjs";

export class RotatingShape {
  shape = [];
  height = 0;
  width = -1;

  constructor(str) {
    let parts = str.split("\n");

    for (let i = 0; i < parts.length; i++) {
      let part = parts[i].trim();
      let temp = [];
      for (let j = 0; j < part.length; j++) {
        temp.push(part[j]);

      }
      if (temp.length > 0) {
        this.shape.push(temp);
        this.height = this.height + 1;
      }
      this.width = this.width + 1;
    }
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
      // console.log("🚀 ~ calling rotateRight 3 for", this.shape_enum);

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
