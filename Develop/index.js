const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// const writeFile = require("./utils/generateMarkdown.js");

const promptUser = (questions) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Please include any installation instructions.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please include any usage information.",
    },
    {
      type: "input",
      name: "contribution",
      message: "Please include the contribution guidlines.",
    },
    {
      type: "input",
      name: "tests",
      message: "Please include any test instructions.",
    },
    {
      type: "checkbox",
      name: "licenses",
      message: "What licenses cover this project?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);
};

// TODO: Create a function to write README file
// const writeToFile = (fileName, data) => {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) {
//       return;
//     } else {
//       console.log("README file created!");
//     }
//   });
// };

const writeToFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  promptUser().then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// // Function call to initialize app
init();
