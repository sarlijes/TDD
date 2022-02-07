import { expect } from "chai";
import { CustomerRegister } from "../src/CustomerRegister.mjs";
import fs from "fs";

// eslint-disable-next-line no-undef
let dirName = process.cwd();
dirName = dirName + "\\test\\tmp\\";

describe("Example test fixture", () => {
  it("Example test", () => {

    const register = new CustomerRegister();
    const resultPath = ".\\test\\tmp\\test.txt";

    // register.listGoldCustomersOfYesterday(resultPath);
  });

  it("CREATE (temporary) file tests create/write access to FS", function(done){
    console.log("🚀 ~ file: dirName", dirName);


    // setup
    var newFile = "result.txt";

    fs.writeFile(dirName + newFile, "hello!", function (err) {
      if (err) console.log(err);
      // console.log("Created file: "+newFile);
      fs.readdir(dirName, function(err, list) {
        expect(list.indexOf(newFile)).to.be.greaterThan(-1);

        fs.unlinkSync(dirName + newFile);
        console.log("successfully deleted "+newFile);
        // console.log("Deleted: "+newFile)
        fs.readdir(dirName, function(err, list) {
          if (err) throw err;
          expect(list.indexOf(newFile)).to.equal(-1);
          done();
        });
      });
    });
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

describe("Helper function: get date string", () => {

  let register;
  let date1, date2, date3, date4, date5;
  let dates = [];

  beforeEach(() => {
    register = new CustomerRegister();
    date1 = register.getDateString(new Date("2012-12-01"));
    date2 = register.getDateString(new Date("1999-01-01"));
    date3 = register.getDateString(new Date("2022-02-07"));
    date4 = register.getDateString(new Date("1986-04-05"));
    date5 = register.getDateString(new Date("1986-12-31"));
    dates.push(date1, date2, date3, date4, date5);

  });

  it("The date string is parsed correctly", () => {
    expect(date1).to.equal("01/12/2012");
    expect(date2).to.equal("01/01/1999");
    expect(date3).to.equal("07/02/2022");
    expect(date4).to.equal("05/04/1986");
  });

  it("The type is correct", () => {
    for (let item in dates) {
      expect(typeof item).to.equal("string");
    }
  });

  it("Error is thrown in case of invalid data type null", () => {
    expect(() =>
      register.getDateString(null)).to.throw("invalid data type");
  });


  it("Error is thrown in case of invalid data type undefined", () => {
    expect(() =>
      register.getDateString(undefined)).to.throw("invalid data type");
  });


  it("Error is thrown in case of invalid data type string", () => {
    expect(() =>
      register.getDateString("05/04/1986")).to.throw("invalid data type");
  });

  it("Error is thrown in case of invalid data type int", () => {
    expect(() =>
      register.getDateString(2)).to.throw("invalid data type");
  });


});