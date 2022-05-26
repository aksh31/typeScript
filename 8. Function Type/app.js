var cl = console.log;
cl("Function Return Type and Void");
// Function Return Type and Void
// syntax => function fn_Name(n1:number, n2:number):number
// Function Return Type => it means it returns something which is already defined in function
function add(n1, n2) {
    return n1 + n2;
}
cl(add(10, 20));
function combine(str1, str2) {
    return ("".concat(str1, " ").concat(str2));
}
cl(combine("Akshay", "Titarmare"));
// Function type Void
// function newAdd(n1:number, n2:number):undefined{ // when function return undefined.
//     cl(n1 + n2);
//     return;
// }
function newAdd(n1, n2) {
    cl(n1 + n2);
}
newAdd(25, 75);
function addition1(num1, num2) {
    return num1 + num2;
}
function printValue(num) {
    console.log("The Value is ".concat(num));
}
var addition2 = addition1; // here we have a function type..
var result = addition2(20, 30);
console.log(result);
// add2 = "New Data"; // throws error it can't accept string value bcuz function type return number..
function substraction(n1, n2) {
    return n1 - n2;
}
function multiplication(n1, n2) {
    return n1 + n2;
}
function calculate(n1, n2, fnName) {
    return fnName(n1, n2);
}
cl(calculate(10, 20, addition1));
cl(calculate(20, 10, substraction));
cl(calculate(30, 10, multiplication));
