
//TODO make prompt for user to choose TEXT COLOR and link it to a color keyword or a hexadecimal number
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)

//TODO make prompt for user to choose SHAPE and link it to a keyword(probably)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square

//TODO make prompt for user to choose SHAPE COLOR and link it to a color keyword or a hexadecimal number
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)

//TODO create writeFile function to save new file as 'logo.svg' after user answers prompt questions
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`

//TODO console log "generated logo.svg" when all prompts are answered
// AND the output text "Generated logo.svg" is printed in the command line

//TODO greate logo Template to display a 300x200 pixel image that matches the user input criteria when opened in browswer
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered





const fs = require('fs');
const inquirer = require('inquirer');
const svgContent = require('./svgContent');
const shapes = require('./shapes')


function init() {

  const elements = inquirer
  .prompt([

    {
      type: 'input',
      message: 'Enter up to 3 characters that you want displayed on your logo design:',
      name: 'text',
    },
    {
      type: 'list',
      message: 'Select a COLOR for the TEXT on your logo design:',
      name: 'textColor',
      choices: ['white', 'black', 'gray'],
    },
    {
      type: 'list',
      message: 'Select a SHAPE for your logo design:',
      name: 'shape',
      choices: ['triangle', 'circle', 'square'],
    },
    {
      type: 'list',
      message: 'Select a COLOR for the SHAPE of your logo design:',
      name: 'shapeColor',
      choices: ['red', 'green', 'blue'],
    },
    
    
  ])
  .then((responses) => {

    const img = svgContent(responses)
    const final = img.render();

    fs.writeFile('../examples/square/logo.svg', final, (err) => {
      err ? console.error(err) : console.log('Generated logo.svg!');
    });
  });
}

init();