import { twoDimensionalArraytoString } from "./Utils.mjs";

export class RotatingShape {
  shape = [];
  height = 0;
  width = 0;

  constructor(str) {
    let parts = str.split("\n");

    for (let i = 0; i < parts.length; i++) {
      let part = parts[i].trim();
      let temp = [];
      for (let j = 0; j < part.length; j++) {
        temp.push(part[j]);
        this.width = this.width + 1;
      }
      if (temp.length > 0) {
        this.shape.push(temp);
        this.height = this.height + 1;
      }
    }
  }

  toString() {
    return twoDimensionalArraytoString(this.shape);
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
  }

  rotateRight() {
    if (this.shape_enum != "undefined" && this.shape_enum === "O_SHAPE") {
      return new RotatingShape(twoDimensionalArraytoString(this.shape));
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
