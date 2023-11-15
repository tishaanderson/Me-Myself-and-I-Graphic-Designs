class Shapes {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    throw new Error('Method not implemented.');
  }
}

class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = 'Triangle';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"><polygon points="150,0 300,200 0,200" fill="${this.shapeColor}" /><style>
    .text{font-size: 30px;}</style><text x="150" y="125" class="text" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
  }
}

class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = 'Circle';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"><circle cx="150" cy="100" r="100" fill="${this.shapeColor}" /><style>
    .text{font-size: 30px;}</style><text x="150" y="100" class="text" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
  }
}

class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = 'Square';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"><rect width="100%" height="100%" fill="${this.shapeColor}" /><style>
    .text{font-size: 30px;}</style><text x="50%" y="50%" class="text" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
  }
}

module.exports = {Shapes, Triangle, Circle, Square};