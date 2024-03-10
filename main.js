document.addEventListener('DOMContentLoaded', function() {
let summaryScreen = document.getElementById("screen");
let toggleBar = document.getElementById("toggle");

let planBx = document.querySelectorAll(".select_box");

planBx.forEach((container, index) => {
  const radio = container.querySelector('input[type="radio"]');

  container.addEventListener("click", () => {
    radio.checked = true;
    // container.style.backgroundColor = "red"
  });
});

summaryScreen.innerText = "Weldon bro, This is your summary page!";

let toggleSpan = document.getElementById("toggle_span");
toggleSpan.style.backgroundColor = "red"
let toggle = document.getElementById("toggle_input");
toggle.checked = true;
if (toggle.checked) {
  toggleSpan.style.right = 0;
} else {
     toggleSpan.style.left = 0; 
}

})