'use strict'

class House {

  constructor(component) {
    //dengan hasOwnProperty
    if(component.hasOwnProperty('address')) {
      this.address = component['address'];
    } else {
      this.address = 'kosong'
    }

    if(component.hasOwnProperty('square_feet')) {
      this.square_feet = component['square_feet'] ;
    } else {
      this.square_feet = 'kosong';
    }

    if(component.hasOwnProperty('num_bedrooms')) {
      this.num_bedrooms = component['num_bedrooms']
    } else {
      this.num_bedrooms = 1 ; //default value = 1,jika di deklarasi Object tidak di deklarasiin makan output value 1
    }

    if(component.hasOwnProperty('num_baths')){
      this.num_baths = component['num_baths'] || 2;
    } else {
      this.num_baths = 2;
    }

    //dengan named argument
    this.cost = component['cost'] || 320000;
    this.down_payment = component['down_payment'] || 0.20;
    this.sold = component['sold'] || false;
    this.short_sale = component['short_sale'] || ' Data Kosong';
    this.has_tenants = component['has_tenants'] || false;
  }

  obscure_address() {
    //console.log(this.address);
     return this.address.replace(/.{10}$/g, '****');

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


const cool = new House(
  {
  'address' : 'jalan jatiawaringin',
  //'square_feet' : 7,
  'num_bedrooms' : 3,
  'num_baths' : 8,
  'cost' : 34000,

});


console.log(cool.to_s())
