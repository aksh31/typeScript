let cl = console.log;

cl("Function Return Type and Void");

// Function Return Type and Void

// syntax => function fn_Name(n1:number, n2:number):number

// Function Return Type => it means it returns something which is already defined in function

function add(n1: number, n2: number): number {
    return n1 + n2;
}

cl(add(10, 20));

function combine(str1: string, str2: string): string {
    return (`${str1} ${str2}`);
}

cl(combine("Akshay", "Titarmare"));

// Function type Void

// function newAdd(n1:number, n2:number):undefined{ // when function return undefined.
//     cl(n1 + n2);
//     return;
// }

function newAdd(n1: number, n2: number): void {  // it returns nothing thats why use void type here
    cl(n1 + n2);
}
newAdd(25, 75);

// =============================== //
// =============================== //
// =============================== //


// Function as a type => (num1: number, num2: number) => number

type AddFunction = (num1: number, num2: number) => number;

function addition1(num1: number, num2: number): number {
    return num1 + num2;
}

function printValue(num: number) {
    console.log(`The Value is ${num}`)
}

let addition2: AddFunction = addition1; // here we have a function type..

let result = addition2(20, 30);
console.log(result);

// add2 = "New Data"; // throws error it can't accept string value bcuz function type return number..

function substraction(n1:number, n2:number):number{
    return n1 - n2;
}

function multiplication(n1:number, n2:number):number{
    return n1 + n2;
}


function calculate(n1: number, n2: number, fnName:AddFunction) { // here callback function has a defined a function type..
    return fnName(n1, n2);
}

cl( calculate(10, 20, addition1));
cl( calculate(20, 10, substraction));
cl( calculate(30, 10, multiplication));
