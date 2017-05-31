'use strict'

class House {

//  constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants) {
    constructor(house){

      if (house.hasOwnProperty('address'))
        this.address = house['address'];
      else this.address = "";

      if (house.hasOwnProperty('square_feet'))
        this.square_feet = house['square_feet'];
      else this.square_feet = 0;

      if (house.hasOwnProperty('num_bedrooms'))
        this.num_bedrooms = house['num_bedrooms'];
      else this.num_bedrooms = 3

      if (house.hasOwnProperty('num_baths'))
        this.num_baths = house['num_baths'];
      else this.num_baths = 2

      if (house.hasOwnProperty('cost'))
        this.cost = house['cost'];
      else this.cost = 320000

      if (house.hasOwnProperty('down_payment'))
        this.down_payment = house['down_payment'];
      else this.down_payment = 0.20

      if (house.hasOwnProperty('sold'))
        this.sold = house['sold'];
      else this.sold = false

      if (house.hasOwnProperty('short_sale'))
        this.short_sale = house['short_sale'];
      else this.short_sale = false;


      if (house.hasOwnProperty('has_tenants'))
        this.has_tenants = house['has_tenants'];
      else this.has_tenants = false

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
      return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost} dp: ${this.down_payment}`
    }
  }

const cool = new House({address: 'jalan tanah kusir IV', square_feet: 100, num_bedrooms: 2, num_baths: 2, cost: 1000000, down_payment: 12345, sold: true, short_sale: true, has_tenants: true}
);

console.log(cool.to_s())
