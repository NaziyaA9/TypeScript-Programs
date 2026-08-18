"use strict";
class NumberOperations {
    num1;
    num2;
    constructor(a, b) {
        this.num1 = a;
        this.num2 = b;
    }
    findGCD() {
        let a = this.num1;
        let b = this.num2;
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    findLCM() {
        return (this.num1 * this.num2) / this.findGCD();
    }
}
const obj = new NumberOperations(12, 18);
console.log(`Numbers: ${obj.num1}, ${obj.num2}`);
console.log(`GCD = ${obj.findGCD()}`);
console.log(`LCM = ${obj.findLCM()}`);
