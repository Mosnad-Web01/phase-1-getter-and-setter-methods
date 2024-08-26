// circle.js
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  // Getter for radius
  get radius() {
    return this._radius;
  }

  // Setter for radius
  set radius(value) {
    this._radius = value;
  }

  // Getter for diameter
  get diameter() {
    return 2 * this._radius;
  }

  // Setter for diameter
  set diameter(value) {
    this._radius = value / 2;
  }

  // Getter for circumference
  get circumference() {
    return 2 * Math.PI * this._radius;
  }

  // Setter for circumference
  set circumference(value) {
    this._radius = value / (2 * Math.PI);
  }

  // Getter for area
  get area() {
    return Math.PI * this._radius * this._radius;
  }

  // Setter for area
  set area(value) {
    this._radius = Math.sqrt(value / Math.PI);
  }
}
