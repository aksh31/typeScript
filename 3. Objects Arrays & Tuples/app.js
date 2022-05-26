var cl = console.log;
// Object
var person = {
    name: "Ravikiran",
    age: 37,
    hobbies: ["Codeing", "Cooking", "Cricket"],
    role: [2, "Admin"]
};
cl(person.name);
cl(person.age);
cl(person);
// cl(person.nickname); ==> Key is not defined thats why giving error.
// Array
var favActivities = ["Codeing", "Cooking", "Cricket"];
// favActivities.push(100); ==> it not allows to push any other data-types, it throws error
favActivities.push("100");
// for-of loop to itrates value inside array...
for (var _i = 0, favActivities_1 = favActivities; _i < favActivities_1.length; _i++) {
    var activity = favActivities_1[_i];
    cl(activity.toUpperCase());
}
for (var _a = 0, _b = person.hobbies; _a < _b.length; _a++) {
    var hobby = _b[_a];
    cl(hobby.split(''));
}
person.role.push(1);
cl(person);
person.role.push("SuperAdmin");
cl(person);
