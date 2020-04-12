// Required packages
const connection = require("./db/connection");
const inquirer = require("inquirer");

//Create a connection to your database
//Connect to your database and run function to start the apllication
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

//Write fuctions to run the aplllications

//Display a list with 7 questions options
//after the questions write code to run a function depending on the users response
const menuOptions = () => {

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