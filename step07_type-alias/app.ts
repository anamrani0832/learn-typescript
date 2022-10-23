type stringOrNumber = string | number;
let addtwoUnions = (
  num1: stringOrNumber,
  num2: stringOrNumber
): stringOrNumber => {
  return num1.toString() + num2;
};

console.log(addtwoUnions(2,3));
console.log(addtwoUnions('2','3'));