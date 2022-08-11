import fileGenerator from "./fileGenerator";
import { writeFile } from "fs";
import { prompt } from 'inquirer';

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
        name: "userName",
    }, {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

prompt(questions).then(function(response) {
    console.log(response);

    var content = fileGenerator(response);
    console.log(content);

    writeFile("./README.md", content, function(err){
        if (err) throw err
        console.log("success");
    });
});