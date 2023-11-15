const {Circle, Square, Triangle} = require('./shapes');

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

  switch(shape) {
    case 'triangle':
      svgContent = new Triangle(text, textFillColor, shapeFillColor);
      break;
    case 'circle':
      svgContent = new Circle(text, textFillColor, shapeFillColor);
      break;
    case 'square':
      svgContent = new Square(text, textFillColor, shapeFillColor);
      break;
    default:
      throw new Error('Invalid shape.');
  }
  
  return svgContent;
}

module.exports = createLogo;




// const svgContent = function ({
//   text,
//   textColor,
//   shape,
//   shapeColor,
// }) {

//   return `
    
//   <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
//     <rect width="100%" height="100%" fill="${this.color}" />
//     <text x="50%" y="50%" font-size="16" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">
//       ${this.text}
//     </text>
//   </svg>
    
//   `;

// };

// module.exports = svgContent;
