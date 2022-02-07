import { expect } from "chai";
import { CustomerRegister } from "../src/CustomerRegister.mjs";

describe("Example test fixture", () => {
  it("Example test", () => {

    const register = new CustomerRegister();

    register.listGoldCustomersOfYesterday();
    expect(3).to.equal(3);



  });
});

describe("Helper function: get random integer", () => {

  let register;

  beforeEach(() => {
    register = new CustomerRegister();
  });

  it("The min limit is respected", () => {
    for (let x = 0; x < 1000; x++ ) {
      const rand = register.getRandomInteger();
      expect(rand).to.be.at.least(100000);
    }
  });

  it("The max limit is respected", () => {
    for (let x = 0; x < 1000; x++ ) {
      const rand = register.getRandomInteger();
      expect(rand).to.be.at.most(999998);
    }
  });

  it("The type is correct", () => {
    for (let x = 0; x < 1000; x++ ) {
      const rand = register.getRandomInteger();
      expect(typeof rand).to.equal("number");
    }
  });
});

describe("Helper function: get random integer", () => {
  it("The type is correct", () => {

  });
});