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

function listMoving(obj) {

  let board = obj.board;
  let moving = [];
  for (let i = 0; i < obj.height; i++) {
    for (let j = 0; j < obj.width; j++) {
      if (isLowerCase(board[i][j])) {
        moving.push({ x: j, y: i });
      }
    }
  }
  return moving;
}

function overlaps(list1, list2) {
  return findOverlappingPoints(list1, list2).length > 0;
}

function findOverlappingPoints(list1, list2) {
  let comparator = function (a, b) {
    return a.x === b.x && a.y === b.y;
  };
  return list1.filter(a => list2.some(b => comparator(a, b)));
}

// This does not take other blocks into account -
// only the potential
function getPotentialNewCoordinatesOfMovingItem(
  coordinatesOfMovingItem, board) {
  let potentialNewPositionOfMovingItem = [];

  coordinatesOfMovingItem.forEach((point) => {
    // Check the bottom of the board - item cannot go beneath it
    if (point.y + 1 < board.height) {
      potentialNewPositionOfMovingItem.push({ x: point.x, y: point.y + 1 });
    }

  });
  return potentialNewPositionOfMovingItem;
}

export {
  twoDimensionalArraytoString,
  listOccupied,
  isUpperCase,
  isLowerCase,
  listMoving,
  overlaps,
  getPotentialNewCoordinatesOfMovingItem
};
