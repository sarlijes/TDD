/*
* The manager of a busy department store wants to contact their valuable customers.
* He wants us to create a program that, at the end of each day, reads the customer
* data from a CSV file and draws one gold-level customer from among the customers
* who have been shopping that day. The customer data is then written to a file on
* so that the manager can send the customer a personal e-mail message with a prize.
*
*/

import { Customer } from "./Customer.mjs";
import fs from "fs";

const goldLimit = 8000;

export class CustomerRegister {

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

        const totalPurchases = parseFloat(parts[4].replace("$", ""));

        const lotteryDrawNumber = this.getRandomInteger();

        if (parts[5] === todayString && totalPurchases >= goldLimit) {
          customers.push(new Customer(
            parts[1], parts[2], parts[3], totalPurchases, parts[5], lotteryDrawNumber
          ));
        }

      });
      const winner = customers.reduce(function(a, b) {
        return a.lotteryDrawNumber < b.lotteryDrawNumber ? a : b;
      });

      if (winner !== undefined) {
        console.log("Winner found!");
        fs.writeFileSync("result.txt", winner.toString());
        console.log("All done.");
      }
    });
  }

  /**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
  getRandomInteger() {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

// Only add customers above silver limit to list -
// adjust mock data if needed - see big file
// Write result to file
// Implement randomness - maybe a lottery ticket ID to all customers or something

// Proceed to writing tests