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

The application will include `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest. Any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes will be placed in a parent `Shape` class and the inheritance method will reuse the code in the child classes.

Each shape will then be tested using the `render()` method that returns a string for the corresponding SVG file with the given shape color.

Once setup, answer the following prompt questions regarding your logo:

``````
1. Enter up to 3 characters that you want displayed on your logo design.

2. Select a COLOR for the TEXT on your logo design: [White, Black, or Gray]

3. Select a SHAPE for your logo design: [Triangle, Circle, or Square]

4. Select a COLOR for the SHAPE of your logo design: [Red, Green or Blue]
``````

Once all questions are answered, you will see the following:

``````
Generated logo.svg!
``````

Your newly designed logo will populate in your project folders.



## Test Sample

#### Credits

#### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)