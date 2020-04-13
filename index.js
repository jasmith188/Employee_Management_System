// Required packages
const connection = require("./db/connection");
const inquirer = require("inquirer");
const { printTable } = require('console-table-printer');
const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());
const longText = 'This is an application, ' +
    'that will help manage a group of employees ';
 
console.log(
    logo({
        name: 'CONTENT MANAGEMENT SYSTEM',
        font: 'Speed',
        lineChars: 10,
        padding: 2,
        margin: 3,
        borderColor: 'grey',
        logoColor: 'bold-green',
        textColor: 'green',
    })
    .emptyLine()
    .right('version 3.7.123')
    .emptyLine()
    .center(longText)
    .render()
);


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
    const joinTable = "SELECT employee.first_name AS first_name, employee.last_name AS last_name, role.title FROM employee LEFT JOIN role ON employee.role_id = role.id;"
    connection.query(joinTable, (err, res) => {
        if (err) throw err;
        printTable(res);
        start();
    })
    console.log("\n List of Employees\n");

}

//function to display all roles
const viewRoles = () => {
    const joinTable = "SELECT role.title, role.salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id;"
    connection.query(joinTable, (err, res) => {
        if (err) throw err;
        printTable(res);
        start();
    })
    console.log("\n List of all Roles as listed\n");
}

//function to display all Departments
const viewDepartments = () => {
    const departments = connection.query("SELECT department.name FROM department", (err, res) => {
        if (err) throw err;
        printTable(res);
        start();
    })
    console.log("\n List of all Roles as listed\n");
}

// function to add an Employee
const addEmployee = () => {
    connection.query("SELECT * FROM role", (err, res) => {
        if (err) throw err;
        const newRole = res.map((role) => {
            return `${role.title}`
        })
        inquirer
            .prompt([
                {
                    name: "first_name",
                    type: "input",
                    message: "Enter First Name"
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "Enter Last Name"
                },
                {
                    name: "role",
                    type: "list",
                    message: "Choose the role?",
                    choices: newRole

                }
            ]).then(answer => {
                let idRole;
                for (let i = 0; i < res.length; i++) {
                    if (res[i].title == answer.role) {
                        idRole = res[i].role_id;
                    }

                }
                // when finished prompting, insert a new item into the db with that info
                connection.query("INSERT INTO employee SET ?",
                    {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        role_id: idRole
                    },
                    function (err) {
                        if (err) throw err;
                        console.log(`n\ YOur new employee ${answer.first_name} ${answer.last_name} has been created\n`);
                        // re-prompt the user for if they want to bid or post
                        start();
                    }
                );
            })
    })
}

//function to add a Role
const addRole = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        const departmentName = res.map((depname) => {
            return `${depname.name}`
        })
        inquirer
            .prompt([
                {
                    name: "salary",
                    type: "input",
                    message: "Enter Employees Role"
                },
                {
                    name: "role",
                    type: "input",
                    message: "Enter Employees Salary"
                },
                {
                    name: "department",
                    type: "list",
                    message: "What Department does this employee work in?",
                    choices: departmentName

                }
            ]).then(answer => {
                let departmentId;
                for (let i = 0; i < res.length; i++) {
                    if (res[i].title == answer.role) {
                        departmentId = res[i].department_id;
                    }

                }
                // when finished prompting, insert a new item into the db with that info
                connection.query(
                    "INSERT INTO role SET ?",
                    {
                        role: answer.role,
                        salary: answer.salary,
                        department_id: departmentId
                    },
                    function (err) {
                        if (err) throw err;
                        console.log(`n\ YOur new role ${answer.role} has been created\n`);
                        // re-prompt the user for if they want to bid or post
                        start();
                    }
                );
            });
    })
}

//function to add a Department
const addDepartment = () => {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input",
                message: "What is the name of the new Department"
            }

        ]).then(answer => {
            connection.query(
                "INSERT INTO department SET ?",
                {
                    name: answer.department
                },
                function (err) {
                    if (err) throw err;
                    console.log(`n\ YOur new department ${answer.department} has been created\n`);
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );
        });

}

//Function to Update an Employee Role ( first_name, last_name, role_id )
const updateEmployeeRole = () => {
    const joinTable = "SELECT employee.first_name AS first_name, employee.last_name AS last_name, role.title FROM employee LEFT JOIN role ON employee.role_id = role.id;"
    connection.query(joinTable, (err, res) => {
        if (err) throw err;
        printTable(res)
    })
    connection.query("SELECT * FROM role", (err, res) => {
        if (err) throw err;
        const chooseEmployee = res.map((name) => {
            return `${name.first_name} ${name.last_name}`
        })
        connection.query("SELECT role.title, role.role_id, FROM role", (err, result) => {
            if (err) throw err;
            const chooseRole = res.map((name) => {
                return `${name.first_name} ${name.last_name}`
            })

            inquirer
                .prompt([
                    {
                        name: "updateEmployee",
                        type: "list",
                        message: "Which Employee do you want to update?",
                        choices: "chooseEmployee"
                    },
                    {
                        name: "updateRole",
                        type: "list",
                        message: "Enter Last Name",
                        choices: "chooseRole"
                    }

                ]).then(answer => {
                    let employeeId;
                    for (let i = 0; i < res.length; i++) {
                        if (res[i].title == answer.updateEmployee) {
                            employeeId = res[i].employee_id;
                        }

                    }
                    let roleId;
                    for (let i = 0; i < res.length; i++) {
                        if (res[i].title == answer.updateRole) {
                            roleId = res[i].role_id;
                        }

                    }
                    connection.query(
                        "UPDATE employee SET ? WHERE ?",
                        [
                            {
                                role_id: idRole
                            },
                            {
                                id: answer.id
                            }
                        ],
                        function (err, res) {
                            if (err) throw err;
                            start();
                        }
                    );
                })

        })
    })
}
