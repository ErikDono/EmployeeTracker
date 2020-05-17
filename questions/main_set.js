const inq = require("inquirer");

const main_questions = async () => {
    const options = [
        "Get All Employees",
        "Get All Roles",
        "Get All Departments",
        "View Items",
        "View Employees by Role",
        "View Employees by Department",
        "Update Items",
        "Add Role",
        "Add Department",
        "Exit"
    ];
    return inq.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do ?",
        choices: options
    })
}


module.exports = { main_questions }