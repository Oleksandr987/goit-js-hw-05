/* eslint-disable linebreak-style */
class Car {
  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.speed = 0;
    this.distance = 0;
    this.isOn = false;
  }

  static getSpecs({
    maxSpeed, speed, isOn, distance, price,
  }) {
    console.log(
      `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`,
    );
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      this.speed = this.speed + value;
    } else { this.speed = this.maxSpeed; }
  }

  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed = this.speed - value;
    } else { this.speed = 0; }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance = this.distance + hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
