let cl = console.log;


// Union Type (|) => when we declare multiple type then use "|"(Union type)..

function combine(num1: number | string, num2: number | string){
    let result;
    if(typeof num1 === "number" && typeof num2 === "number"){
        result = num1 + num2;
    }else{
        result = num1.toString() + num2.toString();
        // result =` ${num1.toString()} ${num2.toString()}`;
    }
    return result;
}

let add1 = combine(25, 35);
cl(add1);

let concate1 = combine("Hello", "TypeScript");
cl(concate1);