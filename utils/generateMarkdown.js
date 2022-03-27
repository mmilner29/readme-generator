// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license == 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license == 'GNU AGPLv3') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license == 'GNU GPLv3') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license == 'GNU AGPLv3') {
    return '(https://www.gnu.org/licenses/agpl-3.0)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  ${renderLicenseBadge(license) + renderLicenseLink(license)}  
  This application is covered by the ${license} license.
  `
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)  
  -[Usage](#usage)  
  -[Contributions](#contributions)  
  -[License](#license)  
  -[Tests](#tests)  
  -[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribute}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.test}

  ## Questions
  Please contact me using the following:  
  Github: https://github.com/${data.github}  
  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
