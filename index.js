// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;

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
            message: 'Provide a description of your project. What is its function? Why did you create it? How did it come about?',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What steps are required to run your application? Provide them below',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How will a user use your application?',
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'List any collaborators on your project, and include any third-party assets that require attribution',
        },
        {
            type: 'checkbox',
            message: 'What license do you want to use?',
            name: 'License',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0']
        },
    ]);
}
//  [title, Description, Installation, Usage, Credits, License];

// TODO: Create a function to write README file
const writeToFile = ({title, Description, Installation, Usage, Credits, License}) =>
`
#${title}

## Description

${Description}

## Installation

${Installation}

## Usage

${Usage}

## Credits

${Credits}

## License

${License}
`;
// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFile('README.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to README.md!'))
    .catch((err) => console.error(err)); 
};

// Function call to initialize app
init();
