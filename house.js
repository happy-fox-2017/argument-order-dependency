'use strict'

class House {

  constructor(param) {
    this.address = param.hasOwnProperty('address') ? param.address : 'N/A';
    this.square_feet = param.hasOwnProperty('square_feet') ? param.square_feet : 'N/A';
    this.num_bedrooms = param.hasOwnProperty('num_bedrooms') ? param.num_bedrooms : 3;
    this.num_baths = param.hasOwnProperty('num_baths') ? param.num_baths : 2;
    this.cost = param.hasOwnProperty('cost') ? param.cost : 320000;
    this.down_payment = param.hasOwnProperty('down_payment') ? param.down_payment : 0.20;
    this.sold = param.hasOwnProperty('sold') ? param.sold : false;
    this.short_sale = param.hasOwnProperty('short_sale') ? param.short_sale : false;
    this.has_tenants = param.hasOwnProperty('has_tenants') ? param.has_tenants : false;
  }

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

let houseInfo = {
  address: 'alamat palsu',
  cost: 12345,
  down_payment:12345,
  has_tenants: true,
  num_baths: 2,
  num_bedrooms: 2,
  short_sale: true,
  sold: true,
  square_feet: 100,
};

const cool = new House(houseInfo);

console.log(cool.to_s());
console.log(cool);

