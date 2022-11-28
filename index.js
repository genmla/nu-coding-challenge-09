// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a description of your project, describing its function, reason for creation, or problem it solves:',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Include the steps required to run your application:',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Indicate how a user will use your application:',
        },
        {
            type: 'checkbox',
            message: 'Select the license you want to use for your project:',
            name: 'License',
            choices: ['Apache License 2.0',
                'GNU GPL v3',
                'MIT License',
                'BSD 2-Clause License',
                'BSD 3-Clause License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 1.0',
                'GNU AGPL v3',
                'GNU LGPL v3',
                'Mozilla Public License 2.0']
        },
        {
            type: 'checkbox',
            message: 'Please confirm the license badge you would like displayed in your README file:',
            name: 'Badge',
            choices: ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
                '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
                '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
                '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
                '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
                '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
                '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
                '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)']
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Enter any contributing guidelines for this repository:',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Enter any testing instructions for your project:',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the link to your GitHub profile:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email so users can reach you with additional questions:',
        },
    ]);
}

// TODO: Create a function to write README file
const writeToFile = ({ title, Badge, Description, Installation, Usage, License, Contributing, Tests, username, link, email }) =>
    `# ${title}

    ${Badge}

## Description

${Description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${Installation}

## Usage

${Usage}

## License

${License}

## Contributing

${Contributing}

## Tests

${Tests}

## Questions

Have a question for [${username}](${link})? Email them with additional quesitons at [${email}](${email}).
`;

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFile('README.md', writeToFile(answers)))
        .then(() => console.log('Successfully created README file!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
