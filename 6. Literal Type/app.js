var cl = console.log;
// Literal Type => when we declared a type more specifically it called as literal type.
// eg => resultConversion === 'as-number' | 'as-string';
function combine(num1, num2, resultConversion) {
    var result;
    if ((typeof num1 === "number" && typeof num2 === "number") || resultConversion === 'as-number') {
        result = +num1 + +num2; // we use + for convert it into number in these kind of situations.
    }
    else {
        result = num1.toString() + num2.toString();
    }
    // if(resultConversion === 'as-number'){
    //     return +result;
    // }else{
    //     return result.toString();
    // }
    return result;
}
var com1 = combine(10, 30, 'as-number');
cl(com1, typeof com1);
var com2 = combine("10", "30", 'as-number');
cl(com2, typeof com2);
var com3 = combine(10, 30, 'as-string');
cl(com3, typeof com3);
var com4 = combine("Akshay", "Titarmare", "as-string");
cl(com4, typeof com4);
