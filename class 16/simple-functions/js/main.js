//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwo(num1,num2) {
    alert(num1 - num2)
}

//subTwo(47,7)

//create a function that divides three numbers and console logs the quotient

function divThree(num1,num2,num3) {
console.log(num1 / num2 / num3)
}

//divThree(1000,25,10)

//create a function that multiplys three numbers and returns the product

function multThree(num1,num2,num3) {
    return num1 * num2 * num3
}

let what = multThree(2,2,2)
//console.log(what)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function remainThree(num1,num2,num3) {
    return (num1 + num2) % num3
}

let whatAgain = remainThree(3,2,3)
//console.log(whatAgain)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNum(num1,num2,num3,num4) {
    check = num1 * num2
    if (check > 100){
        console.log(num3 + num4)
    }
    if (check < 100){
        console.log(num3 - num4)
    }
    if (check = 100){
        addCheck = num1 * num2 * num3
        alert(addCheck % num4)
    }
}

//fourNum(10,2,3,4)

fourNum(10,10,3,3)