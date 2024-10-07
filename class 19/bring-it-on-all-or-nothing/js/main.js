// *Variables*
// Declare a variable, assign it a boolean, and alert the value

itsMorning = true
alert(itsMorning)

// Declare a variable, reassign it to your favorite color, and console log the value

let bestColor = 'Black'
bestColor = "Blue"
console.log(bestColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function fourNumCalc(num1,num2,num3,num4) {
    return (num1 + num2 + num3) / num4
}

let calcResult = fourNumCalc(2,3,4,5)
console.log(calcResult)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function powerNum(num1,num2) {
    console.log(Math.pow(num2,num1))
}

powerNum(2,3)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function isItTrue(booValue,userWord) {
    if (booValue == true) {
        alert(userWord)
    }
    else if (booValue == false) {
        console.log(userWord)
    }
}

isItTrue(false,"Slay mama, slay")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function threesAndFives(num1) {
    for (let i = 1; i <= num1; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        }
        else if (i % 3 === 0){
            console.log('fizz')
        }
        else if (i % 5 === 0){
            console.log('buzz')
        }
        else{
            console.log(i)
        }
    }
}

threesAndFives(30)