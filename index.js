"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = __importStar(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
//calculator Operators
var Operator;
(function (Operator) {
    Operator["ADD"] = "ADDITION";
    Operator["SUBTRACT"] = "SUBTRACTION";
    Operator["MULTIPLY"] = "MULTIPLICATION";
    Operator["DIVIDE"] = "DIVISION";
})(Operator || (Operator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a valid number";
    }
    return true;
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const input = yield prompt([
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
        ]);
        const num1 = parseFloat(input.num1);
        const num2 = parseFloat(input.num2);
        const selectedOperator = input.operator;
        let result;
        if (selectedOperator === Operator.ADD) {
            result = num1 + num2;
            console.log(chalk_1.default.green.bgRedBright(`Result is : ${result}`));
        }
        else if (selectedOperator === Operator.DIVIDE) {
            result = num1 / num2;
            console.log(chalk_1.default.yellow.bgBlack(`Result is : ${result}`));
        }
        else if (selectedOperator === Operator.MULTIPLY) {
            result = num1 * num2;
            console.log(chalk_1.default.blue.bgYellowBright(`Result is : ${result}`));
        }
        else if (selectedOperator === Operator.SUBTRACT) {
            result = num1 - num2;
            console.log(chalk_1.default.blue.bgYellowBright(`Result is : ${result}`));
        }
    });
}
main();
