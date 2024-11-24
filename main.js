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
            console.log(new PartTime(1,1,1,1,1,1,1));
            this.init();
        }

        init() {
            this.isInit = true;
            console.info('Main class initialized:', this.isInit); // 1 a-b

            this.employees.push(new Employee(1, 'Hunter', 28, ));
            this.employees.push(new Employee(2, 'Dave', 44, ));
            this.employees.push(new Employee(3, 'Karol', 27, ));

            console.table(this.employees);
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
                Hours: `${employee.hrs}`,
                Pay: `${employee.hrs}`,
                Hours: `${employee.hrs}`,

            };

            return details;
        }
    }  

    class Employee { // Employee class
        constructor(id, name, age, salary, hrs, hourlyPay, partOrFull) {
            this.id = id;
            this.employeeName = name; 
            this.employeeAge = age;
            this.annualSalary = salary;
            this.hoursInWeek = hrs;
            this.payPerHour = hourlyPay
            this.positionType = partOrFull;
        }
    }

    class PartTime extends Employee { // PartTime class with properties of Employee class
        constructor(id, name, age, salary, hrs, hourlyPay, partOrFull) {
            super(id, name, age, salary, hrs, hourlyPay, partOrFull);
        }

        calculatePay() { // calcuate pay method for PartTime
            const weeksInYear = 52;
            
            // super.salary = 52 * 
        }
    }

    class Manager extends Employee { // Manager class with properties of Employee class
        constructor() {
            
        }

        calculatePay() { // calcuate pay method for Manager
            
        }
    }

    const main = new Main(); // call Main class
})();