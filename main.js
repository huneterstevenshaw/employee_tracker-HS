'use strict';
console.log('JS connected'); // see if connected
(() => {
    class Main {
        constructor() {
            this.message = 'The Main class has been called!';

            this.consoleLogMes();
        }

        consoleLogMes() {
            console.log(this.message);
        }
    }  

    const main = new Main();
})();