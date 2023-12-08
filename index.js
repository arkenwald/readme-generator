//Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const {renderLicenseBadge} = require('./utils/generateMarkdown.js');
const {renderLicenseLink} = require('./utils/generateMarkdown.js');
const {renderLicenseSection} = require('./utils/generateMarkdown.js');
function init() {
    inquirer
    // Create an array of questions for user input
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description describing W5H of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'how does someone install your project? (Do not forget to add more details later!)',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List collaborators, third-party assets, or tutorials.',
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'GNU', 'apache'],
            default: ['MIT'],
            message: 'What license is your project using?',
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter github Link',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please input your email.',
        },

        {
            type: 'input',
            name: 'contactYou',
            message: 'How do we contact you?',
        },

    ])
    // Create a function to write README file
    .then((data) => {
        const fileName = `README.md`;
        const licenseBadge = renderLicenseBadge(data.license);
        const licenseLink = renderLicenseLink(data.license);
        const licenseSection = renderLicenseSection(data.license);
            fs.writeFile(fileName, `
                ${data.title}
                ${licenseBadge}
                ##Description
                ${data.description}
                ## Installation
                ${data.installation}
                ##Usage
                ${data.usage}
                ##Credits
                ${data.credits}
                ##License
                ${data.license}
                ${licenseLink}
                ${licenseSection}
                ##Questions
                ${data.github}
                ${data.email}
                You can contact me at: ${data.contactYou}`, (err) =>
                                err ? console.log(err) : console.log('Success!'))
        
    })
}
// Function call to initialize app
init();
