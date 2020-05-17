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
                "SELECT first_name, last_name, title FROM employee LEFT JOIN role ON employee.role_id = role.id UPDATE employee SET ? WHERE ?",
                [
                    {
                        title: answer.bid
                    },
                    {
                        id: answer.empid
                    }
                ],

            );


            //     connection.query(`SELECT * FROM role`), (err, results, fields) => {
            //         if (err) { throw err; }
            //         const options = { results }
            //         inq.prompt(
            //             {
            //                 type: "input",
            //                 name: "empid",
            //                 message: "What is the employee ID?"
            //             },

            //             {
            //                 type: "choice",
            //                 name: "rolechoice",
            //                 message: "what is the employee's new role?",
            //                 choices: options
            //             }
            //         )
            //     };
            // }


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

        return await tables;
    }
}

