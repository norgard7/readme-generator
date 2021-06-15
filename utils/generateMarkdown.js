let badge = "";
let link = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      
      break;
    
    case "GNU GPL v3":

    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";


      break;
    
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

      break;
    
    
    case "Mozilla Public License 2.0":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
  
    default:
      badge = "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      
      break;
    
    case "GNU GPL v3":

    link = "https://www.gnu.org/licenses/gpl-3.0";


      break;
    
    case "MIT":
      link = "https://opensource.org/licenses/MIT";

      break;
    
    
    case "Mozilla Public License 2.0":
      link = "https://opensource.org/licenses/MPL-2.0";
      break;
  
    default:
      link = "";
      break;
  }
}
 


// TODO: Create a function that returns the license section of README


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${badge}

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
[${data.license}](${link})

## Questions? 
Please contact via email at <${data.email}> or via github at <http://www.github.com/${data.github}>

##
`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  generateMarkdown
}
