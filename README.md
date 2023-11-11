# Me-Myself-and-I-Graphics (Challenge #10)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test Sample](#test-sample)
- [Credits](#credits)
- [Contributing](#contributing)
- [License](#license)

## Description

As a freelance web developer, my goal was to create a simple logo generator for my projects. This way I can make the logos myself and avoid having to pay a graphic designer.

This is possible using a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/SVG). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.



## Installation

The application will use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application will be invoked by using the following command:

``````
node index.js
``````

## Usage

It is recommended that you start with a directory structure that looks like the following example:

``````
.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions    
``````

**
## Test Sample

#### Credits

#### License