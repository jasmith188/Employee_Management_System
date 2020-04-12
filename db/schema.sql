-- Drops the employee_systems_db if it already exists --
DROP DATABASE IF EXISTS employee_systems_db;
-- Create a database called employee_systems_db --
CREATE database employee_systems_db;

USE employee_systems_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);
CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10, 2),
    department_id INT(10),
    PRIMARY KEY (id)
);
CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    PRIMARY KEY (id),
    role_id INT(10)
);

