let summaryScreen = document.getElementById('screen');
let toggleBar = document.getElementById("toggle");


let arcade = document.getElementById("arcade");

arcade.addEventListener("click", function(){
    document.querySelector('input[type="radio"]').checked = "true"
}) 
summaryScreen.innerText = "Weldon bro, This is your summary page!";

function toggled(){
    let toggleSpan = document.getElementById("toggle_span");
    toggleSpan.style.right = 0;
}

