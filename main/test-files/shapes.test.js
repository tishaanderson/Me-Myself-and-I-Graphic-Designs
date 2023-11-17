
//creating test for each shape to be sure user is prompted correctly
const Shapes = require('../js-files/shapes');
const { Triangle, Circle, Square } = Shapes;

describe('Triange Class', () => {

  test('render method should return SVG content for a triangle with the given shape color', () => {

    const triangle = new Triangle('triangleTXT', 'black','red');

    const svgContent = triangle.render();

    expect(svgContent).toContain(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"><polygon points="150,0 300,200 0,200" fill="red" /><text x="150" y="125" class="text" fill="black" font-size="30px" text-anchor="middle">triangleTXT</text></svg>`);
  });
});

describe('Circle Class', () => {

  test('render method should return SVG content for a circle with the given shape color', () => {

    const circle = new Circle('circleTXT', 'white','blue');

    const svgContent = circle.render();

    expect(svgContent).toContain(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"><circle cx="150" cy="100" r="100" fill="blue" /><text x="150" y="100" class="text" fill="white" font-size="30px" text-anchor="middle">circleTXT</text></svg>`);
  });
});

describe('Square Class', () => {

  test('render method should return SVG content for a square with the given shape color', () => {

    const square = new Square('squareTXT', 'gray','green');

    const svgContent = square.render();

    expect(svgContent).toContain(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"><rect width="100%" height="100%" fill="green" /><text x="50%" y="50%" class="text" fill="gray" font-size="30px" text-anchor="middle">squareTXT</text></svg>`);
  });
});

