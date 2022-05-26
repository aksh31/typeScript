var cl = console.log; //=> first class function
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btn = document.getElementById("btn");
function add(n1, n2) {
    return n1 + n2;
}
btn.addEventListener("click", function () {
    cl(add(Number(num1.value), parseInt(num2.value)));
});
var x = 10;
cl(typeof x); // number
// x = "Hello TS"; can't reassign another value apart from 'number'.
var canDrive = false;
// canDrive = 25; can't reassign another value apart from 'Boolean'.
var anyValue = 500; // "any" Type in Typescript but not used generally.. 
cl(anyValue, typeof anyValue);
anyValue = "TypeScript";
cl(anyValue, typeof anyValue);
anyValue = {
    fname: "John",
    lname: "Doe"
};
cl(anyValue, typeof anyValue);
