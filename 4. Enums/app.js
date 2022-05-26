var cl = console.log;
// Defination >> Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
// Enums => set of declarations use
// 1 >> Candidate
// 2 >> Admin
// 3 >> SuperAdmin
// ADMIN >> admin
// READ_OONLY_USER >> candidate
// SUPER ADMIN >> super Admin
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["READ_ONLY_USER"] = 101] = "READ_ONLY_USER";
    Role[Role["SUPER_ADMIN"] = 102] = "SUPER_ADMIN";
})(Role || (Role = {}));
;
var person = {
    fname: "Ravikiran",
    lname: "Niturkar",
    email: "ravi@gmail.com",
    token: "qwerty",
    role: Role.ADMIN
};
if (person.role === Role.SUPER_ADMIN) {
    cl("This is SuperAdmin");
}
if (person.role === Role.ADMIN) {
    cl("This is Admin");
}
if (person.role === Role.READ_ONLY_USER) {
    cl("This is a Cand");
}
cl(Role.ADMIN); // value / (Index) of Admin we given 100 so the o/p is "100".
cl(Role.READ_ONLY_USER); // value / (Index) of READ_ONLY_USER we given 100 so the o/p is "101".
cl(Role.SUPER_ADMIN); // value / (Index) of SUPER_ADMIN we given 100 so the o/p is "102".
