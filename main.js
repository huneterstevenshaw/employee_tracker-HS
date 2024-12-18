'use strict';
console.info('JS connected'); // see if connected

/* Dev References >>>
    1) Console API / Instance methods
        a) https://developer.mozilla.org/en-US/docs/Web/API/console
        b) https://developer.mozilla.org/en-US/docs/Web/API/console#outputting_text_to_the_console
    2) String.split() AND toSpiced method // NOT the same thing, split is from start to finish, toSpiced is INDEX value
        a) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split}
        b) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
        c) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced // .... this took hours
    3) NaN and Error Handling
        a) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
        b) https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
    4) Switch Expressions/Statements
        a) https://www.w3schools.com/js/js_switch.asp
    5) Filter user 
        a) https://stackoverflow.com/questions/44628965/filtering-numbers-out-from-an-array
    6) Arrays 
        a) https://stackoverflow.com/questions/64800465/how-to-change-indexes-keys-an-array-of-object-in-javascript
        b) https://www.shecodes.io/athena/53681-how-to-replace-an-item-in-an-array-in-javascript
        c) https://stackoverflow.com/questions/44435141/remove-object-in-array-using-filter-and-splice-which-one-is-best-approach-in-jav
        d) https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript


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
                ADD >>> New user in the following format:

                "name,age,hrsWorkedPerWeek,payPerHour"
            `); // add prompt

            if (isNaN(addNew)) {
                const addNewSplit = addNew.split(',');
                // console.log("Added New User!:", addNewSplit);
                
                let name = addNewSplit[0];
                let age = parseInt(addNewSplit[1]);
                let weeklyHrs =  parseInt(addNewSplit[2]);
                let payRate = parseInt(addNewSplit[3]);
                let isFullTime = 'Part Time';
    
                let salary = weeklyHrs * payRate * 52
    
                // const name = addNewSplit[0]
                // const age = addNewSplit[1]
                // const weeklyHrs = addNewSplit[2]
                // const payRate = addNewSplit[3]
                // const salary = 52 * weeklyHrs * payRate
                // John,23,40,32 test info
                if ( !isNaN(age) && weeklyHrs < 40) { // >>> 3 b
                    this.setId += 1;
                    console.log(this.setId, "Here is the ID");

                    this.employees.push(new PartTime(this.setId, name, age, salary, weeklyHrs, payRate, isFullTime));
                    console.clear();
                    // console.log("State Management >>>", this.whereAmI);
                    // console.table(this.employees);
                    // check to see if part time or manager
                   
                } else {
                    this.isFullTime = 1; 
                    this.setId += 1;
                        isFullTime = "Full Time"
                        salary = (weeklyHrs * payRate * 52) - 1000;
                        
                    // this.employees.push(new Manager(1, 'Hunter', 28, 19800, 40, 10, "Full Time"));
                    // this.employees.push(new PartTime(2, 'Dave', 40, 19344, 31, 12, "Part Time"));
        
                        // this.employees.push(new Manager(this.setId, name, age, addNewSplit[2], addNewSplit[3]))
                        this.employees.push(new Manager(this.setId, name, age, salary, weeklyHrs, payRate, isFullTime));
                        console.clear();
                        // console.log("State Management >>>", this.whereAmI);
                        // console.table(this.employees);
                }

                this.selectionStateMana = 0;
                return this.stateMana();
                // logic for part time
                // this.employees.push(new PartTime(addNewSplit[0], addNewSplit[1], addNewSplit[2], addNewSplit[3]))
            }
        }

        deleteEmployee() {
            console.log("State Management >>>", this.whereAmI);
            // fliter()

            const deleteUser = prompt(`
                DELETE >>> Enter user EmployeeID to delete:

                "ex: 4:"
            `); // delete prompt
            
            let getDeleteNum = parseInt(deleteUser);

            // console.log(getDeleteNum);
            // const deleteEmployee = this.employees.filter(user => {
            //     return parseInt(user.EmployeeID) == getDeleteNum;
            // });
            // console.log(deleteEmployee);

            if (!isNaN(getDeleteNum)) { // >>> 5 a
                let userToDelete = this.employees.filter((user) => (user.EmployeeID == getDeleteNum));
                let i = 0; // needed this to find exact, because for each is looping thru
                this.employees.forEach(user => { // new array
                    if (user.EmployeeID == userToDelete[0].EmployeeID) {
                        this.employees = this.employees.toSpliced(i,1); // >>> 2 c - turns into NEW array, so array = the same array
                    }
                    i+=1;
                });
                // reset
                console.clear();
                this.selectionStateMana = 0;
                return this.stateMana();
            }
                // const deleteEmployee = this.employees.filter((user) => (user.EmployeeID == getDeleteNum));
                // console.log(deleteEmployee);

                // let getId = deleteEmployee[0].EmployeeID;

                // for (let x in getId) {
                //     if (x[0] === getId){
                //         console.log(x[0], "x")
                //     }
                // };

                // this.employees.forEach(emp => {
                //     console.log(emp);
                // })


                // console.log(getId);

            // console.clear();
            // this.selectionStateMana = 0;
            // return this.stateMana();
        }

        modifyEmployee() {
            console.log("State Management >>>", this.whereAmI);

            const editUser = prompt(`
                EDIT >>> Enter user EmployeeID to edit:

                "ex: 4:"
            `); // edit prompt

            let getEditId = parseInt(editUser);

            // let findId;
            if (!isNaN(getEditId)) { // >>> 5 a
                let userToEdit = this.employees.filter((user) => (user.EmployeeID == getEditId));
                let i = 0; // needed this to find exact, because for each is looping thru
                this.employees.map(user => { // new array
                    if (user.Name == userToEdit[0].Name) {
                        let index = this.employees.indexOf(i);

                        this.employees[index] = 'changed'
                    }
                    i+=1;
                });

                console.log(this.employees);
                // reset
                // console.clear();
                // this.selectionStateMana = 0;
                // return this.stateMana();
            };


            if (isNaN(editUser)) {
                const editNewSplit = editUser.split(',');
                // console.log("Added New User!:", addNewSplit);
                
                let name = addNewSplit[0];
                let age = parseInt(addNewSplit[1]);
                let weeklyHrs =  parseInt(addNewSplit[2]);
                let payRate = parseInt(addNewSplit[3]);
                let isFullTime = 'Part Time';
    
                let salary = weeklyHrs * payRate * 52

                // reset
                console.clear();
                this.selectionStateMana = 0;
                return this.stateMana();
            }
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