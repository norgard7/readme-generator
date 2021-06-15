// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
 {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
  },
{
    type: 'input', 
    name: 'description',
    message: 'What is the description of your project?'
},
{
    type: 'input', 
    name: 'usage',
    message: 'How will someone use your project?'
},

{
    type: 'input', 
    name: 'installation',
    message: 'How is this installed?'
},
{
    type: 'list', 
    name: 'license',
    message: 'Do you need a license?',
    choices: ["Apache License 2.0", "GNU GPL v3", "MIT", "Mozilla Public License 2.0", "No license"]
},
{
    type: 'input', 
    name: 'contributing',
    message: 'Who contributed to your project?'
},
{
    type: 'input', 
    name: 'tests',
    message: 'How do you test your project?'
},
{
    type: 'input', 
    name: 'email',
    message: 'What is your email address'
},
{
    type: 'input', 
    name: 'github',
    message: 'What is your github username?'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generate.generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Successfully created Readme'));
  }
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            generate.renderLicenseBadge(response.license);
            generate.renderLicenseLink(response.license);
            writeToFile('generateReadme',response)
        })     
}

// Function call to initialize app
init();


