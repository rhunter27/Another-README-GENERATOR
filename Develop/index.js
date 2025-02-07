// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';

const questions = [
    { type: 'input', 
      name: 'title', 
      message: 'What is the title of your project?' },

    { type: 'input',
      name: 'description', 
      message: 'Please provide a description of your project.' },

    { type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },

    { type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.'
    },

    { type: 'list',
      name: 'license',
      message: 'What license does your project use?',
      choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'Copilot', 'None']
    },

    { type: 'input',
      name: 'contributing',
      message: 'Who contributed to this project?'
    },

    { type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?'
    },

    { type: 'input',
      name: 'GitHub',
      message: "What is your GitHub username?"
    },

    { type: 'input',
      name: 'email',
      message: "What is your email address?"  
    }  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        
    });
}
 
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}

// function to initialize program
init();