// Required packages
const connection = require("./db/connection");
const inquirer = require("inquirer");
// const logo = require('asciiart-logo');
// const config = require('./package.json');
// console.log(logo(config).render());
// const longText = 'Lorem ipsum dolor sit amet, ' +
//     'consectetur adipiscing elit, ' +
//     'sed do eiusmod tempor incididunt ut labore et ' +
//     'dolore magna aliqua. Ut enim ad minim veniam, ' +
//     'quis nostrud exercitation ullamco laboris ' +
//     'nisi ut aliquip ex ea commodo consequat. Duis aute ' +
//     'irure dolor in reprehenderit in voluptate velit esse ' +
//     'cillum dolore eu fugiat nulla pariatur. ' +
//     'Excepteur sint occaecat cupidatat non proident, ' +
//     'sunt in culpa qui officia deserunt mollit anim ' +
//     'id est laborum.';

// console.log(
//     logo({
//         name: 'Just a simple example',
//         font: 'Speed',
//         lineChars: 10,
//         padding: 2,
//         margin: 3,
//         borderColor: 'grey',
//         logoColor: 'bold-green',
//         textColor: 'green',
//     })
//         .emptyLine()
//         .right('version 3.7.123')
//         .emptyLine()
//         .center(longText)
//         .render()
// );

//Create a connection to your database
//Connect to your database and run function to start the apllication
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

//Write fuctions to run the aplllications

//Display a list with 7 questions options
//after the questions write code to run a function depending on the users response
function start() {
    inquirer
        .prompt({
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: [
                "View Employees",
                "View Roles",
                "View Departments",
                "Add Employee",
                "Add Role",
                "Add Department",
                "Update Employee Role",
                "Exit"
            ]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            switch (answer.choice) {
                case "View Employees":
                    viewEmployees();
                    break;

                case "View Roles":
                    viewRoles();
                    break;

                case "View Departments":
                    viewDepartments();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }

        });
}

//function to display all employees -- 
const viewEmployees = () => {

}

//function to display all roles
const viewRoles = () => {

}

//
const viewDepartments = () => {

}

//
const addEmployee = () => {

}

//
const addRole = () => {

}

//
const addDepartment = () => {

}

//
const updateEmployeeRole = () => {

}