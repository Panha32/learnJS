console.log("<<<<< Manipulating Arrays >>>>>");

console.log("- push and pop");
/*  
    Arrays can also function as a stack. The {push} and {pop} methods insert and 
    remove variables from the end of an array.
*/

// let's create an empty array and push a few variables.
var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);

// After pushing variables to the array, we can then pop variables off from the end.
console.log(myStack.pop());
console.log(myStack);

console.log("- unshift and shift");
/*  
    The {unshift} and {shift} methods are similar to {push} and {pop}, only they work from the beginning 
    of the array. We can use the {push} and {shift} methods consecutively to utilize an array as a queue.

    -- The shift keyword will remove the variables of the array in the exact order they were inserted in.
    -- The unshift method is used to insert a variable at the beginning of an array.
*/

var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

myQueue.unshift(0);
myQueue.unshift(-1);

console.log(myQueue);

console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());

console.log("- Splicing")
/* 
    Splicing arrays in JavaScript removes a certain part from an array 
    to create a new array, made up from the part we took out.
*/

var myArray3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArray3);

var splice = myArray3.splice(3, 5);
console.log(splice);

console.log(myArray3);