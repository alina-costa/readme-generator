// const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

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
