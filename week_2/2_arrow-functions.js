"use strict";
const getStudent = (name) => {
    return `Student: ${name}`;
};
const findGCD = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};
const findLCM = (a, b) => {
    return (a * b) / findGCD(a, b);
};
let num1 = 24;
let num2 = 36;
console.log(getStudent("Vineetha"));
console.log(`Numbers: ${num1}, ${num2}`);
let gcd = findGCD(num1, num2);
let lcm = findLCM(num1, num2);
console.log(`GCD = ${gcd}`);
console.log(`LCM = ${lcm}`);
