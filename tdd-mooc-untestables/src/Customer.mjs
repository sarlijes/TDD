export class Customer {
  firstName;
  lastName;
  email;
  totalPurchases;
  lastPurchaseDate;
  lotteryDrawNumber;

  constructor(firstName, lastName, email, totalPurchases, lastPurchaseDate,
    lotteryDrawNumber) {
    this.firstName = firstName;
    this.lastName= lastName;
    this.email = email;
    this.totalPurchases = totalPurchases;
    this.lastPurchaseDate = lastPurchaseDate;
    this.lotteryDrawNumber = lotteryDrawNumber;
  }

  toString() {
    return "Customer: "
    + this.firstName
    + " "
    + this.lastName
    + " (email: "
    + this.email
    + ")"
    + "\n"
    + "total purchases: "
    + this.totalPurchases
    + "\n"
    + "last purchase date: "
    + this.lastPurchaseDate;
  }
}
