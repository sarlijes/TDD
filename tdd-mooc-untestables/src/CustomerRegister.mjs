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
      console.log(data);
    });

  }

}

// Global variables
// File system
// Time
// Randomness