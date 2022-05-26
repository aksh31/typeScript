var cl = console.log;
cl("Hello TS");
function add(n1, n2, showRes, phrase) {
    if (showRes === true) {
        var result = n1 + n2;
        cl("".concat(phrase, " ").concat(result));
    }
    else {
        return n1 + n2;
    }
}
var num1 = 20;
var num2 = 500;
var printResult = true;
var text = "The result is";
add(20, 500, true, "The result is");
add(num1, num2, printResult, text);
// let result = add(num1, num2, !printResult);
// cl(result);
// =======================================================
// =======================================================
// Type Inference => 
// If we declr a property and assign a value to it, 
// then TypeScript will assign datatype automatically to that property this process is called as "Type Inference".
var x = 20;
// let y; // type of y now is "any".
// y = 20;
// y = "TS";
// y = true;
var y;
y = 500;
// y = "string"; we cant reassign value apart from "number" type.
// y = true; we cant reassign value apart from "number" type.
