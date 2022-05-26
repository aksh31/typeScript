let cl = console.log;

// Type Aliases => custom type
// Def =>> we define a custom type for multiple declaration..

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

function combine(num1: Combinable, num2: Combinable, resultConversion: ConversionDescriptor) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || resultConversion === "as-number") {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}


let com1 = combine(10, 30, 'as-number');
cl(com1, typeof com1);

let com2 = combine("10", "30", 'as-number');
cl(com2, typeof com2);

let com3 = combine(10, 30, 'as-string');
cl(com3, typeof com3);

let com4 = combine("Akshay", "Titarmare", "as-string");
cl(com4, typeof com4);


type Product = {
    id: string,
    price: number,
    tags: string[],
    details: {
        title: string,
        description: string
    }
}



const product2: Product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}



const products: Product[] = [
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
]


