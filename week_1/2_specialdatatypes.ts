let value: any = "Hello";
console.log(value);

value = 100;
console.log(value);

let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}