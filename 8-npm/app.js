// Validator

const validator = require('validator');
const chalk = require('chalk');

const validateEmail = validator.isEmail('agus@gmail.com');
const validateMP = validator.isMobilePhone('08219899999', 'id-ID');
const validateNumeric = validator.isNumeric('08219899999');
// console.log(validateEmail);
// console.log(validateMP);
// console.log(validateNumeric);

// Chalk
// console.log(chalk.bold.bgRed('Hello Chalk'));
const myName = 'Asep Michael';
const message = chalk`{bold.red Jancuk} ipsum dolor sit amet, {bgBlue.gray consectetur adipiscing elit}. {blue.bold Hello, i am ${myName}}`;

console.log(message);



















