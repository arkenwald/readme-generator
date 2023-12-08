//Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
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
            message: 'Write a short description describing W5H of your project',
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
            message: 'list collaborators, third-party assets, or tutorials',
        },
        {
            type: 'input',
            name: 'license',
            message: 'what license is your project using? (just write the name & copy paste it in later)',
        },

    ])
    // Create a function to write README file
    .then((data) => {
        const fileName = `README.md`;
        // 
            fs.writeFile(fileName, `${data.title}
                ##Description
                ${data.description}
                ## Installation
                ${data.installation}
                ##Usage
                ${data.usage}
                ##Credits
                ${data.credits}
                ##License
                ${data.license}`, (err) =>
                                err ? console.log(err) : console.log('Success!'))
        
    })
        // TODO: Create a function to initialize app
        function init() { }

        // Function call to initialize app
        init();