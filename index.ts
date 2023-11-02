import * as inquirer from "inquirer";
import chalk from "chalk";
//calculator Operators
enum Operator
{
    ADD = "ADDITION",
    SUBTRACT = "SUBTRACTION",
    MULTIPLY = "MULTIPLICATION",
    DIVIDE = "DIVISION",
}
const prompt = inquirer.createPromptModule();
function validateNumber(input: string): boolean | string
{ if (isNaN(parseFloat(input)))
{
     return "Please enter a valid number"

}
return true;
}
async function main()
{
    const input = await prompt([
        {
        type: "input",
        name: "num1",
        message: "Please enter your first desired number:",
        validate: validateNumber,
    },
    {
        type: "rawlist",
        name: "operator",
        message: "Select an operation:",
        choices: Object.values(Operator)
    },
    {
        type: "input",
        name: "num2",
        message: "Please enter your desired second number:",
        validate: validateNumber,
    }
    ])
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator as Operator;
    let result: number;

    if(selectedOperator === Operator.ADD)
        {
         result = num1 + num2;
         console.log(chalk(`Result is : ${result}`));
        }
        else if(selectedOperator === Operator.DIVIDE)
        {
         result = num1 / num2;
         console.log(chalk(`Result is : ${result}`));
        
        }else if(selectedOperator === Operator.MULTIPLY)
        {
         result = num1 * num2;
         console.log(chalk(`Result is : ${result}`));
        }else if(selectedOperator === Operator.SUBTRACT)
        {
         result = num1 - num2;
         console.log(chalk(`Result is : ${result}`));
        }
    }
    main()