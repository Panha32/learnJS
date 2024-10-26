console.log("<<<<< Arrays >>>>>");

/* 
    JavaScript can hold an array of variables in an Array object. 
    In JavaScript, an array also functions as a list, a stack or a queue. 
*/

// To define an array, either use the brackets notation or the Array object notation:

var myArray = [1, 2, 3];
var myArray = new Array(1, 2, 3);

console.log("- Addressing"); 
// We can use the brackets [] operator to address a specific cell in our array. 
console.log(myArray[1]);      // prints out 2

/* 
    Arrays in JavaScript are sparse, meaning that we can also assign variables 
    to random locations even though previous cells were undefined. For example:
*/ 

var myArray1 = []
myArray1[3] = "hello"
console.log(myArray1);

console.log("- Array Elements");
/*
    Because JavaScript Arrays are just special kinds of objects, 
    you can have elements of different types stored together in the same array.
*/
var myArray2 = ["string", 10, {}]
console.log(myArray2);