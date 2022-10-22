// use const where variable values will not change after
const num: number = 1234;
const pi: number = 3.1456;

// use  let instead of var
//I suggest use let instead of var everywhere, becuase let has blocked scope
if (true) {
  let z = 4;
  //use z
} else {
  let z = "string";
  //use z
}
// console.log("let: " + z); // Error: z is not defined in this scope
// var x: { foo: number };
// x = { foo: 1, baz: 2 };  // Error, excess property `baz`

var y: { foo: number; bar?: number };
y = { foo: 1, bar: 2 };

// var keyword

// var item5: number = 0;
// if (item5 == 0){
// 	var item5: number = 2;
// 	console.log(`index = ${item5}`)
// }
// console.log(`index = ${item5}`)

// let keyword
let item5: number = 0;
if (item5 == 0){
	let item5: number = 2;
	console.log(`index = ${item5}`)
}
console.log(`index = ${item5}`)
