//Write your pseduo code first! 

//Fetch inputted celsius value

document.querySelector('#convert').addEventListener('click', convert)

//Do coversion calculation to fairinheight

function convert() {

    const celsius = document.querySelector('#celsius').value
    
    fairinheight = celsius * 9/5 + 32

//Return calculation result


    document.querySelector('#placeToSee').innerText = fairinheight
  
  }