// Dependencies
var inquirer = require("inquirer");
var fs = require("fs");
var createReadMe = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description for your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required for installation?",
    name: "install",
  },
  {
    type: "input",
    message: "Explain how a user can use your project.",
    name: "usage",
  },
  {
    type: "input",
    message: "What are your contribution guidelines?",
    name: "contrib",
  },
  {
    type: "input",
    message: "What are the testing instructions?",
    name: "testing",
  },
  {
    type: "list",
    message: "Which license should your project have?",
    name: "license",
    choices: ["GNU v3.0", "Apache License 2.0", "ISC", "MIT"],
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your preferred email address?",
    name: "email",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
