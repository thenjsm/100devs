// *Variables*
// Create a variable and console log the value

lesNubians = 47
console.log(lesNubians)

// Create a variable, add 10 to it, and alert the value

makeda = 27
alert(makeda + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourNum(num1,num2,num3,num4) {
    alert(num1 - num2 - num3 - num4)
}

subFourNum(100,50,25,10)

// Create a function that divides one number by another and returns the remainder

function divRemain(num1,num2) {
    return num1 % num2
}

let divRemainResult = divRemain(6,3)
console.log(divRemainResult)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addJumanji(num1,num2) {
   let addCheck = num1 + num2
   if (addCheck > 50){
    alert('Jumanji')
   }
}

addJumanji(25,30)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function checkZebra(num1,num2,num3) {
   let multiplyNums = num1 * num2 * num3
   if (multiplyNums % 3 === 0){
    alert('ZEBRA')
   }
}

checkZebra(2,3,1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function returnWord(num1,word1) {
    for (let i = 1; i <= num1; i++) {
        console.log(word1)
    }
}

returnWord(8,"Roy")
