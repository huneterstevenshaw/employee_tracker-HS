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

            this.init();
        }

        init() {
            this.isInit = true;
            console.info('Main class initialized:', this.isInit);
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