export class Customer {
  firstName;
  lastName;
  email;
  totalPurchases;
  lastPurchaseDate;

  constructor(firstName, lastName, email, totalPurchases, lastPurchaseDate) {
    this.firstName = firstName;
    this.lastName= lastName;
    this.email = email;
    this.totalPurchases = totalPurchases;
    this.lastPurchaseDate = lastPurchaseDate;
  }
}
