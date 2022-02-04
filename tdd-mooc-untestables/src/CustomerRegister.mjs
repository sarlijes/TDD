import { Customer } from "./Customer.mjs";
import Papa from "papaparse";
import fs from "fs";

// Customer programme limits
const silverLimit = 2000;
const goldLimit = 8000;

export class CustomerRegister {

  constructor() {
  }

  // Reads the customer data from CSV file
  // Then saves the email addresses as one comma-separated list into a new file
  listGoldCustomersOfYesterday() {
    fs.readFile(".\\src\\MOCK_DATA.txt", "utf8" , (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      let customers = [];
      let todayString = this.getDayString();

      const splitted = data.split("\n");
      splitted.forEach(item => {
        const parts = item.split(";");

        if (parts[5] === this.getDayString()) {
          customers.push(new Customer(
            parts[1], parts[2], parts[3], parts[4], parts[5]
          ));
        }

      });

      console.log(customers);
      console.log("Customer count: " + customers.length);


    });
    this.getDayString();
  }


  getDayString() {
    let days = new Date().getDate();
    if (parseInt(days) < 10) {
      days = "0" + days;
    }
    let month = parseInt(new Date().getMonth()) + 1;
    if (parseInt(month) < 10) {
      month = "0" + month;
    }
    let year = new Date().getFullYear();

    return days + "/" + month + "/" + year;
  }
}

// Global variables
// File system
// Time
// Randomness

// Parse purchase total to double
// Only add customers above silver limit to list - adjust mock data if needed - see big file
// Write result to file
// Implement randomness - maybe a lottery ticket ID to all customers or something

// Proceed to writing tests