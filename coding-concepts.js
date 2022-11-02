// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: ["tangerine", "magenta", "lilac", "daffodil", "indigo"] or 5
// b) Verify and explain: 5 - .push will provide the output of the new length of the array

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length built-in method will return number of values in the string, including the space.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])
// a) Your answer: o
// b) Verify and explain: The number four inside the brackets indicates the index position beginning with 0 within the const greeting. The index position returns the 4th indexed position starting with 0. h=0 e=1 l=2 l=3 o=4

// a) Your answer:
    // Answer: This should return the index of "o"
// b) Verify and explain:
    // Answer: The "o" is at the index of 4

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: console.log(languages[]) will reference what is provided in the index which is in this case, 1.

// // a) Your answer: Ruby
// // b) Verify and explain: This function will return Ruby because of the 1 and [index]. This allows the first word in the array to be counted as a single index so starting at 0 we count 1 bringing us to Ruby.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Code doesn't work
// b) Verify and explain: toUpperCase built in method only works for strings, the const weekendDays is an array.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)


// a) Your answer: a logical guess would be string 4

// b) Verify and explain: typeof does return a kind of data type or object but what happened here is since datatypes.length turns out to equal the index number (4), typeof read the number 4 and said "oh thats a number so I'll output 'number'".
