const inq = require("inquirer");

const emp_quest = async () => {
    return inq.prompt({
        type: "input",
        name: "empid",
        message: "What is the employee's id?"
    },
        {
            type: "choice",
            name: "newrole",
            message: "what is the emmployee's new role",
            choices: ["A", "B", "C"]

        })
}


module.exports = { emp_quest }