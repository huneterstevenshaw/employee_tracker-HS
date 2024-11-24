'use strict';
console.info('JS connected'); // see if connected

/* Dev References >>>
    1) Console API / Instance methods
        a) https://developer.mozilla.org/en-US/docs/Web/API/console
        b) https://developer.mozilla.org/en-US/docs/Web/API/console#outputting_text_to_the_console
    2) String.split() method
        a) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

*/
(() => {
    class Main { // Main class
        constructor() {
            this.isInit = false; // state management 
            this.employees = []; // make an empty array for the employees
            const test = new PartTime(1, 2, 3, 4, 12, 40, 7);

            const testFullTime = new Manager(1, 2, 3, 4, 12, 40, 7);

            console.log(test.calculatePay(), "PartTime");
            console.log(testFullTime.calculatePay(), "Manager"); // test
            this.init();
        }

        init() {
            this.isInit = true;
            console.info('Main class initialized:', this.isInit); // 1 a-b

            // id, name, age, salary, hrs, payRate, Type, 40, 10, "Manager"
            this.employees.push(new Manager(1, 'Hunter', 19800, 40, 10, "Full Time"));
            this.employees.push(new PartTime(2, 'Dave', 19344, 31, 12, "Part Time"));
            this.employees.push(new Manager(3, 'Karol', 19800, 40, 10, "Full Time"));
            
            console.table(this.employees);
            // this.showAllEmployees();
        }

        addEmployee() {

        }

        deleteEmployee() {
            
        }

        modifyEmployee() {

        }

        getEmployeeInfo() {
             
        }

        // showAllEmployees() {
        //     console.info('All employees:'); // all employees headers
        //     this.employees.forEach((employee) => {
        //         push(this.getEmployeeDetails(employee));
        //     });
        // }

        // getEmployeeDetails(employee) {
        //     const details = {
        //         ID: employee.id,
        //         Name: employee.name,
        //         Age: employee.age,
        //         Salary: `$${employee.salary}`,
        //         Hours: `${employee.payRate}`,
        //         Pay: `${employee.payRate}`,
        //         Hours: `${employee.payRate}`,

        //     };

        //     return details;
        // }
    }  

    class Employee { // Employee class
        constructor(id, name, salary) {
            this.ID = id;
            this.Name = name; 
            this.Salary = salary;
        }
    }

    class PartTime extends Employee { // PartTime class with properties of Employee class
        constructor(id, name, salary, hrs, payRate, Type) {
            super(id, name, salary); // call all instance variables within the Employee class
            this.HrsWorked = hrs;
            this.Pay = payRate;
            this.PositonType = Type;
        }

        calculatePay() { // calcuate payRate method for PartTime
            const weeksInYear = 52;
            return(this.HrsWorked * this.hrs * weeksInYear);
        }
    }

    class Manager extends Employee { // Manager class with properties of Employee class
        constructor(id, name, salary, hoursWorked, pay, Type) {
            super(id, name, salary); // call all instance variables within the Employee class
            this.HrsWorked = hoursWorked;
            this.Pay = pay;
            this.PositonType = Type;
        }

        calculatePay() { // calcuate pay method for Manager
            const weeksInYear = 52;
            const hoursPerWeek =  40;

            return((this.payRate * hoursPerWeek * weeksInYear) - 1000);
        }
    }

    const main = new Main(); // call Main class
})();