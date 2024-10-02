//Write your pseduo code first! 

// Check for click

document.querySelector('#check').addEventListener('click', check)

// Calculate conversion

function check() {
    const celsius = document.querySelector('#celsius').value
    fairinheight = celsius * 9/5 + 32
    
// Return conversion result
    document.querySelector('#placeToSee').innerText = fairinheight

}

