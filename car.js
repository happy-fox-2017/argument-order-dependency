'use strict'

class Car {
  start_car(options) {
    if (options && options.hasOwnProperty('headlights')) {
      this.headlights = options['headlights']
    } else {
      this.headlights = true
    }

    if (options && options.hasOwnProperty('gear') && typeof options.gear === "number") {
      this.gear = options['gear']
    } else {
      this.gear = 1
    }
  }
}

const herbie = new Car()
// When we start the car, the headlights should be on by default
herbie.start_car()
console.log(herbie.headlights) // true
// But what happens when we want to start without headlights?
herbie.start_car( {headlights: false, gear: true} )
console.log(herbie.gear) // hasil jadi false karena kita sudah cek property dari object herbie dengan method hasOwnProperty
