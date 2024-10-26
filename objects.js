console.log("<<<<< Objects >>>>>");

// To initialize an object, use curly braces:
var emptyObject = {};
var personObject = {
    firstName: "Panha",
    lastName: "JS"
}

personObject.age = 20;
personObject["salary"] = 14000;

for(var member in personObject) {
    if(personObject.hasOwnProperty(member)) {
        console.log("The member " + member + " of personObject is " + personObject[member]);
    }
}