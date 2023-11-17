
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
    case 'white':
      textFillColor = '#ffffff';
      break;
    case 'black':
      textFillColor = '#000000';
      break;
    case 'gray':
      textFillColor = '#808080';
      break;
    default:
      throw new Error('Invalid text color.');
  }

  switch(shapeColor) {
    case 'red':
      shapeFillColor = '#ff0000';
      break;
    case 'green':
      shapeFillColor = '#008000';
      break;
    case 'blue':
      shapeFillColor = '#0000ff';
      break;
    default:
      throw new Error('Invalid shape color.');
  }

  let selectedShape;
  switch(shape) {
    case 'triangle':
      selectedShape = new Triangle(text, textFillColor, shapeFillColor);
      break;
    case 'circle':
      selectedShape = new Circle(text, textFillColor, shapeFillColor);
      break;
    case 'square':
      selectedShape = new Square(text, textFillColor, shapeFillColor);
      break;
    default:
      throw new Error('Invalid shape.');
  }
  
  return selectedShape.render();
}

//exporting function
module.exports = createLogo;