// document.addEventListener('DOMContentLoaded', function() {
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
let monthly = document.getElementById("monthly");
let yearly = document.getElementById("yearly");
let checkInput = document.getElementById("toggle_input")

checkInput.addEventListener('change', function() {
    monthly.style.color = this.checked ? "#9699ab" : "#02295a";
    yearly.style.color = this.checked ? "#02295a" : "#9699ab";
});
// })