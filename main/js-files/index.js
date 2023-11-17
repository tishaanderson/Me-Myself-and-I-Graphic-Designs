
//import all file paths necessary
const fs = require('fs');
const inquirer = require('inquirer');
const createLogo = require('./svgContent');
const { Triangle, Circle, Square } = require('./shapes')

//init function to prompt user through questions regarding their design
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
      choices: ['White', 'Black', 'Gray'],
    },
    {
      type: 'list',
      message: 'Select a SHAPE for your logo design:',
      name: 'shape',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'list',
      message: 'Select a COLOR for the SHAPE of your logo design:',
      name: 'shapeColor',
      choices: ['Red', 'Green', 'Blue'],
    },
    
    
  ])
  //creating the new logo file with the user answers
  .then((responses) => {

    const svgContent = createLogo(responses);

    fs.writeFile('logo.svg', svgContent, (err) => {
      err ? console.error(err) : console.log('Generated logo.svg!');
    });
  });
}

init();