import { expect } from "chai";
import { CustomerRegister } from "../src/CustomerRegister.mjs";

describe("Example test fixture", () => {
  it("Example test", () => {

    const register = new CustomerRegister();

    register.listGoldCustomersOfYesterday();
    expect(3).to.equal(3);



  });
});

