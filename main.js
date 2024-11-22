'use strict';
console.log('JS connected'); // see if connected
(() => {
    class Main { // Main class
        constructor() {
            this.message = 'The Main class has been initialized!';

            this.init();
        }

        init() {
            console.log(this.message);
        }
    }  

    class Employee { // Employee class
        constructor() {

        }

        calculatePay() {

        }
        
    }

    class PartTime extends Employee { // PartTime class with properties of Employee class
        constructor() {
            
        }

    }

    class Manager extends Employee { // Manager class with properties of Employee class
        constructor() {
            
        }

    }

    const main = new Main(); // call main class
})();