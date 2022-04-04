const printName = (name) => {
    return `Hi, my name is ${name}`;
}

const PI = 3.14;

const employee = {
    fullName: "Agnes Amanda",
    degree: "Computer Science",
    greetings() {
        return `Hello there, my name is ${this.fullName} and i am majoring in ${this.degree}`;
    }
};

class Jobdesc {
    constructor() {
        console.log("Jobdesc class created");
    }
}

// module.exports.printName = printName;
// module.exports.PI = PI;
// module.exports.employee = employee;
// module.exports.Jobdesc = Jobdesc;

/* Export dengan object literal */
module.exports = {
    printName,
    PI,
    employee,
    Jobdesc
}

