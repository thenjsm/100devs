//Create a conditonal that checks their age
document.querySelector('h1').addEventListener('click', ageCheck)

function ageCheck() {

    currentAge = document.querySelector('#danceDanceRevolution').value
    
//If under 16, tell them they can not drive

if (currentAge < 16){
    console.log('You can not drive')
}

//If under 18, tell them they can't hate from outside the club, because they can't even get in

else if (currentAge < 18){
    console.log("You can't hate from outside the club, because they can't even get in")
}

//If under 21, tell them they can not drink

else if (currentAge < 21){
    console.log("You can not drink")
}

//If under 25, tell them they can not rent cars affordably

else if (currentAge < 25){
    console.log("You can not rent cars affordably")
}

//If under 30, tell them they can not rent fancy cars affordably

else if (currentAge < 30){
    console.log("You can not rent fancy cars affordably")
}

//If under over 30, tell them there is nothing left to look forward too

else if (currentAge >= 30){
    console.log("You have nothing left to look forward to")
}


}




//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
