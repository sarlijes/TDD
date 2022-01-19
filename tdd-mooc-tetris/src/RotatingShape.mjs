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
      this.shape.push(temp);
      this.height = this.height + 1;
    }
  }

  twoDimensionalArraytoString(arr) {
    let result = "";
    for (let i = 0; i < this.height; i++) {
      let temp = "";
      for (let j = 0; j < arr[i].length; j++) {
        temp = temp.concat("", arr[i][j]);
      }
      result = result.concat("", temp + "\n");
    }
    return result;
  }

  toString() {
    return this.twoDimensionalArraytoString(this.shape);
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
  }

  rotateRight() {
    let dimension = this.shape.length;
    let rotated = Array.from({ length: dimension }, () =>
      Array(dimension).fill(0)
    );
    // console.log("dimension", dimension)
    // console.log("rotated before", rotated)
    // console.log("this.shape before", this.shape)
    for (let row = 0; row < dimension; row++) {
      // console.log("---row now: ", row)
      for (let col = 0; col < this.shape[row].length; col++) {
        // console.log("col now: ", col)
        rotated[col][dimension - 1 - row] = this.shape[row][col];
      }
    }
    // console.log("rotated after", rotated)
    // console.log("--------", "----------")
    // console.log("this.shape", this.shape)
    // console.log("this.toString()", this.toString())
    // console.log("--------", "----------")
    // this.twoDimensionalArraytoString(this.shape)
    return new RotatingShape(this.twoDimensionalArraytoString(rotated).trim());
  }
}
