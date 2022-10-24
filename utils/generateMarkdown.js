// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license === "None") {
//     return "";
//   } else {
//     return `## License
//     ${license}`;
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Table of Contents
  --[Description](#description)

  --[Installation](#installation)

  --[Usage](#usage)

  --[Contribution](#contribution)
  
  --[Tests](#tests)
  
  --[Questions](#questions)

  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contribution
  ${data.Contribution}

  ## Tests
  ${data.Test}

  ## Questions
  If you would like to contact me with any questions, please reach out.
  Email: ${data.Email}
  Github: https://github.com/${data.Github}
`;
}

module.exports = generateMarkdown;
