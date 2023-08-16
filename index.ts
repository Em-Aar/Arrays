// array elements can be of any type (number, string, boolean, )

//this is how we define the string type arrray
let kitchen : string[] = ["sugar", "salt", "blackpepper"];

//this is how we define the number type arrray
let ourNumbers : number[] = [1, 2, 3];

//What if a string consist of mix data types? Then we have to define a custom type for the array.

type newType = [number,string,number,string]; // This is how we define the custom type of the array.

let mixString :newType  = [1,"a",2,"3"]; //Here we are using the custom type we created with name 'newType'.


//ARRAY METHODS -- Methods are the operations that we can perform on an array.


//0 - length -- This method provides the length of array: The number of elements in an array.

/* console.log("\n No. of elements in Kitchen: ", kitchen.length);
console.log("\n Lenght of ourNumbers: ", ourNumbers.length);
console.log("\n Lenght of mixString: ", mixString.length); */
//1- indexOf() -- Since Every array element has an index. This method returns the index of an element in an array.

/* console.log("\n Finding Index: ", kitchen.indexOf("salt"));
console.log(kitchen.indexOf("sugar")); */

//2- concat() -- This method joins two arrays and returns a new array with elements of both arrays.
//Please remember, we cannot concatenate string type array with number type array or vice versa.
//However, we can concatenate any type of array to our mixed type of array. 
//console.log("\n Concatenating 2 arrays: ", mixString.concat(ourNumbers));


//3- push() -- This method is used to add an element in an array. It adds new element in the last
//It will return the new length of array after adding the elements.
//console.log("\n Array before adding: ", kitchen);
//console.log("\n Array length before adding: ", kitchen.length);
//console.log("\n Array length after adding: ", kitchen.push("bread"));  //,"milk"))
//console.log("\n Array after adding: ", kitchen);

/* 
//4- pop() -- This method is used to remove last element in an array.
//It will return the removed element of the array.
console.log("\n Array before removing: ", kitchen);
console.log("\n Removed element name: ", kitchen.pop());
console.log("\n Array after removing: ", kitchen);

//5- shift() -- This method is used to remove the first element in an array.
//It will return the removed element of the aray.

console.log("\n Array before removing: ", kitchen);
console.log("\n Removed element name: ", kitchen.shift());
console.log("\n Array after removing: ", kitchen);

//6- unshift() -- This method is used to add an element in an array. It adds new element in the start
//It will return the new length of array after adding the elements.
console.log("\n Array before adding: ", kitchen);
console.log("\n Array length before adding: ", kitchen.length);
console.log("\n Array length after adding: ", kitchen.unshift("sugar"));
console.log("\n Array after adding: ", kitchen);


//7- slice() -- This method splits an array, in whichever manner we want and returns the trimmed array.
// slice (startIndex, endIndex) take two index.
let newNames : string [] = ["Ayesha", "Maryam","Neha","Hina"];

//It includes the element of start index in trimmed array but doesn't include the element of 
//end index in the array.

console.log("\n Array before slice: ", newNames);
console.log("\n startIndex 1 and end index 2: ",newNames.slice(1,2));
console.log("\n startIndex 0 and end index 2: ",newNames.slice(0,2));
console.log("\n startIndex 0 and end index 3: ",newNames.slice(0,3));

//If we do not give endIndex, it will trim the array from startIndex till the last element of array.

console.log("\n Array before slice: ", newNames);
console.log("\n startIndex 1 No endIndex: ",newNames.slice(1));
console.log("\n startIndex 0 No endIndex: ",newNames.slice(0));
console.log("\n startIndex 2 No endIndex: ",newNames.slice(2));

//8- splice() -- This method is used to adding elements, replacing elements or removing elements.
// Syntax  array.splice(index, no. of elements to be removed, element1,..,elementN)
// This method doesn't return anything. it only modifies the array.

// How to add an elemnt with splice --
let newArray = [1,2,4,5,6];
console.log("The Array before splice: ", newArray);
newArray.splice(2,0,3);
console.log("The array after adding 3 between 1 and 2: ", newArray);

// How to replace an elemnt with splice --
console.log("The Array before splice: ", newArray);
newArray.splice(2,1,25);
console.log("The element at index 2 which is number 3 will be replaced by 25: ", newArray);

//If we write more than one element with value <number of elements to be replace> = 1,
//it will add remaining elements after replacing one element.
console.log("The Array before splice: ", newArray);
newArray.splice(2,1,32,33,34,35);
console.log("element at index2 (25) will be replaced by 32 and 33 to 35 will be added after it: ", newArray);
// if we want to replace 4,5,6, with 33,34,35 just write the value <number of elements to be replace> = 4

//Removing elements (<startIndex>,<no. of elements to be removed>)
newArray.splice(2,4);
console.log("Removed 32,33,34,35: ",newArray);

//More methods.... do it yourself:    
// sort(), lastIndexOf(), join(), reverse(), toString(), every(), filter(), map(), reduce(), reduceRight()
// some(), fill(), find(), findLast(), findIndex(), findLastIndex() */