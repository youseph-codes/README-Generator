var fileGenerator = require("./");
var fs = require("fs");
var inquirer = require('inquirer');

// questions to ask the user //
let questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title",
    }, {
        type: "input",
        message: "Please give your project a detailed description. ",
        name: "description",
    }, {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username",
    }, {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }, {
        type: "input",
        message: "",
        name: "",
    }, {
        type: "input",
        message: "",
        name: "",
    }, {
        type: "input",
        message: "",
        name: "",
    }, {
        type: "input",
        message: "",
        name: "",
    }, {
        type: "input",
        message: "",
        name: "",
    }, {
        type: "input",
        message: "",
        name: "",
    },
]