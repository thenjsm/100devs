// *Variables*
// Create a variable and console log the value

const myNeighbour = "Totoro"
console.log(myNeighbour)

// Create a variable, add 10 to it, and alert the value

let nostalgia = 2001
newNostalgia = nostalgia + 10
alert(newNostalgia)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function mustSub(num1,num2,num3,num4){
   const subbed = num1 - num2 - num3 - num4
   alert(subbed)
}

mustSub(100,50,25,10)

// Create a function that divides one number by another and returns the remainder

function showRemain(num1,num2) {
    const itRemain = num1 % num2
    alert(itRemain)
}

showRemain(34,7)


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function sumJumanji(num1,num2) {
    isItJumanji = num1 * num2
    if (isItJumanji > 50){
        alert('Jumanji')
    }
}

sumJumanji(10,10)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function divThree(num1,num2,num3) {
    isDivThree = num1 * num2 * num3
    if (isDivThree % 3 === 0){
        alert('ZEBRA')
    }
}

divThree(3,3,3)
