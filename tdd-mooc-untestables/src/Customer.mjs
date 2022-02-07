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
}
