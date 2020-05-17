const mysql = require("mysql")
const { table } = require("table")
const inquirer = require("inquirer")
require('dotenv').config();

const dbpass = process.env.password
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: dbpass,
    database: "employees_DB"
})


module.exports = {
    connection,
    getAll: (search_param) => {
        connection.query(`SELECT * FROM ${search_param}`, (err, results, fields) => {
            if (err) { throw err; }

            console.log(results)
            console.log("\n \n \n Press any key to continue...")
            //console.log(table(results))
        })
    },
    editOne: () => {

        inquirer.prompt([
            {
                type: "input",
                name: "empid",
                message: "What is the ID of the employee?",

            },
            {
                type: "list",
                name: "newrole",
                message: "what is the employee's new role?",
                choices: ["Junior Developer I", 'Developer II', 'Developer III', 'Developer Manager', 'Help Desk Manager', 'Help Desk Technician', 'VP Marketing', 'Marketing Manager', 'Marketing Assistant', 'Marketing Director I', 'Account Manager', 'Account Director', 'Board Member', 'Account Exectutive', 'CEO', 'CFO']
            }
        ]).then(function (answer) {
            connection.query(
                "SELECT id FROM employee LEFT JOIN role ON employee.role_id = role.id UPDATE employee SET ? WHERE ?",
                [
                    {
                        title: answer.bid
                    },
                    {
                        id: answer.empid
                    }
                ],

            );
            console.log("\n \n \n Press any key to continue...")
            //     unused:[
            // //     connection.query(`SELECT * FROM role`), (err, results, fields) => {
            // //         if (err) { throw err; }
            // //         const options = { results }
            // //         inq.prompt(
            // //             {
            // //                 type: "input",
            // //                 name: "empid",
            // //                 message: "What is the employee ID?"
            // //             },

            // //             {
            // //                 type: "choice",
            // //                 name: "rolechoice",
            // //                 message: "what is the employee's new role?",
            // //                 choices: options
            // //             }
            // //         )
            // //     };
            // // }



            // connection.query(`UPDATE ${table} WHERE id=${id};`, (err, results, fields) => {
            //     if (err) { throw err; }
            //     console.log(results)
            // })
        })
    },

    showByParameter: async (left_join_table, sort_parameter, left_join_id) => {
        connection.query(`SELECT first_name, last_name, ${sort_parameter} FROM employee LEFT JOIN ${left_join_table} ON employee.${left_join_id} = ${left_join_table}.id ORDER BY ${sort_parameter};`, (err, results, fields) => {
            if (err) {
                throw err;
            }
            console.log(results)
            console.log("\n \n \n Press any key to continue...")
        })
    },
    showAllTables: async () => {
        let tables = [];
        connection.query(`SHOW TABLES IN employees_db;`, (err, results, fields) => {
            if (err) {
                throw err;
            }
            results.forEach(table => {
                console.log(table.Tables_in_employees_db)
                tables.push(table.Tables_in_employees_db)
            })
        });
        console.log("\n \n \n Press any key to continue...")

        return await tables;

    },
    insertRole: async () => {
        inquirer
            .prompt([
                {
                    name: "newtitle",
                    type: "input",
                    message: "What is name of the Role you would like to add?"
                }, {
                    name: "newid",
                    type: "number",
                    message: "What is the id of the Role you would like to add?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        if (value < 16) {
                            console.log("needs to be greater than 16!")
                        }
                        return false;
                    }
                },
                {
                    name: "newsalary",
                    type: "number",
                    message: "What salary of the Role you like to add?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                },
                {
                    name: "newdept_id",
                    type: "number",
                    message: "What is the department id of the Role you would like to add?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        if (value < 5) {
                            console.log("must be greater than 5!")
                        }
                        return false;
                    }
                },
            ])
            .then(function (answer) {
                // when finished prompting, insert a new item into the db with that info
                connection.query(
                    "INSERT INTO role (id, title, salary, dept_id) VALUES ?",
                    {
                        id: answer.newid || 0,
                        title: answer.newtitle,
                        salary: answer.newsalary || 0,
                        dept_id: answer.newdept_id || 0

                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your auction was created successfully!");



                    })
            })
    },

    insertDept: () => {
        inquirer
            .prompt([
                {
                    name: "newdept",
                    type: "input",
                    message: "What is name of the Department you would like to add?"
                }
            ])
            .then(function (answer) {
                // when finished prompting, insert a new item into the db with that info
                connection.query(
                    "INSERT INTO department (dept_name) VALUES ?",
                    {
                        dept_name: answer.newdept

                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your department was created successfully!");



                    })
            })
    }

}
