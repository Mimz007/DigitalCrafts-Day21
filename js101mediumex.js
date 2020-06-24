//Medium Ex 1.
//Write a madlib function, which is given a name and a subject. 
//It will return(not print) a new string: (name)'s favorite subject in school is (subject).

let name = 'Amy'
let favSubject = 'Political Science'

console.log(name + '\'s' + 'favorite subject is' + favSubject )

/*
Write a function tipAmount that is given the bill amount and the level of service 
(one of good, fair and poor) and returns the dollar amount for the tip. Based on:
good -> 20% fair -> 15% bad -> 10%
*/

function tipAmount(cost, service){
   // let cost = prompt("What is the total bill?");
    //let service = prompt("Was the service good, fair, or poor?");

    if(service == "good") {
        return (`${cost * .20} is the tip amount, service was good`);
    }
    else if(service == "fair") {
        return (`${cost * .15} is the tip amount, service was fair`);
    }
    else if(service == "poor") {
        return (`${cost * .10} is the tip amount, service was poor`);
    }
    else {       
    return ('Please enter good, fair or poor');
    }
}
console.log(tipAmount(100, 'good')) ///call the function

//Write a function totalAmount that takes the same arguments as tipAmount 
//except it returns the total as the tip amount plus the bill amount. 
//This function may make use of tipAmount as a sub-task.

function totalAmount(){

    let cost = prompt("What is the total bill?");
    let service = prompt("Was the service good, fair, or poor?");

    if(service == "good") {
        return (`${(cost * .20) + cost} is you total amount, service was good`);
    }
    else if(service == "fair") {
        return (`${(cost * .15) + cost} is you total amount, service was fair`);
    }
    else if(service == "poor") {
        return (`${(cost * .10) + cost} is you total amount, service was poor`);
    }
    else        
    return ('Please enter good, fair or poor');
}
console.log(totalAmount(100, 'good'))

//Print Numbers
//Write a function printNumbers which is given a start number and an end number. 
//It will print the numbers from one to the other, one per line:

//printNumbers();
//function printNumbers() {
//    for (let printNumbers = 1; printNumbers <= 20; printNumbers++) {
//        console.log(printNumbers);
//    }
//}

let printNumbers = ['2', '4', '6', '8'];
printNumbers.forEach(function(name) {
    console.log(name)
})