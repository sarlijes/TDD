function twoDimensionalArraytoString(arr) {
  const height = arr.length;

  let result = "";
  for (let i = 0; i < height; i++) {
    let temp = "";
    for (let j = 0; j < arr[i].length; j++) {
      temp = temp.concat("", arr[i][j]);
    }
    result = result.concat("", temp + "\n");
  }
  return result.toUpperCase();
}

function isUpperCase(str) {
  return str === str.toUpperCase() && str !== ".";
}
// TODO tests for helper functions

function isLowerCase(str) {
  return str === str.toLowerCase() && str !== ".";
}

function listOccupied(obj) {

  let board = obj.board;
  let occupied = [];
  for (let i = 0; i < obj.height; i++) {
    for (let j = 0; j < obj.width; j++) {
      if (isUpperCase(board[i][j])) {
        occupied.push({ x: j, y: i });
      }
    }
  }
  return occupied;
}

export { twoDimensionalArraytoString, listOccupied, isUpperCase, isLowerCase };
