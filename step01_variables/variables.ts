//strongly typed syntax
let myNumber: number = 1234;
let myBoolean:boolean =true;
let myStringArray:string[] = ['anam','maham','noor'];
myBoolean = myNumber === 1;
myStringArray = [myNumber.toString() , `5678`];
myNumber = parseInt(myStringArray[0]);
console.log(typeof (myNumber === 1));
console.log(typeof ([myNumber.toString() , `5678`]));
console.log(typeof (parseInt(myStringArray[0])));
// Duck Typing
var objectNamefunc = {
    name: "anam",
    id: 2,
    print:():void=>{}
}
// objectNamefunc = {
//     name: "anam",
//     id: 2,
// }
var obj1 = {
    id:1,
    name: "anam"
}
var obj2 = {
    id:2,
    name:"maham",
    select : () : void =>{}
}
obj1 = obj2;
// obj2 = obj1;

// function
let ag:number = 30;
if(ag <50) {
    ag +=10;
}