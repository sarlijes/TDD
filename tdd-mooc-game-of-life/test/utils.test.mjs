import { expect } from "chai";
import { isValid } from "../src/utils.mjs";

describe("Check cell validity", () => {

  const arr = [];

  beforeEach(() => {
    arr.push([0, 0, 0]);
    arr.push([0, 0, 0]);
    arr.push([0, 0, 0]);
  });


  it("Cell is valid when both coordinates are 0", () => {



    expect(isValid(arr, 0, 0)).to.be.true;
  });

});
