//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function takeInNumber(num1) {
    let resultArray = [];  // Create an empty array to hold the numbers
    for (let i = 1; i <= num1; i++) {
        resultArray.push(i);  // Push each number into the array
    }
    return resultArray;  // Return the array after the loop is finished
}

console.log(takeInNumber(6));  // Output: [1, 2, 3, 4, 5, 6]
