// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
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
    type: 'input', 
    name: 'license',
    message: 'Do you need a license? (leave blank to skip)'
},
{
    type: 'input', 
    name: 'contributing',
    message: 'What is the description of your project?'
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

 
// template for how the readme will look
const template = (data) => `# ${data.title}



## Table Of Contents
* [Installation](#Installation)
* [Description](#description)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)



## Description
${data.description}

## Installation
${data.installation}

## Usage 

${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License 
${data.license}

## Questions? 
Please email me at <${data.email}> or via github at <http://www.github.com/${data.github}>

##`
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, template(data), (err) =>
      err ? console.log(err) : console.log('Successfully created Readme'));
  }
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            (writeToFile('generatedReadme', response)))
  
}

// Function call to initialize app
init();


// const generateHTML = (answers) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;


//   .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });