'use strict'

class House {

  constructor(options) {
    this.address = options.address;
    this.squareFeet = options.squareFeet;
    this.numBedrooms = options.numBedrooms || 3;
    this.numBaths = options.numBaths || 2;
    this.cost = options.cost || 320000;
    this.downPayment = options.downPayment || 0.20;
    this.sold = options.sold || false;
    this.shortSale = options.shortSale;
    this.hasTenants = options.hasTenants || false;
  }

  obscureAddress() {
    this.address.replace(/.{10}$/g, '****');
  }

  buy(money, goodCredit) {
    if (money >= this.downPayment && goodCredit) {
      this.sold = true;
    }
  }

  downPayment() {
    return this.cost * this.downPayment;
  }

  toS() {
    return `${this.obscureAddress()} : ${this.squareFeet} sq. ft., ${this.numBedrooms} bed, ${this.numBaths} bath. ${this.cost}`;
  }
}

const cool = new House('address', 100, 2, 2, 12345, 12345, true, true);

console.log(cool.toS());
