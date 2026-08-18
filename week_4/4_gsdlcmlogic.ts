import {Numbers} from "./4_gsdlcm";

export function gcd(a:number,b:number):number{

    while(b!=0){
        let temp=b;
        b=a%b;
        a=temp;
    }

    return a;
}


export function lcm(a:number,b:number):number{

    return (a*b)/gcd(a,b);

}


export function display(numbers:Numbers){

    console.log("Number 1:",numbers.num1);
    console.log("Number 2:",numbers.num2);

}