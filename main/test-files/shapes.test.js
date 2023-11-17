
//creating test for each shape to be sure user is prompted correctly
const Shapes = require('../js-files/shapes');
const { Triangle, Circle, Square } = Shapes;

describe('Triange Class', () => {

  test('render method should return SVG content for a triangle with the given shape color', () => {

    const triangle = new Triangle('TXT', 'black', 'triangle', 'red');

    const svgContent = triangle.render();

    expect(svgContent).toContain('<polygon points="150,0 300,200 0,200" fill="#ff0000"/>');
  });
});

