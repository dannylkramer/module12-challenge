const inquirer = require('inquirer');
const { Client } = require('pg');
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./queries');
require('dotenv').config();

const client = new Client ({
    user: process.env.DB_USER,
    host: 'localhost',
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5433,
});

client.connect();

const mainMenu = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Exit'
            ],
        },
    ]);

    switch (answers.action) {
        case 'View All Departments':
            await viewDepartments(client);
            break;
        case 'View All Roles':
            await viewRoles(client);
            break;
        case 'View All Employees':
            await viewEmployees(client);
            break;
        case 'Add Department':
            await addDepartment(client);
            break;
        case 'Add Role':
            await addRole(client);
            break;
        case 'Add Employee':
            await addEmployee(client);
            break;
        case 'Update Employee Role':
            await updateEmployeeRole(client);
            break;
        case 'Exit':
            client.end();
            return;
    }

    mainMenu();
};

mainMenu();
