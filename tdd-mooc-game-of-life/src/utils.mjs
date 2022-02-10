export function isValid(arr, y, x) {

  if (arr === undefined) {
    throw new Error ("undefined");
  }

  const height = arr.length;
  const width = arr[0].length;

  if (x >= 0
    && y >= 0
    && y < height
    && x < width) {
    return true;
  }

  return false;
}

// Living cell === 1
// Dead cell === 0

// Calculates the count of living neighbors for the given
// cell. Neighbors are other cells that share a corner or
// a side with the given cell.
export function getLivingNeighborCount(arr, y, x) {
  if (arr === undefined) {
    throw new Error("undefined");
  }

  let count = 0;

  // Check all eight surrounding cells

  if (isValid(arr, y -1, x -1) && arr[y - 1][x - 1] === 1) {
    count +=1;
  }

  if (isValid(arr, y, x - 1) && arr[y][x - 1] === 1) {
    count +=1;
  }

  if (isValid(arr, y + 1, x - 1) && arr[y + 1][x - 1] === 1) {
    count +=1;
  }

  if (isValid(arr, y - 1, x) && arr[y - 1][x] === 1) {
    count +=1;
  }

  if (isValid(arr, y +1, x) && arr[y + 1][x] === 1) {
    count +=1;
  }

  if (isValid(arr, y -1, x +1) && arr[y - 1][x + 1] === 1) {
    count +=1;
  }

  if (isValid(arr, y, x +1) && arr[y][x + 1] === 1) {
    count +=1;
  }

  if (isValid(arr, y +1, x +1) && arr[y + 1][x + 1] === 1) {
    count +=1;
  }

  return count;
}

// [0,0,0]
// [0,0,1]
// [0,1,1]
// =
// [b,b,b]
// [b,b,o]
// [b,o,o]

export function twoDimensionalArraytoOBString(arr) {
  const height = arr.length;

  let result = "";
  for (let i = 0; i < height; i++) {
    let temp = "";
    for (let j = 0; j < arr[i].length; j++) {
      const newChar = arr[i][j] === 0 ? "b" : "o";
      temp = temp.concat("", newChar);
    }
    result = result.concat("", temp);
    if (i !== height -1) {
      result = result.concat("", "$");
    }
  }
  result = result.concat("", "!");
  return result;
}