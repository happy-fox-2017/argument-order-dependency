'use strict'

class House {

  // constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants) {
  constructor(namedArguments) {
    this.address = namedArguments.address;
    this.square_feet = namedArguments.square_feet;
    this.num_bedrooms = namedArguments.num_bedrooms || 3;
    this.num_baths = namedArguments.num_baths || 2;
    this.cost = namedArguments.cost || 320000;
    this.down_payment = namedArguments.down_payment || 0.20;
    this.sold = namedArguments.old || false;
    this.short_sale = namedArguments.hort_sale;
    this.has_tenants = namedArguments.has_tenants || false;
  } //Bener juga, lebih enak begini ya huehuehue

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

var namedArguments = {
  address: 'Jl. Pakis VIC Blok BB 21 No. 14',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment:12345,
  sold: true,
  short_sale: true
}
//Ohh, jadi bisa gak harus urut. Asik

const cool = new House(namedArguments);

console.log(cool.to_s())