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

function init2(){
    console.log('Current employees:')
    console.log(employees)
    inquirer.prompt([
        {
            name: 'addEmployee',
            message: 'Add an employee?',
            type: 'confirm'
        }
    ]).then(function(answers){
        if (answers.addEmployee === true){
            typeOfEmp();
        }
        else {
            return;
        }
    })
}

function typeOfEmp(){
    inquirer.prompt([
        {
            type: "list",
            name: "typeOfEmp",
            message: "Please select the type of employee",
            choices: ["Engineer","Intern","Manager"]
        }
    ]).then(function(answers){
        if (answers.typeOfEmp === "Engineer"){
            newEngineer(); 
        }
        if (answers.typeOfEmp === "Intern"){
            newIntern(); 
        }
        if (answers.typeOfEmp === "Manager"){
            newManager(); 
        }
        
    })
}

function newEngineer(){
    console.log('you have selected newEngineer')
    inquirer.prompt([
        {
            name: 'name',
            message: 'Name of engineer employee?'
        },
        {
            name: "id",
            message: "Employee ID?"
        },
        {
            name: "email",
            message: "Employee email?"
        },
        {
            name: "github",
            message: "Employee github?"
        }
    ]).then(function(answers){
        newObj = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(newObj)
        init2();
    })
}

function newManager(){
    inquirer.prompt([
        {
            name: 'name',
            message: 'Name of manager?'
        },
        {
            name: "id",
            message: "ID?"
        },
        {
            name: "email",
            message: "Email?"
        },
        {
            name: "officeNumber",
            message: "Office number?"
        }
    ]).then(function(answers){
        newObj = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(newObj)
        init2();
    })
}

function newIntern(){
    inquirer.prompt([
        {
            name: 'name',
            message: 'Name of intern?'
        },
        {
            name: "id",
            message: "Intern ID?"
        },
        {
            name: "email",
            message: "Intern email?"
        },
        {
            name: "school",
            message: "Name of school?"
        }
    ]).then(function(answers){
        newObj = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(newObj)
        init2();
    })
}


questions = [];
answerArray = [];
employees = [];
questions2 = [];

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

// init();
init2();