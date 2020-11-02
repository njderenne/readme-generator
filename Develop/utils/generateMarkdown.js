// function to generate markdown for README

// function generateMarkdown(data) {
//   console.log(data);
// }

module.exports = generateMarkdown => {
  console.log(generateMarkdown);
  return `# ${generateMarkdown.title}


  ## Table of Contents

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contribution](#contribution)

  [Tests](#tests)
  
  [Questions](#questions)

  ## Description

  ${generateMarkdown.description}

  ## Installation

  ${generateMarkdown.installation}

  ## Usage

  ${generateMarkdown.usage}

  ## License

  ${generateMarkdown.license}

  ## Contribution

  ${generateMarkdown.contribution}

  ## Tests

  ${generateMarkdown.test}

  ## Questions

  ${generateMarkdown.github}
  
  ${generateMarkdown.email}
  `
};


// return `# ${inputAnswers}

// `
//${data.title}