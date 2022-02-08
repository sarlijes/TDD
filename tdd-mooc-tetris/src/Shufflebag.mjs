import _ from "lodash";
import { Tetromino } from "./Tetromino.mjs";

export class Shuffler {
  options = [];
  currentShuffler;

  constructor(options) {
    if (options === undefined || options === null) {
      this.options = [Tetromino.T_SHAPE,
      Tetromino.I_SHAPE,
      Tetromino.O_SHAPE];
    }
    this.currentShuffler = _.shuffle(this.options);
  }

  get() {
    const element = this.currentShuffler.pop();
    return element;
  }
}