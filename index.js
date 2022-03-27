// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');
const file = './readme/README.md'

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description explaining the what, why, and how of your project (your motivation, what problem does it solve, what did you learn).'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a License:',
        choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can users contribute to your project. Please type out your guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide examples for how to run tests.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const pageReadMe = generatePage(data);
    fs.writeFile(fileName, pageReadMe, err => {
        if (err) throw new Error(err);
        console.log('README created! Check out README.md in this directory to see it!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile(file, answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else went wrong
            }
          });
};

// Function call to initialize app
init()
