const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// const writeFile = require("./utils/generateMarkdown.js");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
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
      name: "Description",
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
      name: "Installation",
      message: "Please include any installation instructions.",
    },
    {
      type: "input",
      name: "Usage",
      message: "Please include any usage information.",
    },
    {
      type: "input",
      name: "Contribution",
      message: "Please include the contribution guidlines.",
    },
    {
      type: "input",
      name: "Test",
      message: "Please include any test instructions.",
    },
    {
      type: "checkbox",
      name: "License",
      message: "What licenses cover this project?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "Github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "Email",
      message: "What is your email address?",
    },
  ]);
};

// TODO: Create a function to write README file
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", fileContent, (err) => {
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
  promptUser();
  writeFile();
}

// // Function call to initialize app
init();
