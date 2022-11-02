// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:
// Create a function called fruity
// Setup two parameters - string1, string2
// Use a conditional that will evaluate the strings
    // Use length built in method to determine amount of characters in both strings
    // if fruit1 has more chars 
      // return fruit1
    // if fruit2 has more chars
        // return fruit2

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const fruity = (string1, string2) => {
  if(string1.length > string2.length) {
    return string1
  } else if(string1.length < string2.length) {
    return string2
  } else {
    return "Ooops, something went wrong"
  }
}

console.log(fruity(fruit1, fruit2)) // banana
console.log(fruity(fruit3, fruit4)) // cherry



// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

// Describe your process:
    // Start by creating a function. I will name it temperature. Use proper arrow function syntax. const temperature = () => {}
    // The function will take a single parameter of num1.
    // The function code block will perform differently depending on what is input in place of num1. In order to make this happen, I will utilize a conditional statement. It will cover three cases.
        // 1st case: num1 is less than 212. Return the string `${num1} is below boiling point`
        // 2nd case: num1 is greater than 212. Return the string `${num1} is above boiling point`
        // 3rd case: num1 is equal to 212. Return the string `${num1} is at boiling point`
            // More specifically, I will be comparing num1 to 212 using relational operators for each of the three cases.
            // Additionally, I will include a final else statement to act as a catch all in case the program doesn't like the input for num1.
    // Once the function is properly coded, I will log it to the console by calling upon the temperature function with the given variables temp1/temp2/temp3 inside of the function parameter.
    // Creation of the function below. The act of calling upon the function will be below each respective set.

    const temperature = (num1) => {
      if (num1 < 212) {
          return `${num1} is below boiling point`
      } else if (num1 > 212) {
          return `${num1} is above boiling point`
      } else if (num1 === 212) {
          return `${num1} is at boiling point`
      } else {
          return "Oop, something went wrong."
      }
  }
  

  console.log(temperature(temp1))  // Actual output: "42 is below boiling point"
  // Expected output: "42 is below boiling point"
  

  console.log(temperature(temp2))  // Actual output: "350 is above boiling point"
  // Expected output: "350 is above boiling point"
  

  console.log(temperature(temp3))  // Actual output: "212 is at boiling point"
  // Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Describe your process:
//No function is necessary though it is possible to create one that would work.
//Use the built in concat method to combine the strings then use the built in length method to get the length. 
//Need to create a new array variable because we are using an accessor method.
//Also possible to concat with the spread operator like ...arr. This is also an accessor method as it will not change the original array.
//bonus function that takes in two arrays, concats them, then returns their length

//(Garrett)
// Expected output: 9

let padresCombined = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padresCombined.length); // 9

let padsCombined = [...padres1984WorldSeriesRuns, ...padres1998WorldSeriesRuns]
console.log(padsCombined.length); // 9

let combine = (arr1, arr2) => {
    let combined = [...arr1, ...arr2]
    return combined.length
}
console.log(combine(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns)); // 9


//(Mike)

// Describe your process:
    //Pseudo code
        //Combined two given arrays with built in method .concat and .length.
        //Inputs: padres1984WorldSeriesRuns, & padres1998WorldSeriesRuns
        //Output: Length of both arrays combined

        // Expected output: 9
var padresWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padresWorldSeriesRuns.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:

const currentCohort = "Golf 2022"
// Expected output: "2202 floG"


// Describe your process:
    // input = Golf 2022
    // output = 2022 floG
    // create a variable called reverseString
        // use accessor .split('') to split the string into an array of letters
        // use accessor .reverse() to reverse the letters
        // use accessor .join('') to join the letters back together and covert the array back into a string

 

        // Expected output: "2202 floG"
        
        // const reverseString = currentCohort.split('').reverse().join('')
        // console.log(reverseString) // "2202 floG"

        // const reverseString = currentCohort.reverse()
        // console.log(reverseString) // "2202 floG"
        // TypeError: currentCohort.reverse is not a function
 


console.log("--------------------4")
// Create the code that will return the last index of the given value from the array using the test variables provided below.
// Describe your process:
const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// A function that takes an array and a value,
// then find the last index of the given value from the array, using .lastindexOf,
// then returns the value
const findLastIndex = (arr1, val1) => {
    let lastIndex = arr1.lastIndexOf(val1)
    return(lastIndex)
}
console.log('Expected output: 7')
console.log(`Student output: ${findLastIndex(myNumbers, givenValue1)}`)

const givenValue2 = 10
console.log("Expected output: 8")
console.log(`Student output: ${findLastIndex(myNumbers, givenValue2)}`)




// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
//Input: use the variables as the argument
    //each variable has an unsorted array of numbers
//Process: Normally using .sort() is used for numbers sort in the array from smallest to largest with the argument inside the parentheses being (a, b) => a - b. The values a and b are used to compare two numbers, the comparison continues throughout the array
// But if you want to sort the numbers from largest to smallest, you reverse the values by having the argument (a, b) => b - a

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const sortTemp = (temps) => {
    return temps.sort((a, b) => b - a);
}
console.log(sortTemp(sanDiegoSummerTemperatures));
console.log(sortTemp(sanDiegoWinterTemperatures));

// Anonymous function
// (a, b) => a - b

// const newArray = [79, 100, 4, 80, 72, 73, 82, 77, 76, 200]
// console.log(newArray.sort())
// [
//   100, 200,  4, 72, 73,
//    76,  77, 79, 80, 82
// ]