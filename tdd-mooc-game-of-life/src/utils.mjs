export function isValid(arr, x, y) {

  if (arr === undefined) {
    throw new Error ("undefined");
  }

  const height = arr.length;
  const width = arr[0].length;

  if (y >= 0
    && x >= 0
    && x < width
    && y < height) {
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