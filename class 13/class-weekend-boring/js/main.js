//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerText = "YOU HAVE CLASS"
  }
  
  else if( day === "saturday" || day === "sunday"){
    document.querySelector('#placeToSee').innerText = "Its The Weekend"
  }

  else if( day === "wednesday"){
    document.querySelector('#placeToSee').innerText = "Humpday!"
  }

  else if( day === "friday"){
    document.querySelector('#placeToSee').innerText = "BORING"
  }
  
  else{
    document.querySelector('#placeToSee').innerText = "Try Again"
  }

}

//document.querySelector('#placeToSee').innerText = "YOU HAVE CLASS"
//document.querySelector('#placeToSee').innerText = "Its The Weekend"
//document.querySelector('#placeToSee').innerText = "BORING"
//document.querySelector('#placeToSee').innerText = "Humpday!"
//document.querySelector('#placeToSee').innerText = "Try Again"
