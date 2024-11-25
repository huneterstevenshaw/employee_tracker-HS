'use strict';
console.info('JS connected'); // see if connected

/* Dev References >>>
    1) Console API / Instance methods
        a) https://developer.mozilla.org/en-US/docs/Web/API/console
        b) https://developer.mozilla.org/en-US/docs/Web/API/console#outputting_text_to_the_console
    2) String.split() method
        a) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    3) NaN and Error Handling
        a) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
        b) https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
    4) Switch Expressions/Statements
        a) https://www.w3schools.com/js/js_switch.asp

*/
(() => {
    class Main { // Main class
        constructor() {
            this.isInit = false; // state management 
            this.employees = []; // make an empty array for the employees
            this.selectionStateMana = 0; // state management for selections/app
            this.whereAmI = null; 
            this.setId = 3;
            this.isFullTime = 0;

            // const test = new PartTime(1, 2, 3, 4, 12, 40, 7);
            // const testFullTime = new Manager(1, 2, 3, 4, 12, 40, 7);

            // test
            // console.log(test.calculatePay(), "PartTime");
            // console.log(testFullTime.calculatePay(), "Manager"); 
            this.init();
        }

        init() {
            this.isInit = true;
            console.info('Main class initialized:', this.isInit); // >>> 1 a-b

            // id, name, age, salary, hrs, payRate, Type, 40, 10, "Manager"
            this.employees.push(new Manager(1, 'Hunter', 28, 19800, 40, 10, "Full Time"));
            this.employees.push(new PartTime(2, 'Dave', 40, 19344, 31, 12, "Part Time"));
            this.employees.push(new Manager(3, 'Karol', 27, 19800, 40, 10, "Full Time"));
            
            this.stateMana(); // call main menu on init
        }

        // this.employees.push(new Manager(1, 'Hunter', 28, 19800, 40, 10, "Full Time"));
        // this.employees.push(new PartTime(2, 'Dave', 40, 19344, 31, 12, "Part Time"));

        addEmployee() {
            console.log("State Management >>>", this.whereAmI);

            const addNew = prompt(`
                ATTENTION: Please enter the new user in the following format:

                "name,age,hrsWorkedPerWeek,payPerHour
            `); // main menu for all the methods

            if (isNaN(addNew)) {
                const addNewSplit = addNew.split(',');
                console.log("Added New User!:", addNewSplit);
                
                let name = addNewSplit[0];
                let age = parseInt(addNewSplit[1]);
                let weeklyHrs =  parseInt(addNewSplit[2]);
                let payRate = parseInt(addNewSplit[3]);
    
    
    
    
                // const name = addNewSplit[0]
                // const age = addNewSplit[1]
                // const weeklyHrs = addNewSplit[2]
                // const payRate = addNewSplit[3]
                // const salary = 52 * weeklyHrs * payRate
                // John,23,40,32
                if ( !isNaN(age) ) { // >>> 3 b
                    this.setId += 1;
                    console.log(this.setId, "Here is the ID");
                }
                let isFullTime = 'Part Time';
                // check to see if part time or manager
                if (weeklyHrs >= 40) {
                    this.isFullTime = 1; 
                    // const name = addNewSplit[0]
                    // const age = addNewSplit[1]
                    // const weeklyHrs = addNewSplit[2]
                    // const payRate = addNewSplit[3]
                    // const salary = 52 * weeklyHrs * payRate
                    
                // this.employees.push(new Manager(1, 'Hunter', 28, 19800, 40, 10, "Full Time"));
                // this.employees.push(new PartTime(2, 'Dave', 40, 19344, 31, 12, "Part Time"));
    
                    // this.employees.push(new Manager(this.setId, name, age, addNewSplit[2], addNewSplit[3]))
    
                    return;
                } 
    
                // logic for part time
                // this.employees.push(new PartTime(addNewSplit[0], addNewSplit[1], addNewSplit[2], addNewSplit[3]))
            }
        }

        deleteEmployee() {
            console.log("State Management >>>", this.whereAmI);
            // fliter()
        }

        modifyEmployee() {
            console.log("State Management >>>", this.whereAmI);
        }

        getEmployeeInfo() {
            console.clear(); // clear before running again
            this.stateMana();
        }

        showMainMenu() {
            // this.getEmployeeInfo();
            console.log("State Management >>>", this.whereAmI);

            const getSelection = prompt(
                `
                1. Add Employee
                2. Remove Employee
                3. Edit Employee
                4. Display All Employees
                `
            ); // main menu for all the methods

            const filterInput = parseInt(getSelection);
            console.log(filterInput);

            if ( filterInput > 4 || isNaN(filterInput) ||  filterInput < 1) { // 3 a
                console.error("That's not a valid selection, try again.", filterInput);
            } else {
                this.selectionStateMana = filterInput;
                this.getEmployeeInfo();
            }
        }

        stateMana() { // state management for selections/app
            // Switch Case Statement for state mana >>> 4 a
            switch (this.selectionStateMana) {
                case 0:
                    this.whereAmI = "Main Menu";
                    console.table(this.employees);
                    this.showMainMenu();
                    break; // needed or you will get a stack over flow, infinite loop (sad face)
                case 1:
                    this.whereAmI = "Add Employee";
                    console.table(this.employees);
                    this.addEmployee(); // open menus >>> call methods based on the state mana
                    break;
                case 2:
                    this.whereAmI = "Remove Employee";
                    console.table(this.employees);
                    this.deleteEmployee();
                    break;
                case 3:
                    this.whereAmI = "Edit Employee";
                    console.table(this.employees);
                    this.modifyEmployee();
                    break;
                case 4:
                    this.whereAmI = "Display All Employees";
                    console.table(this.employees);
                    console.log("State Management >>>", this.whereAmI);
                    break;
            }
        }
    }  

    class Employee { // Employee class
        constructor(id, name, age, salary) {
            this.EmployeeID = id;
            this.Name = name; 
            this.Age = age;
            this.Salary = salary;
        }
    }

    class PartTime extends Employee { // PartTime class with properties of Employee class
        constructor(id, name, age, salary, hrs, payRate, type) {
            super(id, name, age, salary); // call all instance variables within the Employee class
            this.HrsWorked = hrs;
            this.PayPerHour = payRate;
            this.PositonType = type;

            // this.employees.push(new Manager(1, 'Hunter', 28, 19800, 40, 10, "Full Time"));
            // this.employees.push(new PartTime(2, 'Dave', 40, 19344, 31, 12, "Part Time"));
        }

        calculatePay() { // calcuate payRate method for PartTime
            const weeksInYear = 52;
            return(this.HrsWorked * this.hrs * weeksInYear);
        }
    }

    class Manager extends Employee { // Manager class with properties of Employee class
        constructor(id, name, age, salary, hoursWorked, pay, type) {
            super(id, name, age, salary); // call all instance variables within the Employee class
            this.HrsWorked = hoursWorked;
            this.PayPerHour = pay;
            this.PositonType = type;
        }

        calculatePay() { // calcuate pay method for Manager
            const weeksInYear = 52;
            const hoursPerWeek =  40;

            return((this.payRate * hoursPerWeek * weeksInYear) - 1000); // -$1000 for benefits
        }
    }

    const main = new Main(); // call Main class
})();