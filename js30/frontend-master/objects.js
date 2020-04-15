//The Dots are usually an objects   
// Dots are usually used with functions , array prototypes  and use cases.
// Any thing that use the dot operator is called the object

var person = {};

person.name="Mrs. White";

var person = {
    "name":"Mrs.white"
};

const who = person.name;

person.name="Mr.White";
console.log(person.name);
console.log(who);
console.log(who.story);
console.log(who.length);

typeof person === "object" ?console.log("object" ):console.log("Not an array");