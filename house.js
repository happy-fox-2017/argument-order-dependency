'use strict'

class House {
  
  //Release )

  constructor(comp) { //mengubah property
    this.address = comp['address']
    this.square_feet = comp['square_feet']
    this.num_bedrooms = comp['num_bedrooms'] || 3
    this.num_baths = comp['num_baths'] || 2
    this.cost = comp['cost'] || 320000
    this.down_payment = comp['down_payment'] || 0.20
    this.sold = comp['sold'] || false
    this.short_sale = comp['short_sale']
    // this.has_tenants = comp['has_tenants'] || false
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

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
  var comp = {
    address : 'Perum III',
    square_feet : 100,
    num_bedrooms : 2,
    num_baths : 2,
    cost : 12345,
    down_payment : 12345,
    sold : true,
    short_sale : true
    // has_tenants :  
  }
  
  const cool = new House(comp)//memanggil comp
  

console.log(cool.to_s())
