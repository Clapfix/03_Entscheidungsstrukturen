"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 35;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);


// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("___________________________");


/********* IF ***********/
//TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos

// if(false)
// if (isJohnOlder);
// {
//    console.log("John ist älter.") 
// }

/******** IF - ELSE******* */
// mit Alternative
// entweder ja oder nein 

// if (isJohnOlder) {                    // Ja-Zweig / true
//     console.log("John ist älter.");
// } else {                              // Nein-Zweog / false
//     console.log("John ist jünger.");
// }


/********Ternäre (ternary) Schreibweise ********* */
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/******* IF - ELSE IF ********* */
// mit alternativen Fällen (älter, jünger, gleich)

if (isJohnOlder) 
{
    console.log("John ist älter.");
}
else if(isJohnEqual)
{
    console.log("John ist gleichalt.");
}
else 
{                                              
    console.log("John ist jünger.");
}