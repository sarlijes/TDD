export function isValid(arr, x, y) {

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
