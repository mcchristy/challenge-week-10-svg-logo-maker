const fs = require('fs');
const inquirer = await import('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

function writeSVGFile(filename, content) {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Generated ${filename}`);
      }
    });
  }

  function init() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters for the logo:',
          validate: (value) => {
            if (value.length <= 3) {
              return true;
            }
            return 'Please enter up to three characters.';
          },
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter the text color (keyword or hexadecimal):',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape for the logo:',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter the shape color (keyword or hexadecimal):',
        },
      ])
      .then((answers) => {
        let shape;
        switch (answers.shape) {
          case 'circle':
            shape = new Circle();
            break;
          case 'triangle':
            shape = new Triangle();
            break;
          case 'square':
            shape = new Square();
            break;
          default:
            console.log('Invalid shape selected.');
            return;
        }
  
        shape.setColor(answers.shapeColor);
  
        const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    ${shape.render()}
  </svg>`;
  
        writeSVGFile('logo.svg', svgContent);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  init();