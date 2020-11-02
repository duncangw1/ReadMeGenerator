// Dependencies
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project's title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description for your project:",
    name: "description",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install",
    default: "npm i",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "testing",
    default: "npm test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contrib",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Success! Generating README...");
    }
  });
}

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
  try {
    const data = await inquirer.prompt(questions);
    console.log(data);

    const readMe = generateMarkdown(data);

    await writeFileAsync("sampleREADME.md", readMe);
  } catch (error) {
    console.log(error);
  }
}

// function call to initialize program
init();
