let cl = console.log;

cl("Hello TS");

function add(n1: number, n2: number, showRes:boolean, phrase: string) {
    if(showRes === true){
        let result = n1 + n2;
        cl(`${phrase} ${result}`);
    }else{
        return n1 + n2;
    }
}

let num1: number = 20;
let num2 = 500;
let printResult = true;
let text = "The result is";

add(20, 500, true, "The result is");
add(num1, num2, printResult, text);

// let result = add(num1, num2, !printResult);
// cl(result);


// =======================================================
// =======================================================


// Type Inference => 
// If we declr a property and assign a value to it, 
// then TypeScript will assign datatype automatically to that property this process is called as "Type Inference".

let x:number = 20;

// let y; // type of y now is "any".

// y = 20;
// y = "TS";
// y = true;

let y:number;

y = 500;
// y = "string"; we cant reassign value apart from "number" type.
// y = true; we cant reassign value apart from "number" type.