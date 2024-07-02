# Employee Management System

## Description

The Employee Management System is a command-line application built with Node.js, Inquirer, and PostgreSQL. It allows business owners to view and manage departments, roles, and employees in their company, helping them to organize and plan their business operations.

## Table of Contents

- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Application Features](#application-features)
- [Technologies Used](#technologies-used)
- [Video Walkthrough](#video-walkthrough)
- [License](#license)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/employee-management-system.git
   cd employee-management-system
    ```

2. **Install Dependencies**

```bash
npm install
```

3. **Set up Environment Variables**

Create a `.env` file in the root of the project and add the following:

```bash
DB_NAME='employee_db'
DB_USER='YOUR_POSTGRES_USERNAME'
DB_PASSWORD='YOUR_POSTGRES_PASSWORD'
```

## Database Setup

1. **Log in to PostgreSQL**

```bash
psql -U postgres
```

2. **Create Database & Tables**

```bash
\i schema.sql
```
3. **Seed Data (Optional)**

```bash
\i seeds.sql
```
This will fill the tables in your database initially with placeholder information, making the application easier to use and navigate at the start. 

## Usage

To start the application, run the following command in your terminal:

```bash
node index.js
```

## Application Features

1. View All Departments: List all departments in the database.
2. View All Roles: List all roles, including job titles, departments, and salaries.
3. View All Employees: List all employees with their details.
4. Add Department: Add a new department to the database.
5. Add Role: Add a new role with a title, salary, and department.
6. Add Employee: Add a new employee with first name, last name, role, and manager.
7. Update Employee Role: Update an employee's role in the database.

## Technologies Used

- Node.js
- Inquirer
- PostgreSQL
- pg
- dotenv

## Video Walkthrough

For a walkthrough of the application, [click here](https://drive.google.com/file/d/17Soou9QTsqm2jPYeq855lpd1F9Al9mfy/view). 

## License

MIT License

**Danny Kramer | Northwestern University Coding Bootcamp | Module 12**