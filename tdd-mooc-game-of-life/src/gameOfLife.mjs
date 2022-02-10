import _ from "lodash";
import { getLivingNeighborCount } from "./utils.mjs";

export function play(arr, iterations) {
  if (arr === undefined || iterations === undefined) {
    throw new Error ("undefined");
  }
  let copy = _.cloneDeep(arr);

  for (let i = 0; i < iterations; i++) {
    copy = tick(copy);
  }
  return copy;
}

// TODO consider naming "arr" to board everywhere
export function tick(arr) {

  if (arr === undefined) {
    throw new Error ("undefined");
  }
  let copy = _.cloneDeep(arr);
  for (let row = 0; row < arr.length; row++) {

    for (let column = 0; column < arr[0].length; column++) {

      const cell = copy[row][column];
      const livingNeighborCount = getLivingNeighborCount(copy, row, column);

      // 1. Each living cell that has less than 2 living neighbors, will die
      if (cell === 1 && livingNeighborCount < 2) {
        copy[row][column] = 0;
      }
      // TODO it this even needed?
      // 2. Each living cell that has 2 living neighbors, stays alive
      if (cell === 1 && livingNeighborCount === 2) {
        copy[row][column] = 1;
      }
      // TODO it this even needed?
      // 3. Each living cell that has 3 living neighbors, stays alive
      if (cell === 1 && livingNeighborCount === 3) {
        copy[row][column] = 1;
      }

      // 4. Each living cell that has 4 or more living neighbors, dies
      if (cell === 1 && livingNeighborCount >= 4) {
        copy[row][column] = 0;
      }

      // 5. Each dead cell that has exactly 3 living neighbors, becomes alive
      if (cell === 0 && livingNeighborCount === 3) {
        copy[row][column] = 1;
      }
    }
  }
  return copy;
}