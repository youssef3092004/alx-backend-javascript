export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand; // Sets the brand using the setter
    this.motor = motor; // Sets the motor using the setter
    this.color = color; // Sets the color using the setter
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof newBrand === "string") this._brand = newBrand;
    else throw new Error("Brand must be a string");
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (typeof newMotor === "string") this._motor = newMotor;
    else throw new Error("Motor must be a string");
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (typeof newColor === "string") this._color = newColor;
    else throw new Error("Color must be a string");
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
