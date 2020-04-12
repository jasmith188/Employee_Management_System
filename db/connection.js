const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_systems_db"
})

module.exports = connection; 