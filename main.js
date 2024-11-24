'use strict';
console.info('JS connected'); // see if connected

/* Dev References >>>
    1) Console API / Instance methods
        a) https://developer.mozilla.org/en-US/docs/Web/API/console
        b) https://developer.mozilla.org/en-US/docs/Web/API/console#outputting_text_to_the_console

*/
(() => {
    class Main { // Main class
        constructor() {
            this.isInit = false; // state management 
            this.employees = []; // make an empty array for the employees
            const test = new PartTime(1, 2, 3, 4, 12, 40, 7);

            const testFullTime = new Manager(1, 2, 3, 4, 12, 40, 7);

            console.log(test.calculatePay(), "PartTime");
            console.log(testFullTime.calculatePay(), "Manager");
            this.init();
        }

        init() {
            this.isInit = true;
            console.info('Main class initialized:', this.isInit); // 1 a-b

            // id, name, age, salary, hrs, payRate, Type, 40, 10, "Manager"
            this.employees.push(new Manager(1, 'Hunter', 28, `$${500000}`, 40, 10, "Manager"));
            this.employees.push(new PartTime(2, 'Dave', 44, `$${40000}`, 12, 10, "Manager"));
            this.employees.push(new Manager(3, 'Karol', 27, `$${500000}`, 40, 10, "Manager"));
            
            console.table(this.employees);

            this.showAllEmployees();
        }

        addEmployee() {

        }

        deleteEmployee() {
            
        }

        modifyEmployee() {

        }

        getEmployeeInfo() {
             
        }

        showAllEmployees() {
            console.info('All employees:'); // all employees headers
            this.employees.forEach((employee) => {
                console.table(this.getEmployeeDetails(employee));
            });
        }

        getEmployeeDetails(employee) {
            const details = {
                ID: employee.id,
                Name: employee.name,
                Age: employee.age,
                Salary: `$${employee.salary}`,
                Hours: `${employee.payRate}`,
                Pay: `${employee.payRate}`,
                Hours: `${employee.payRate}`,

            };

            return details;
        }
    }  

    class Employee { // Employee class
        constructor(id, name, age, salary) {
            this.id = id;
            this.employeeName = name; 
            this.employeeAge = age;
            this.annualSalary = salary;
        }
    }

    class PartTime extends Employee { // PartTime class with properties of Employee class
        constructor(id, name, age, salary, hrs, payRate, Type) {
            super(id, name, age, salary); // call all instance variables within the Employee class
            this.hrs = hrs;
            this.payRate = payRate;
            this.position = Type;
        }

        calculatePay() { // calcuate payRate method for PartTime
            const weeksInYear = 52;
            return(this.payRate * this.hrs * weeksInYear);
        }
    }

    class Manager extends Employee { // Manager class with properties of Employee class
        constructor(id, name, age, salary, payRate, Type) {
            super(id, name, age, salary); // call all instance variables within the Employee class
            this.payRate = payRate;
            this.position = Type;
        }

        calculatePay() { // calcuate pay method for Manager
            const weeksInYear = 52;
            const hoursPerWeek = 40;

            return((this.payRate * hoursPerWeek * weeksInYear) - 1000);
        }
    }

    const main = new Main(); // call Main class
})();