var cl = console.log;
// Union Type (|) => when we declare multiple type then use "|"(Union type)..
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
        // result =` ${num1.toString()} ${num2.toString()}`;
    }
    return result;
}
var add1 = combine(25, 35);
cl(add1);
var concate1 = combine("Hello", "TypeScript");
cl(concate1);
