'use strict'

class House {
  constructor(input) {
    this.address = input.address;
    this.square_feet = input.square_feet;
    this.num_bedrooms = input.num_bedrooms || 3 ;
    this.num_baths = input.num_baths || 2 ;
    this.cost = input.cost || 320000 ;
    this.down_payment = input.down_payment || 0.20 ;
    this.sold = input.sold || false ;
    this.short_sale = input.short_sale ;
    this.has_tenants = input.has_tenants || false ;
  }

  obscure_address() {
     return this.address.replace(/.{10}$/g, '****'); 
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true ;
    }
  }

  down_payment() {
    return this.cost * this.down_payment;
    
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`;
  }
}

var input = {
  address : "Jl. Iskandar muda 63",
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  sold : true,
  short_sale : true,
}

const cool = new House(input);
console.log(cool.to_s());
