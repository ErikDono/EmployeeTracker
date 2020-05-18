var mysql = require("mysql")
var mainQuestion = require("./questions/main_set").main_questions;
const connection = require("./controller/index").connection;
const controller = require("./controller/index");

connection.connect(err => {
    if (err) {
        throw err;
    }
    console.log("Connected...")
    start()
})

const start = async () => {
    // const tables = await controller.showAllTables();
    // console.log(`These are the tabels: ${tables}`)

    var isRunning = true

    while (isRunning) {
        const command = await mainQuestion()
        switch (command.choice) {
            case "Get All Employees":
                await controller.getAll("employee")
                break;
            case "Get All Roles":
                await controller.getAll("role")
                break;
            case "Get All Departments":
                await controller.getAll("department")
                break;
            case "View Employees by Role":
                await controller.showByParameter("role", "title", "role_id")
                break;
            case "View Employees by Department":
                await controller.showByParameter("department", "dept_name", "dept_id")
                break;
            case "View Items":
                await controller.showAllTables("employee")
                break;
            case "Update Items":
                await controller.editOne()
                break
            case "Add Employee":
                await controller.insertEmp()
                break;
            case "Add Role":
                await controller.insertRole()
                break;
            case "Add Department":
                await controller.insertDept()
                break;
            case "Exit":
                connection.end
                console.log("\n \n \n \n Goodbye!")
                isRunning = false;
                break;
            default:
                console.log("Nope");
                break;

        }
    }
}

module.exports = { start }