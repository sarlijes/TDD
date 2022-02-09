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
export function getLivingNeighborCount(arr, x, y) {
  return -1;
}