console.log("JAVASCRIPT FOR FRONTEND")

// the "//" create a comment in javscript

// console.log("Howdy there")

// a variable
// a box that we put data in

// declaring a variable with LET lets me reassign it later
let woodysQuote = "There's a snake in my boot!"
woodysQuote = "I am redefined!!!!"
// console.log(woodysQuote)

// declaring a variable with const means that it's CONSTANT
const buzzQuote = "To infinity and beyond!"

// buzzQuote = "I am also redefined!"

// DATA TYPES //
const myString = "I AM A STRING"
const myOtherString = 'I AM ALSO A STRING'
const myOtherOtherString = `I AM ALSO ALSO STRING`
// concatenation
const addedString = myString + myOtherString
// console.log(myString)
// a string is basically going to be text

const myNumber = 1234
const myOtherNumber = -5678.12
const theSum = myNumber + myOtherNumber
// console.log(theSum)
// a number is... a number

const myBoolean = true
// either true or false

// undefined doesn't exist because we accidentally didn't create it
const iKindOfExist = undefined
// null is when we intentionally don't have something
const actuallyNull = null


// accessing elements on the page
// const variablesSection = document.getElementById('variables-section')

const variablesSection = document.querySelector("#variables-section")

const firstCodeBlock = document.querySelector(".code-block")

const h1 = document.querySelector('h1')

h1.textContent = "Javascript for Frontend"

h1.style.color = "rgba(200,0,0,1)"