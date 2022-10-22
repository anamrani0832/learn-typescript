"use strict";
//strongly typed syntax
let myNumber = 1234;
let myBoolean = true;
let myStringArray = ['anam', 'maham', 'noor'];
myBoolean = myNumber === 1;
myStringArray = [myNumber.toString(), `5678`];
myNumber = parseInt(myStringArray[0]);
console.log(typeof (myNumber === 1));
console.log(typeof ([myNumber.toString(), `5678`]));
console.log(typeof (parseInt(myStringArray[0])));
// Duck Typing
var objectNamefunc = {
    name: "anam",
    id: 2,
    print: () => { }
};
// objectNamefunc = {
//     name: "anam",
//     id: 2,
// }
var obj1 = {
    id: 1,
    name: "anam"
};
var obj2 = {
    id: 2,
    name: "maham",
    select: () => { }
};
obj1 = obj2;
// obj2 = obj1;
// function
let ag = 30;
if (ag < 50) {
    ag += 10;
}
//# sourceMappingURL=variables.js.map