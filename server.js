var mysql = require("mysql")
var mainQuestion = require("./questions/main_set").main_questions;
const connection = require("./controller/index").connection;
const controller = require("./controller/index");

connection.connect(err => {
    if (err) {
        throw err;
    }
    console.log("Connected...")
})

const start = async () => {
    // const tables = await controller.showAllTables();
    // console.log(`These are the tabels: ${tables}`)
    const command = await mainQuestion()
    switch (command.choice) {
        case "Get All Employees":
            controller.getAll("employee")
            start()
            break;
        case "Get All Roles":
            controller.getAll("role")
            start()
            break;
        case "Get All Departments":
            controller.getAll("department")
            start()
            break;
        case "View Employees by Role":
            controller.showByParameter("role", "title", "role_id")
            start()
            break;
        case "View Employees by Department":
            controller.showByParameter("department", "dept_name", "dept_id")
            start()
            break;
        case "View Items":
            controller.showAllTables("employee")
            start()
            break;
        case "Update Items":
            controller.editOne()
            break
        default:
            console.log("Nope");
            start()

            break;
    }
}
start()
