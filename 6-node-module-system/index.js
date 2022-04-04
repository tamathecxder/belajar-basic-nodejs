// const fullName = 'Agus Suga';
// const getSalam = (name) => `Hi, nama saya ${name}`;
// console.log(getSalam(fullName));

// const fs = require('fs'); // core module
// const printName = require('./coba') // local module
// const moment = require('moment'); // thirdparty module / npm module / exists in node_modules folder

const coba = require('./coba')

// console.log(printName('Agus'), PI);

console.log(coba.printName('Agus') + ' | ' + coba.PI);

console.log(coba.employee.greetings());

console.log(new coba.Jobdesc());







