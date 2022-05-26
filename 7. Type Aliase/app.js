var cl = console.log;
function combine(num1, num2, resultConversion) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || resultConversion === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
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
var product2 = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
var products = [
    {
        id: 'abc1',
        price: 12.99,
        tags: ['great-offer', 'hot-and-new'],
        details: {
            title: 'Red Carpet',
            description: 'A great carpet - almost brand-new!'
        }
    },
    {
        id: 'abc1',
        price: 12.99,
        tags: ['great-offer', 'hot-and-new'],
        details: {
            title: 'Red Carpet',
            description: 'A great carpet - almost brand-new!'
        }
    }
];
