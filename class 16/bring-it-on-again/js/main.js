// *Variables*
// Declare a variable, assign it a value, and alert the value

pink = 335
alert(pink)

// Create a variable, divide it by 10, and console log the value

pinkSoWhat = 300
console.log(pinkSoWhat / 10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function multiplyThree(num1,num2,num3) {
    alert(num1 * num2 * num3)
}
multiplyThree(2,3,1)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function addAndSubtract(num1,num2,num3,num4) {
    addTwo = num1 + num2
    subtractTwo = num3 - num4
    console.log(addTwo - subtractTwo)
}
addAndSubtract(3,3,2,1)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function checkWinna(num1,num2,num3) {
    addFirst = 100 + num1
    subSecond = addFirst - num2
    divThird = subSecond / num3

    if (divThird > 25){
        console.log('WE HAVE A WINNNA')
    }
}
checkWinna(1,1,2)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function dayOfWeek(day) {
    let lowerCaseDay = day.toLowerCase()
    if (lowerCaseDay === "sunday" || lowerCaseDay === "sunday"){
        alert('Weekend')
    }else if (lowerCaseDay === "monday" || lowerCaseDay === "tuesday" || lowerCaseDay === "wednesday" || lowerCaseDay === "thursday" || lowerCaseDay === "friday"){
        alert('Weekday')
    }else{
        alert('Try again!')
    }
}
dayOfWeek('Wednesday')

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function countUp(num1) {
    for (let i = 1; i <= num1; i += 3) {
        console.log(i);
    }
}
countUp(15)