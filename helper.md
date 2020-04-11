​
## Employee Tracker - Start Up Guide
​
#### - Require all your Packages (ex. mysql, etc...)
​
#### - Create a Connection to your Database.
​
#### - Connect to your Database and run function to start the application.
​
#### - Write functions to run the application:
​
​
​
1. #### Function to display a list of "Options" to the user - *see README File*
-   The User should have at least 7 questions.
-   After the questions, should write code to run a function depending on the user response ( maybe a switch..?).
​
2. #### Function to display all Employees (First Name, Last Name, Role) .
-   In order to get the Role Titles to display on your inquirer list, you will need to JOIN the two tables (employee and role).
​
3. #### Function to display all Roles (Title, Salary, Department).
-   In order to get the Department Names to display on your inquirer list, you will need to JOIN the two tables (employee and role).
​
4. #### Function to display all Departments ( Name ).
​
5. #### Function to Add a Department ( name ).
​
6. #### Function to Add a Role ( title, salary, department_id ).
-   You will need to enter a department id for the New Role. In order to pick a department, you will need to run a query to the department table to get the list of Departments to be displayed in the inquirer list and pick the right one.
​
7. #### Function to Add a Employee ( first_name, last_name, role_id ).
-   You will need to enter a Role id for the New Employee. In order to pick a Role, you will need to run a query to the Role table to get the list of Roles to be displayed in the inquirer list and pick the right one.
​
8. #### Function to Update an Employee Role ( first_name, last_name, role_id )
-   Display a list of employees showing the Id, First Name, Last Name and Roles (Same as first function(View Employees)).
-   Display questions to ask which for employee Id and New role to pick.
    
    *In order to pick a Role, you will need to run a query to the Role table to get the list of Roles to be displayed in th inquirer list and pick the right one.* 
-   Update the employee table WHERE id = employee Id and SET the role_id = the new role id.