/*Write a function 3x that has two parameters and those parameters are used in a sentence that says 
"hello my name is NAME I am AGE years old", except NAME and AGE would be the parameters given.
Use the 3 ways of declaring a function to make each function different but the results to console the same.
For each function use a different way of creating the output sentence. For example only one can use concatanation.
*/

let name = 'Amy'
let age = 30

console.log(`Hello my name is${name}I am${age}years old`)

function hello(name, age)
{
    console.log("Hello My Name is" + name + "I am" + age + "years old")
}

/*Write a function that has another function as a parameter, and inside the main function the parameter
 function is called after you print to the console "Main Function Executing".
You can declare the function as a varaible before and place that variable as the parameter.
(Challange) have the main function have a second parameter that will be used as an argument for the child function.
*/

let myFirstFunc = function(anotherfunc){
    console.log('Main Function Executing')
    return anotherfunc
}
let secondfunc = () => console.log("child function")

/*Write a function that will print to the console "Parent Function Called" 
and then returns a function that when is called will print to the console "Child Function Called" 
The child function cannot be declared outside of the main function. Follow steps bellow if you need a step by step way to do it.
Create a function and have that function print to the console.
Inside the main function declare the second function as a variable that prints to the console the given statement
after the second function is declared inside the main function, return the variable that the second function is assigned to.
Outside of the function assign the called function to a variable (that variable is now a function).
// call that variable
*/

console.log("Hello World");

//Write a function that accepts string as an argument and if the string is less than 4 charecters return one message, if it is greater than 12 return another message otherwise return a final message about being accepted.


//Write a function that accepts an argument named tempature. Have at least 6 ranges of tempature that represents a html valid color. Return the color based on the argument supplied when calling the function.
//Use Switch. (hint do a google search for 'switch(true)' )


//Write a function that will return an array of arrays with 100 copies of each element in the array supplied in the as an argument of the function. 
//The array in the parameter needs to be strings and needs to have at least 5 elements.
//(ridiculous unessery challenge..seriously dont try this unless you are just wanting a challange) complete the above with the following requirements (it can be more than one function for this):
//Without mutating anything (strings, arrays etc). This means no variable can change and no array can be added to or removed from. (look up imutability)
//Without Using any loops
//Without using forEach, map, filter, or reduce.
//(seriously please do not spend more than 30 minutes trying to do this)
//loop through properties of an object

const namelist = ['livy', 'sophy', 'aria'];

const makeCopies = (myArr) => {
    let outArray = []
    for(let i = 0; i < myArr.length; i++){                    
        outArray[i] =[]
                                                            //nested forLoop
        for (let j =0; j< 100; j++){
            outArray[i].push[myArry[i])
        }
    }
    return outArray

}
console.log(makeCopies(namelist))

//using recurrsion
const namelist2 = ('livy', 'sophy', 'aria')

let myString = 'myString';                                 //repeats my string 100 times
let arrayofmyString = `${myString}/` .repeat(100)

 