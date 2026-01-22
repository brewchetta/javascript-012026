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
    const formattedTime = `Page loaded at ${hour}:${minutes} EST`
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

// octopus has key/value pairs, for example "species" is "Octopus"
const octopus = { species: "Octopus", age: 10, size: "small", habitat: "the ocean" }

// console.log(octopus.species)
// console.log(octopus["habitat"])

// this object below is a nested object (it is an object with more objects inside of it)
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

// this function adds a tab for a specific animal object from animals
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

// this loop goes through each of the animal objects and makes a tab for them
// Object.values creates an array of each of the animals to help us loop through
for (animal of Object.values( animals )) {
    makeAnimalTab(animal)
}

const tabsArea = document.querySelector("#tabs-area")

// when we click inside the tabs area, this triggers
tabsArea.addEventListener("click", function populateAnimalDetails(event) {
    // event.target is the element we clicked on so we get the id attached to the tab so we can identify the animal clicked
    const animalSpecies = event.target.id.toLowerCase()
    // animals[animalSpecies] will substitute in the id of the tab we clicked on for example animals["octopus"]
    const animal = animals[animalSpecies]

    // check that the animal we got from the animals object exists before proceeding (otherwise we get an error)
    if (animal) {

        // get all of the relevant areas on the page to change
        const species = document.querySelector('#pet-species')
        const age = document.querySelector('#age')
        const size = document.querySelector('#size')
        const habitat = document.querySelector('#habitat')
    
        // change all of the relevant areas by adding in animal values
        species.textContent = animal.species
        age.textContent = "Age: " + animal.age
        size.textContent = "Size: " + animal.size
        habitat.textContent = "Habitat: " + animal.habitat

    }
    
})


// GSAP //

// tween --> a single part of the animation (we can animate an entire sequence if we wanted to... and we will soon!)

// #box-one identifies what to animate
// the object includes all the other info for the animation
const boxOneTween = gsap.to("#box-one", { 
    // x means move it horizontally
    x: "-300px",
    backgroundColor: "#000",
    rotation: -180,
    // duration is in seconds
    duration: 3,
    // repeat: -1 means repeat infinitely
    repeat: -1,
    // when repeating, yoyo means move backwards and forwards through the animation
    yoyo: true,
    // ease determines the animation curve a.k.a. how the timing of your animation looks
    ease: "power1.in"
})

const wordsTween = gsap.from("#animated-words", {
    color: "red",
    duration: 0.5,
    repeat: -1,
    yoyo: true,
})

// timeline allows us to stitch multiple tweens together to make a more complex animation
const boxTwoTimeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    defaults: { duration: 2 }
})

boxTwoTimeline
.to("#box-two", { borderRadius: "50px" })
.to("#box-two", { y: -300, ease: "bounce.in" })
.to("#box-two", { opacity: 0 })

// some tweens can target multiple elements such as this one which gets all svg's
const svgTween = gsap.to("svg", {
    rotation: 360,
    duration: 2.5,
    stagger: 0.5,
    repeat: -1
})
// stagger means each svg will wait 0.5 seconds after the svg before it starts animating to actually run its own animation

const allAnimations = [boxOneTween, boxTwoTimeline, wordsTween, svgTween]

function playAll() {
    for (animation of allAnimations) {
        animation.play()
    }
}

function pauseAll() {
    for (animation of allAnimations) {
        animation.pause()
    }
}

pauseAll()

new Splide('.splide').mount()

// GOOGLE AD //

const adTimeline = gsap.timeline()

adTimeline.addLabel("worldDone", 2)
adTimeline.addLabel("adComplete", 3.5)

window.addEventListener("load", function() {
    adTimeline
    .set("#banner-ad-area", { visibility: "visible" })
    .to("#banner-ad-area img", 
        { y: "-250px", duration: 2})
    .to("#final-panel", {
        x: "-250px",
        duration: 0.5
    }, "worldDone+=1")
})
// the ad starts hidden in order to wait until it's properly loaded
// first thing we do in the animation is set the visibility back to it's normal state

// SCROLL TRIGGER //

gsap.registerPlugin(ScrollTrigger)

const scrollBoxes = document.querySelectorAll('.scroll-box')

for (let index = 0; index < scrollBoxes.length; index++) {

    let xValue = "200px"

    if (index % 2 === 1) {
        xValue = "-200px"
    }

    let box = scrollBoxes[index]

    gsap.from(box, {
        x: xValue,
        duration: 5,
        scrollTrigger: {
            trigger: box,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play pause resume none"
            // scrub: 1 
            // scrub causes the animation to forward and reverse as you scroll up and down the element
            // essentially it no longer has a duration with scrub
        },
    })

}

// PARALLAX //

// document.querySelector("img").dataset.speed --> "0.05"

const parallaxTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#parallax-sandbox",
        scrub: true,
        invalidateOnRefresh: true
    }
})

document.querySelectorAll("#parallax-sandbox img").forEach(function(img) {
    const speed = img.dataset.speed
    parallaxTimeline.to(img, {
        y: -(img.offsetHeight * speed),
        ease: "none"
    }, 0)
})