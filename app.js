const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./generateSVG');
import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (input) => {
      return input.length <= 3;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal):',
  },
];

inquirer.prompt(questions).then((answers) => {
  const svgContent = generateSVG(answers);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
});