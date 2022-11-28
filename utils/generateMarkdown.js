// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  switch (License) {
    case "Apache License 2.0":
      licencseLink = 'https://opensource.org/licenses/Apache-2.0'
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case "GNU GPL v3":
      licencseLink = 'https://opensource.org/licenses/Apache-2.0'
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case "MIT License":
      licencseLink = 'https://opensource.org/licenses/Apache-2.0'
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case "BSD 2-Clause License":
      licencseLink = 'https://opensource.org/licenses/Apache-2.0'
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case "BSD 3-Clause License":
      licencseLink = 'https://opensource.org/licenses/Apache-2.0'
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case "Creative Commons Zero v1.0 Universal":
      licencseLink = 'https://opensource.org/licenses/Apache-2.0'
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case "Eclipse Public License 1.0":
      licencseLink = 'https://opensource.org/licenses/Apache-2.0'
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case "GNU AGPL v3":
      licencseLink = 'https://opensource.org/licenses/Apache-2.0'
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case "GNU LGPL v3":
      licencseLink = 'https://opensource.org/licenses/Apache-2.0'
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case "Mozilla Public License 2.0":
      licencseLink = 'https://opensource.org/licenses/Apache-2.0'
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
console.log(module.exports)
generateMarkdown()
