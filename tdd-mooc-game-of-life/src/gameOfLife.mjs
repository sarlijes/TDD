import _ from "lodash";
import { getLivingNeighborCount } from "./utils.mjs";

export function tick(arr) {

  if (arr === undefined) {
    throw new Error ("undefined");
  }
  let copy = _.cloneDeep(arr);
  for (let row = 0; row < arr.length; row++) {

    for (let column = 0; column < arr[0].length; column++) {

      const cell = arr[row][column];
      const livingNeighborCount = getLivingNeighborCount(arr, row, column);

      // 1. Each living cell that has less than 2 living neighbors, will die
      if (cell === 1 && livingNeighborCount < 2) {
        copy[row][column] = 0;
      }
    }
  }


  return copy;
}

// TODO consider naming "arr" to board everywhere