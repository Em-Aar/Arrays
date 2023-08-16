var kitchen1 = ["sugar", "salt", "blackpepper",];
//let removedvalue = kitchen1.pop();
//console.log(removedvalue);
//shift unshift 
//console.log(kitchen1.unshift("Rehan"));
//console.log(kitchen1);
//console.log(kitchen1.shift());
//console.log(kitchen1);
//console.log(kitchen1.slice(1,2)); // slice doesn't include endindex value
//console.log(kitchen1);
// Syntax splice(<startIndex>, <no. of values to remove>, <value1,...valuen>)
var newArray = [1, 2, 4, 5, 6];
console.log("\n The Array before splice: ", newArray);
// Adding an element
//newArray.splice(2,1,45,46,47);
//console.log("\n The Array after splice: ", newArray);
// Replace
//Remove 
newArray.splice(2, 3);
console.log("\n The Array after splice: ", newArray);
