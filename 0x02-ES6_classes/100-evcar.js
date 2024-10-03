import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; // Store the range in the underscore-prefixed version
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    if (typeof newRange === 'string') {
      this._range = newRange;
    } else {
      throw new Error('Range must be a string');
    }
  }

  cloneCar() {
    // Return an instance of Car instead of EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}
