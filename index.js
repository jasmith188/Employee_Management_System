// Required packages
const connection = require("./db/connection");
const inquirer = require("inquirer");
const { printTable } = require('console-table-printer');


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
    const joinTable = "SELECT employee.first_name AS First, employee.last_name AS Last, role.title FROM employee LEFT JOIN role ON employee.role_id = role.id;"
    connection.query(joinTable, (err, res) => {
        if (err) throw err;
        printTable(res);
        start();
    })
    console.log("\n List of employees\n");

}

//function to display all roles
const viewRoles = () => {

}

//
const viewDepartments = () => {

}

//
const addEmployee = () => {
    connection.query("SELECT * FROM role", (err, res) => {
        if(err) throw err;
        
    })
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