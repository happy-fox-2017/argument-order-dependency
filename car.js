'use strict'

class Car {

  startCar(options) {
    // if (options && options['headlights']) {
    //   this.headlights = options['headlights']
    // } else {
    //   this.headlights = true
    // }
    //
    // if (options && options['gear']) {
    //   this.gear = options['gear']
    // } else {
    //   this.gear = 1
    // }

    if (options) {
      if (Object.prototype.hasOwnProperty.call(options, 'headlights')) {
        this.headlights = options.headlights;
      } else {
        this.headlights = true;
      }

      if (Object.prototype.hasOwnProperty.call(options, 'gear')) {
        this.gear = options.gear;
      } else {
        this.gear = true;
      }
    } else {
      this.headlights = true;
      this.gear = true;
    }
  }
}

const herbie = new Car();

// When we start the car, the headlights should be on by default
herbie.startCar();

console.log(herbie.headlights); // true

// But what happens when we want to start without headlights?
herbie.startCar({
  headlights: false,
});

console.log(herbie.headlights); // true ...KOK BISA?!

