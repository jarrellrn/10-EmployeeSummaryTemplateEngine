const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/Employee.js")

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const numOfEmp = [];
function init(){
    inquirer.prompt([
        {
            name: 'numOfEmp',
            message: 'How many employees do you want to add? (Including the manager)'
        }
    ]).then(function(answers){
        numOfEmp.push(answers.numOfEmp);
        questionsFunc();
    })
};


questions = [];

function questionsFunc(){
    for (var i = 0; i < numOfEmp[0]; i += 1) {
        questions.push({
            type: "list",
            name: "typeOfEmp" + (i+1),
            message: "Please select type of employee #" + (i+1),
            choices: ["Engineer","Intern","Manager"]
        });
    }
    inquirer.prompt(
        questions
    ).then(function(answers){
        console.log(answers);
        return;
    })
}


for (var i = 0; i < numOfEmp[0]; i += 1) {
    questions.push({
        type: "input",
        name: "email",
        message: "Enter recipients email"
    });
}
  
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

init();