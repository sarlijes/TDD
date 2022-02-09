import { expect } from "chai";
import { readFile } from "../src/RLEreader.mjs";

describe("Return type is correct", () => {
  it("", () => {
    const result = readFile("glider.rle");
    expect(result instanceof Array).to.be.true;
  });
});



describe("Can read RLE files into 2-dimensional array", () => {

  it(": glider", () => {
    const result = readFile("glider.rle");
    expect(result[0]).to.equal([0,1,0]);
    expect(result[0]).to.equal([0,0,1]);
    expect(result[0]).to.equal([1,1,1]);
  });


});



describe("", () => {
});

it("", () => {
});