//--- Easy
//create a variable and assign it a number

let linus = 47

//minus 10 from that number

sebstian = linus - 10

//print that number to the console

console.log(sebstian)

//--- Medium
//create a variable that holds a value from the input

alex = document.querySelector('#danceDanceRevolution').value

//add 25 to that number

match = alex + 25

//alert that number

alert(match)

//--- Hard
//create a variable that holds the h1

const happiness = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

happiness.addEventListener('click', sum)

function sum() {
   console.log(alex + linus)
}