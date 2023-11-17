
//importing shapes file
const {Circle, Square, Triangle} = require('./shapes');

//creating logo template literal
function createLogo({

  text,
  textColor,
  shape,
  shapeColor,
}) {

  let textFillColor = '';
  let shapeFillColor = '';

  switch(textColor) {
    case 'White':
      textFillColor = '#ffffff';
      break;
    case 'Black':
      textFillColor = '#000000';
      break;
    case 'Gray':
      textFillColor = '#808080';
      break;
    default:
      throw new Error('Invalid text color.');
  }

  switch(shapeColor) {
    case 'Red':
      shapeFillColor = '#ff0000';
      break;
    case 'Green':
      shapeFillColor = '#008000';
      break;
    case 'Blue':
      shapeFillColor = '#0000ff';
      break;
    default:
      throw new Error('Invalid shape color.');
  }

  let selectedShape;
  switch(shape) {
    case 'Triangle':
      selectedShape = new Triangle(text, textFillColor, shapeFillColor);
      break;
    case 'Circle':
      selectedShape = new Circle(text, textFillColor, shapeFillColor);
      break;
    case 'Square':
      selectedShape = new Square(text, textFillColor, shapeFillColor);
      break;
    default:
      throw new Error('Invalid shape.');
  }
  
  return selectedShape.render();
}

//exporting function
module.exports = createLogo;