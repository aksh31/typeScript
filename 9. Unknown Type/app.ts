let cl = console.log;

cl("Unkonwn Type");


// Unkonwn Type


let userInput : unknown;
// let userInput : any;

userInput = "Hello TypeScript";
userInput = 5000;
userInput = true;


let userOutput : string;

// userOutput = userInput; => when type is "unkonwn" it throws error.. but when any it get compiled..


// Only one diffrenece between "unknown" and "any"

// when declaration type is "any" then it will be assigned to another declaration as value.
// but declaration type is "unknown" then it can't be assigned to any other declaration.