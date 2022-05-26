let cl = console.log;

// Object

let person: { name: string; age: number; hobbies: string[]; role:[number,string] } = {
    name: "Ravikiran",
    age: 37,
    hobbies: ["Codeing", "Cooking", "Cricket"],
    role : [2, "Admin"],
};

cl(person.name);
cl(person.age);
cl(person);
// cl(person.nickname); ==> Key is not defined thats why giving error.


// Array

let favActivities: string[] = ["Codeing", "Cooking", "Cricket"];

// favActivities.push(100); ==> it not allows to push any other data-types, it throws error
favActivities.push("100");

// for-of loop to itrates value inside array...

for (let activity of favActivities) {
    cl(activity.toUpperCase());
}

for(let hobby of person.hobbies){
    cl(hobby.split(''));
}

person.role.push(1);
cl(person);

person.role.push("SuperAdmin");
cl(person);


// Tuples => when array length is fixed and data types are also specific then we use "tuples"

// syntax => role:[number, string]

// person.role[0] = "SuperAdmin"; ==> it throws error when we assign string to number datatype.
// person.role[1] = 1;  ==> it throws error when we assign string to number datatype.