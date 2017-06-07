'use strict'

class House {

  constructor(part) {
    this.address = part.address
    this.square_feet = part.square_feet
    this.num_bedrooms = part.num_bedrooms || 3
    this.num_baths = part.num_baths || 2
    this.cost = part.cost || 320000
    this.down_payment = part.down_payment || 0.20
    this.sold = part.sold || false
    this.short_sale = part.short_sale
    this.has_tenants = part.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return this.cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

const cool = new House({address: 'Jln.Taman manggis permai no.234', square_feet: 100, num_bedrooms: 2, num_baths: 2, cost: 12345, down_payment: 12345, sold: true, has_tenants: true})
// console.log(cool);
// console.log(cool.down_payment);
console.log(cool.to_s())
