let cl = console.log; //=> first class function


const num1 = document.getElementById("num1") ! as HTMLInputElement;
const num2 = document.getElementById("num2") ! as HTMLInputElement;
const btn = document.getElementById("btn");

function add(n1:number, n2:number){
    return n1 + n2;
}



btn.addEventListener("click", () => {
    cl(add(Number(num1.value), parseInt(num2.value)));
});


let x:number = 10;

cl(typeof x); // number

// x = "Hello TS"; can't reassign another value apart from 'number'.

let canDrive:boolean = false;

// canDrive = 25; can't reassign another value apart from 'Boolean'.


let anyValue:any = 500;  // "any" Type in Typescript but not used generally.. 
cl(anyValue, typeof anyValue);

anyValue = "TypeScript"
cl(anyValue, typeof anyValue);

anyValue = {
    fname : "John",
    lname : "Doe",
}
cl(anyValue, typeof anyValue);