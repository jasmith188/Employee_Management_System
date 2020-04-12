--Create Deaprtments--
INSERT INTO department (name) VALUES("Managers");
INSERT INTO department (name) VALUES("Chefs");
INSERT INTO department (name) VALUES("FOH Employees");
INSERT INTO department (name) VALUES("BOH Employees");

INSERT INTO role (title, salary, department_id) values ("Restaurant Manager", 75000.00, 1);
INSERT INTO role (title, salary, department_id) values ("Bar Manager", 50000.00, 1);
INSERT INTO role (title, salary, department_id) values ("Executive Chef", 95000.00, 2);
INSERT INTO role (title, salary, department_id) values ("Sous Chef", 50000.00, 2);
INSERT INTO role (title, salary, department_id) values ("Lead Server", 45000.00, 3);
INSERT INTO role (title, salary, department_id) values ("Bartender", 55000.00, 3);
INSERT INTO role (title, salary, department_id) values ("Grill Cook", 45000.00, 4);
INSERT INTO role (title, salary, department_id) values ("Garde manger Cook", 55000.00, 4);
