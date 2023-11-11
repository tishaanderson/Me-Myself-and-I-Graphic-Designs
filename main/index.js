
const fs = require('fs');
const inquirer = require('inquirer');


function init() {
  inquirer
  .createPromptModule([

    {
      type: 'list',
      message: 'Select a color for your logo design:',
      name: 'color',
      choices: ['red', 'green', 'blue'],
    },
    {
      type: 'list',
      message: 'Select a shape for your logo design:',
      name: 'shape',
      choices: ['triangle', 'circle', 'square'],
    },
    {
      type: 'input',
      message: 'Enter the text to display on your logo design:',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Enter the filename for the SVG:',
      name: 'filename',
      default: 'newLogo.svg',
    },


  ])
}

init();