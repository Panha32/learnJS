console.log("<<<<< Arrow Functions >>>>>");

const greet = (name) => {return "Hello " + name + "!";}
console.log(greet("Panha JS"));

const greet1 = name => {return "Hello " + name + "!"};
console.log(greet1("Panha JS"));

const greet2 = name => "Hello " + name + "!";
console.log(greet2("Panha JS"));

let numbers = [3 ,5, 8, 9, 2];

function multiplyByTwo(number) {
    return number * 2;
}
let multipliedNumbers = numbers.map(multiplyByTwo);
console.log(multipliedNumbers);

const multiplyByTwo1 = number => number * 2;
let multipliedNumbers1 = numbers.map(multiplyByTwo1);
console.log(multipliedNumbers1);


