/*alert("hello")
alert("world")*/
//value and variables
/*console.logH("hello")

let firstname ="naveen";
console.log(firstname);

let age = 22;
console.log(age);
*/


//datatypes
//number,string,boolean,bigint

/*let age = 22; //number
let javascriptIsFun = true; //boolean
let javascriptIsFun ="fun"; //string*

//Basic Operators
//math operators

/*
const now = 2025;
const ageNaveen = now - 2001;
console.log(ageNaveen);

const firstname = "naveen";
const lastname = "kumar";
console.log(firstname + " " + lastname);
*/

//Assignment Operators
/*let x = 10 + 5; //15
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x++
x--
console.log(x);*/

//comparison operators
/*const ageNaveen = 22;   
const ageKumar = 18;
console.log(ageNaveen > ageKumar); // >, <, >=, <=
console.log(ageKumar >= 18);
*/


////Equality operator :**,****
/*const age = "18";
console.log(age==18); //true
console.log(age===18); //false*/

//logical operators(&&, ||, !)
/*const hasDrivingLiscence = true; //A
const hasGoodVision = 13; //B

console.log(hasDrivingLiscence && hasGoodVision);(check both value if both value is true then it writes true or false   )
console.log(hasDrivingLiscence || hasGoodVision);(check true value if value is true then it writes true or false)
console.log(!hasDrivingLiscence);(true =false,false=true)
*/

//Switch Statement(use break in every case, if we don't give any case then it will go to default case)


/*Switch(day){
    case 'monday':
        console.log("plan course structure");
        console.log("go to coding meetup");
        break;              
    case 'tuesday':
        console.log("prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("write code examples");
        break;
    case 'friday':
        console.log("record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("enjoy the weekend");
        break;
    default:
        console.log("not a valid day");
}*/


//Conditional operator(ternary operator)
/*
const age = 23;

age>18?console.log("Eligible"): 
console.log("Not Eligible");*/

"use strict";
let hasDriversLiscence = false;
const passTest = true;

if(passTest) hasDriversLiscence = true;
if(hasDriversLiscence) console.log("I can drive :D");
    
