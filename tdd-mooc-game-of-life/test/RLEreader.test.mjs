import { expect } from "chai";
import { readFile, parseFile, decode, encode } from "../src/RLEreader.mjs";

describe("Return type is correct", () => {
  it("", () => {
    const content = readFile("glider.rle");
    expect(content).not.to.equal(undefined);

  });
});


describe("Can read RLE files into 2-dimensional array", () => {

  it("the file if first read", () => {
    const content = readFile("glider.rle");
    expect(content).not.to.equal(undefined);
  });

  xit("and then parsed into two-dimensional array", () => {
    const content = readFile("glider.rle");
    const result = parseFile(content);
    // async issue
    // TODO below could be separate
    expect(content instanceof Array).to.be.true;
    expect(result[0]).to.equal([0,1,0]);
    // expect(result[0]).to.equal([0,0,1]);
    // expect(result[0]).to.equal([1,1,1]);
  });


});



describe("decode", () => {

  it("", () => {
    expect(decode("")).to.equal("");
    expect(decode("3M")).to.equal("MMM");
    expect(decode("3M2I")).to.equal("MMMII");
    expect(decode("3M12Y2J")).to.equal("MMMYYYYYYYYYYYYJJ");
    expect(decode("bob")).to.equal("bob");
    expect(decode("2bo")).to.equal("bbo");
    expect(decode("3o!")).to.equal("ooo!");
  });

});

describe("encode", () => {

  it("", () => {
    expect(encode("MMM")).to.equal("3M");
    expect(encode("PPPPPPPPP")).to.equal("9P");
    expect(encode("ABBCCC")).to.equal("A2B3C");
    expect(encode("A")).to.equal("A");
    expect(encode("OOOOOOOOOOOOOOOOOOOO")).to.equal("20O");
    expect(encode("MMMYYYYYYYYYYYYJJ")).to.equal("3M12Y2J");
    expect(encode("bob")).to.equal("bob");
  });

});
