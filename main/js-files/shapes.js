class Shapes {
  constructor(color) {
    this.color = color;
  }

  render() {
    throw new Error('Method not implemented.');
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<svg width="100" height="100"><polygon points="50,0 100,100 0,100" fill="${this.color}" /></svg>`;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<svg width="100" height="100"><circle cx="50" cy="50" r="50" fill="${this.color}" /></svg>`;
  }
}

class Square extends Shapes {
  constructor(color) {
    super(color);
  }

  render() {
    return `<svg width="100" height="100"><rect width="100%" height="100%" fill="${this.color}" /></svg>`;
  }
}

module.exports = {Shapes, Triange, Circle, Square};