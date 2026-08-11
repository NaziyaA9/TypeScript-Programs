
function getStudent(name: string): string {
    return `Student: ${name}`;
}

function findGCD(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM(a: number, b: number): number {
    return (a * b) / findGCD(a, b);
}


let num1: number = 12;
let num2: number = 18;

console.log(getStudent("Nandini"));
console.log(`Numbers: ${num1}, ${num2}`);

let gcd = findGCD(num1, num2);
let lcm = findLCM(num1, num2);

console.log(`GCD = ${gcd}`);
console.log(`LCM = ${lcm}`);