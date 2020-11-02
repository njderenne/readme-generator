const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const inputQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide any contribution guidelines if any.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.'
        },
        {
            type: 'checkbox',
            message: 'Does the list of choices work?',
            name: 'license',
            choices: ['License One', 'License Two', 'License Three']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])

    .then (inputAnswers => {
        console.log(inputAnswers);
        const readMe = generateMarkdown(inputAnswers);
        console.log(readMe);
        console.log(inputAnswers.title);

        fs.writeFile('./professional-readme.md', readMe, err => {
            if(err) throw err;
        });
    });
};


inputQuestions();


// // function to write README file
// function writeToFile(fileName, data) {
// }

// inputQuestions().then(inputAnswers => {
//     console.log(data);
//     const readMe = generateMarkdown(inputAnswers);
//     console.log('readMe');
//     console.log(readMe);

//     fs.writeFile('./professional-readme.md', readMe, err => {
//         if(err) throw err;
//     });
// });

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
