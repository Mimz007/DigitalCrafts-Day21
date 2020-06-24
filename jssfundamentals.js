let namme = 'Mosh'; //string literal
let age = 30; //number literal
let isApproved = false; //bolean literal
let firstName = undefined; //undefined
let selectedColor = null; //null

// reserved key words cannot be used as variable names
// the type of operation can be use to check what type of variable based on the asigned value
// typeof doesnt differenciate between whole or float numbers
// {} is know as an object literal
// a person object with two properties

let person = {
    name: 'Amy',
    age: 70
};
//TO access the person properties

////////////////option1 - Dot Notation
person.name ='John';
console.log(person.name);

///////////////option2 - Bracket Notation
person['name'] = 'Mary';
console.log(person.name);

// an Array [] is used to store a list

let selectedColor = ['red', 'blue'];
selectedColor[2] = 'green'; //add string green to Index 2
selectedColor[2] = 1; // add string in index 2 to number 1
console.log(selectedColor)
console.log(selectedColor.length)

//FUNCTION
//perform a task or calculate a value
//declare a function
function hello (){                   //the variable "name" also known as a parameter goes inbetween the () the v
    console.log('Hello World');     //body of the function
}

hello("John"); //function called
hello("Mary");
//another ex.
function greet (name){                   //the variable "name" also known as a parameter goes inbetween the () the v
    console.log('Hello' + name );         //body of the function
}

greet("John"); //function is called.  the John is an argument to the greet function and the name is a parameter to the greet function
greet("Mary");

//a function can have multiple parameters
function greet (name, lastName){                   //the variable "name" also known as a parameter goes inbetween the () the v
    console.log('Hello' + name + ''+ lastName);     //body of the function
}

greet("John", "Smith"); // to call the above functions, two arguments have to be present given the function has two parameters

//a function that calculates a value
function square(number){
   return number * number
}

let number = square(2);
console.log(number)

//or
console.log(square(s)); //two log functions console.log and square(2)

//Named function with multiple parameter
function sum(a, b){
    return a + b
}
//////////Convert to an arrow function
let sum2 = (a, b) => a+ b    //the arrow syntax denotes that this is a function in place of the normal "function" syntax
    
//Named function with one parameter
function isPositive(number) {
    return number>=0
}
//////////Convert to an arrow function
let isPositive = number =>number>=0

//Named function with no parameter
function randomNumber(){
    return Math.random
}
//////////Convert to an arrow function
let randomNumber = () => Math.random


//Function with no name
document.addEventListener(`click`, function() {
    console.log(`Click`)
})
//////////Convert to an arrow function
document.addEventListener(`click`, () => console.log(`Click`))