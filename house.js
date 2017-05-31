'use strict'

class House {

  constructor(params) {
    this.address = params.address
    this.square_feet = params.sqFeet
    this.num_bedrooms = params.bedrooms || 3
    this.num_baths = params.baths || 2
    this.cost = params.cost || 320000
    this.down_payment = params.dp || 0.20
    this.sold = params.sold || false
    this.short_sale = params.shortSale
    this.has_tenants = params.tenants || false
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
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}$`
  }
}



let params = {
  address: 'jl. Ridwan Kamil 10',
  sqFeet: 21,
  bedrooms: 2,
  baths: 2,
  cost: 15000,
  dp: 0.3,
  sold: false,
  shortSale: false,
  tenants: true
}

const cool = new House(params)
console.log(cool.to_s())
