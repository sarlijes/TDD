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

  listGoldCustomersOfYesterday(resultPath) {
    fs.readFile(".\\src\\MOCK_DATA.txt", "utf8" , (err, data) => {
      if (err) console.log(err);
      let customers = [];
      let todayString = this.getDateString(new Date());

      const splitted = data.split("\n");

      console.log("... Starting to process " + splitted.length + " lines of data");

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
      if (customers.length === 0) {
        console.log("No customers found, cannot find winner.");
      } else {
        console.log(customers.length +
          " suitable customers found, now finding the winner");
      }

      const winner = customers.reduce(function(a, b) {
        return a.lotteryDrawNumber < b.lotteryDrawNumber ? a : b;
      });

      if (winner !== undefined) {
        console.log("Winner found!");
        fs.writeFileSync(resultPath, winner.toString());
        console.log("... All done, see result.txt");
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

  getDateString(date) {

    if (!(date instanceof Date)) {
      throw new Error("invalid data type: ", + typeof Date);
    }

    let days = date.getDate();
    if (parseInt(days) < 10) {
      days = "0" + days;
    }
    let month = parseInt(date.getMonth()) + 1;
    if (parseInt(month) < 10) {
      month = "0" + month;
    }
    let year = date.getFullYear();

    return days + "/" + month + "/" + year;
  }
}
