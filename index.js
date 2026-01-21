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

// the document is also an element we can alter:
document.title = "Javascript for Frontend"

// FUNCTIONS //

// a function is a repeatable piece of code that does something when we call/execute it

// function declaration
function makeHeaderRed() {
    // the thing that's in here is the code that will execute
    const header = document.querySelector('h1')
    header.style.color = "red"
}

function makeHeaderBlue() {
    const header = document.querySelector('h1')
    header.style.color = "blue"
}

function makeHeaderBlack() {
    const header = document.querySelector('h1')
    header.style.color = "black"
}

function makeHeaderGreen() {
    const header = document.querySelector('h1')
    header.style.color = "green"
}

// add event listener allows certain functions to happen (get called) when certain events happen (such as a click on a button)
const redButton = document.querySelector("#red-button")
redButton.addEventListener('click', makeHeaderRed)

const blueButton = document.querySelector("#blue-button")
blueButton.addEventListener('click', makeHeaderBlue)

// functions can take arguments/parameters in the parentheses in order to do things with those args/params
function addTogether(number, otherNumber) {
    return number + otherNumber
}

// by default a function doesn't give anything back unless we "return" it

// ARRAYS // RETURN AT 3:23 EST

const catNames = [ "Octavia", "Ursula", "Olivia" ]

catNames.push("Maggie")
catNames.push("Turbo")

// array is now [ "Octavia", "Ursula", "Olivia", "Maggie", "Turbo" ]

catNames.pop()

// array is now [ "Octavia", "Ursula", "Olivia", "Maggie" ]

catNames.unshift("Figaro")

// array is now [ "Figaro", "Octavia", "Ursula", "Olivia", "Maggie" ]

catNames[0] // this is "Figaro"
catNames[2] // this is "Ursula"
catNames[2] = "Meowsby"

// array is now [ "Figaro", "Octavia", "Meowsby", "Olivia", "Maggie" ]

function randomArrayItem(array) {
    // multiply a random decimal by the length of the array and round down to get a random index
    const randomIndex = Math.floor( Math.random() * array.length )
    return array[randomIndex]
}

function displayRandomCatName() {
    const catNames = ["Octavia", "Ursula", "Guinevere", "Turbo", "Figaro", "Meowsby", "Maggie"]
    const catNameDisplay = document.querySelector("#cat-name-display")
    catNameDisplay.textContent = randomArrayItem( catNames )
}

// two kinds of loops (there are more but we'll talk about these first...)

// for (let i = 0; i < catNames.length; i++) {
//     console.log( catNames[i] )
// }

// the 'i' stands for 'index' since it's a placeholder for all the numbers from 0 to the end of the array

// using 'for of' is often simpler although it's less flexible (we don't control the index number, when to stop, etc.)

// for (item of catNames) {
//     console.log(catNames)
// }

function addCatNameToPage(catName) {
    // 1. create element
    const pTag = document.createElement('p')

    // 2. give text and attributes
    pTag.textContent = catName
    pTag.className = "cat-name"

    // 3. find a place to put it
    const catNamesArea = document.querySelector("#cat-names-area")
    catNamesArea.append(pTag)
}

for (catName of catNames) {
    addCatNameToPage(catName)
}

// DATE //

function showCurrentTime() {
    const now = new Date()
    const hour = now.getHours()
    const minutes = now.getMinutes()
    const formattedTime = `It is now ${hour}:${minutes} EST`
    const pTag = document.createElement('p')
    pTag.textContent = formattedTime
    document.body.append(pTag)
}

showCurrentTime()

// CONDITIONAL //

const now = new Date()
const hour = now.getHours()

// if (hour < 12) {
//     console.log("It's breakfast time!")
// } else if (hour < 17) {
//     console.log("It's lunch time!")
// } else {
//     console.log("It's dinner time!")
// }

// if (1 < 2 && 2 < 3) {
//     console.log("BOTH ARE TRUE")
// } else {
//     console.log("ONE OR BOTH ARE NOT TRUE")
// }

// if (1 > 2 || 2 > 3) {
//     console.log("AT LEAST ONE IS TRUE")
// } else {
//     console.log("BOTH ARE NOT TRUE")
// }

// const someNumber = -10

// if (someNumber > 0) {

//     if (someNumber > 9) {
//         console.log("someNumber is more than one digit")
//     } else {
//         console.log("someNumber is positive")
//     }

// } else {
//     console.log("this is not a positive number")
// }

// JAVASCRIPT OBJECTS //

// nested object
const animals = {
    octopus: { 
        species: "Octopus", 
        age: 10, 
        size: "small", 
        habitat: "the ocean" 
    },
    deer: {
        species: "Deer", 
        age: 6, 
        size: "not as big as a horse", 
        habitat: "the forest" 
    },
    otter: {
        species: "Otter", 
        age: 15, 
        size: "otter sized", 
        habitat: "rivers, lakes and oceans" 
    },
    tiger: {
        species: "Tiger", 
        age: 15, 
        size: "big", 
        habitat: "jungles" 
    },
    sloth: {
        species: "Sloth", 
        age: 40, 
        size: "sloth sized", 
        habitat: "jungles" 
    }
}

function makeAnimalTab(animalObject) {
    // 1. createElement
    const newTab = document.createElement("li")
    
    // 2. give it information
    newTab.textContent = animalObject.species
    newTab.id = animalObject.species

    // 3. place it in tabs-area
    const tabsArea = document.querySelector("#tabs-area")
    tabsArea.append(newTab)
}

for (animal of Object.values( animals )) {
    makeAnimalTab(animal)
}

const tabsArea = document.querySelector("#tabs-area")

tabsArea.addEventListener("click", function populateAnimalDetails(event) {
    const animalSpecies = event.target.id.toLowerCase()
    const animal = animals[animalSpecies]
    
    const species = document.querySelector('#pet-species')
    const age = document.querySelector('#age')
    const size = document.querySelector('#size')
    const habitat = document.querySelector('#habitat')

    species.textContent = animal.species
    age.textContent = animal.age
    size.textContent = animal.size
    habitat.textContent = animal.habitat
})