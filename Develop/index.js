// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const promptUser = (printData) => {
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
  ]);
  console.log(printData);
};

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
promptUser();
