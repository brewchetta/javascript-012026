// the "//" create a comment in javscript

// console.log will print items into the console in the devtools
console.log("JAVASCRIPT FOR FRONTEND")

// as a heads up you're only required to use the semi-colon (;) when you're performing multiple expressions on the same line:
// console.log("Yay JS!"); console.log("I <3 JS!")

// a variable
// a "box" that we store data in

// declaring a variable with LET lets me reassign it later
let woodysQuote = "There's a snake in my boot!"
woodysQuote = "I am reassigned!!!!"

// declaring a variable with const means that it's CONSTANT and cannot be changed later
const buzzQuote = "To infinity and beyond!"

// DATA TYPES //

// a string is basically text, words, and characters
const myString = "I AM A STRING"
const myOtherString = 'I AM ALSO A STRING'
const myOtherOtherString = `I AM ALSO ALSO STRING`

// string concatenation
const addedString = myString + myOtherString


// a number is... a number
const myNumber = 1234
const myOtherNumber = -5678.12
const theSum = myNumber + myOtherNumber

// a boolean is either true or false
const myBoolean = true

// undefined doesn't exist because we accidentally didn't create it
const iKindOfExist = undefined
// null is when we intentionally don't have something
const actuallyNull = null


// accessing elements on the page

// by id
const variablesSection = document.querySelector("#variables-section")

// by class
const firstCodeBlock = document.querySelector(".code-block")

// by element type
const h1 = document.querySelector('h1')

// we can change the element's attributes such as its text or style
h1.textContent = "Javascript for Frontend"
h1.style.color = "#000"