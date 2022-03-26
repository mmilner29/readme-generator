// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

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
        type: 'confirm',
        name: 'table',
        message: 'Would you like to include a table of contents?',
        default: true
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
        message: 'Provide examples for how to run tests',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
