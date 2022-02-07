import { expect } from "chai";
import { CustomerRegister } from "../src/CustomerRegister.mjs";
import fs from "fs";

// eslint-disable-next-line no-undef
const dirName = process.cwd() + "\\test\\tmp\\";

describe("Can write results into file", () => {

  let register;

  beforeEach(() => {
    register = new CustomerRegister();
  });

  after(async () => {
    console.log("--");
  });

  it("Can create temporary file and delete it", function(done) {
    const fileName = "test_file.txt";
    fs.writeFile(dirName + fileName, "file test", function (err) {
      if (err) console.log(err);

      fs.readdir(dirName, function(err, list) {
        // Ensure the file was created
        expect(list.indexOf(fileName)).to.be.greaterThan(-1);
        // Delete the file
        fs.unlinkSync(dirName + fileName);
        // Ensure the file is not found anymore
        fs.readdir(dirName, function(err, list) {
          if (err) throw err;
          expect(list.indexOf(fileName)).to.equal(-1);
          done();
        });
      });
    });
  });

  it("Can write results into file", function(done) {

    const fileName = "test_result.txt";
    const path = (dirName + fileName);

    register.listGoldCustomersOfYesterday(path);
    fs.readFile(".\\test\\tmp\\test_result.txt", "utf8" , (err, data) => {
      if (err) console.log(err);
      expect(data).to.have.string("Customer");
      expect(data).to.have.string("total purchases");
      expect(data).to.have.string("email");

      fs.readdir(dirName, function(err, list) {
      // Delete the file
        fs.unlinkSync(dirName + fileName);
        // Ensure the file is not found anymore
        fs.readdir(dirName, function(err, list) {
          if (err) throw err;
          expect(list.indexOf(fileName)).to.equal(-1);
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