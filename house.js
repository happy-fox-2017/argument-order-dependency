'use strict'

class House {

  constructor(objCool) {
    this.address = objCool.address
    this.square_feet = objCool.square_feet
    this.num_bedrooms = objCool.num_bedrooms || 3
    this.num_baths = objCool.num_baths || 2
    this.cost = objCool.cost || 320000
    this.down_payment = objCool.down_payment || 0.20
    this.sold = objCool.sold || false
    this.short_sale = objCool.short_sale
    this.has_tenants = objCool.has_tenants || false
  }

  obscure_address() {
     return this.address.replace(/.{10}$/g, '****').toString();
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

let objCool = {
  address : "Jl.Ahmad yani no.21",
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  sold : true,
  short_sale : true,
}

const cool = new House(objCool);

console.log(cool.to_s())
