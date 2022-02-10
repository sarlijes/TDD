import { expect } from "chai";
import { readFile, parseFile, decode, encode } from "../src/RLEreader.mjs";

//TEMP

describe("Can read RLE files", () => {

  it("and return type is not undefined", () => {
    readFile("glider.rle")
      .then((d) => expect(d).not.to.equal(undefined))
      .catch((err) => console.error("readFile() failed", err));
  });

  it("The return value contains the RLE", () => {
    readFile("glider.rle")
      .then((d) => expect(d).to.contain("bob$2bo$3o!"))
      .catch((err) => console.error("readFile() failed", err));
  });

});

describe("Can parse the RLE content into 2-dimensional array", () => {

  it("and return type is not undefined", () => {
    readFile("glider.rle")
      .then((d) => expect(d).not.to.equal(undefined))
      .catch((err) => console.error("readFile() failed", err));
  });

  it("The return value no longer contains the RLE", () => {
    readFile("glider.rle")
      .then((d) => expect(parseFile(d)).not.to.contain("bob$2bo$3o!"))
      .catch((err) => console.error("readFile() failed", err));
  });

  it("and then parsed into two-dimensional array with the correct values", () => {
    return readFile("glider.rle")
      .then(d => {
        expect(parseFile(d)[0]).to.have.deep.members([0,1,0]);
        expect(parseFile(d)[1]).to.have.deep.members([0,0,1]);
        expect(parseFile(d)[2]).to.have.deep.members([1,1,1]);
      })
      .catch((err) => console.error("readFile() failed", err));

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
