document.addEventListener("DOMContentLoaded", function () {
  //   let summaryScreen = document.getElementById("screen");
  //   let toggleBar = document.getElementById("toggle");
  let finishPlan = document.getElementById("finish_plan");
  let finishAdd = document.getElementById("finish_add");
  let selectedPlan = document.getElementById("selected_plan");
  let selectedAdd = document.getElementById("selected_add");
  let total = document.getElementById("total");

  let planBx = document.querySelectorAll(".select_box");

  planBx.forEach((container, index) => {
    const radio = container.querySelector('input[type="radio"]');
    const planOutput = container.querySelector(
      ".select_box .content h4"
    ).innerText;
    container.addEventListener("click", () => {
      radio.checked = true;
      finishPlan.innerText = ` ${radio.value}`;
      selectedPlan.innerText = `${planOutput}`;
      container.style.border = this ? "1px solid #02295a" : "1px solid red";
      container.style.backgroundColor = "#f0f6ff";
    });
  });

  let addBx = document.querySelectorAll(".left");
  //   let selectedAddValue = [];
  addBx.forEach((container, index) => {
    const check = container.querySelector('input[type="checkbox"]');
    let addOutput = container.querySelector(
      ".add_container .left .content h4"
    ).innerText;

    container.addEventListener("click", () => {
      check.checked = true;
      finishAdd.innerText = `${check.value}`;
      selectedAdd.innerText = `${addOutput}`;
    });
  });

  function calcTotal() {
    let planValue = parseFloat(finishPlan.innerText.trim().substring(1)) || 0;
    let addValue = parseFloat(finishAdd.innerText.trim().substring(1)) || 0;
    return `$ ${planValue} + ${addValue}`;
  }
  total.innerText = calcTotal();

  // summaryScreen.innerText = "Weldon bro, This is your summary page!";
  let monthly = document.getElementById("monthly");
  let yearly = document.getElementById("yearly");
  let monthlyPlan = document.getElementById("plan_monthly");
  let yearlyPlan = document.getElementById("plan_yearly");
  let monthlyAdd = document.getElementById("add_monthly");
  let yearlyAdd = document.getElementById("add_yearly");
  let checkInput = document.getElementById("toggle_input");

  checkInput.addEventListener("change", function () {
    monthly.style.color = this.checked ? "#9699ab" : "#02295a";
    yearly.style.color = this.checked ? "#02295a" : "#9699ab";
    monthlyPlan.style.display = this.checked ? "none" : "flex";
    yearlyPlan.style.display = this.checked ? "flex" : "none";
    monthlyAdd.style.display = this.checked ? "none" : "flex";
    yearlyAdd.style.display = this.checked ? "flex" : "none";
  });
});

/*===== Navigative BTN algorithm =====*/
let btnBox = document.getElementById("btnbx");
let nextBtn = document.querySelectorAll(".btnbx .next");
let backBtn = document.querySelectorAll(".btnbx .back");
let formBx = document.getElementById("formbx");


nextBtn.forEach(container => {
  container.addEventListener("click", function () {
    formBx.style.translate = -100 + "%";
});
})


     


// }

// document.addEventListener("DOMContentLoaded", function () {
//     let summaryScreen = document.getElementById("screen");
//     let toggleBar = document.getElementById("toggle");
//     let finishPlan = document.getElementById("finish_plan");
//     let finishAdd = document.getElementById("finish_add");
//     let total = document.getElementById("total");

//     let planBx = document.querySelectorAll(".select_box");

//     planBx.forEach((container, index) => {
//       const radio = container.querySelector('input[type="radio"]');
//       container.addEventListener("click", () => {
//         radio.checked = true;
//         finishPlan.innerText = ` $${radio.value}`;
//         container.style.border = this ? "1px solid #02295a" : "1px solid red";
//         container.style.backgroundColor = "#f0f6ff";
//         calculateTotal(finishPlan.innerText, finishAdd.innerText);
//       });
//     });

//     let addBx = document.querySelectorAll(".left");
//     addBx.forEach((container, index) => {
//       const check = container.querySelector('input[type="checkbox"]');
//       container.addEventListener("click", () => {
//         check.checked = true;
//         finishAdd.innerText = `$${check.value}`;
//         calculateTotal(finishPlan.innerText, finishAdd.innerText);
//       });
//     });
//    // Function to calculate total
//    function calculateTotal() {
//     let finishPlanValue = parseFloat(finishPlan.innerText.trim().substring(1)) || 0; // Remove $ sign
//     let finishAddValue = parseFloat(finishAdd.innerText.trim().substring(1)) || 0; // Remove $ sign
//     sum = `$${finishPlanValue + finishAddValue}`;
//   }
// //   total.innerText = calculateTotal;

//     let monthly = document.getElementById("monthly");
//   let yearly = document.getElementById("yearly");
//   let monthlyPlan = document.getElementById("plan_monthly");
//   let yearlyPlan = document.getElementById("plan_yearly");
//   let monthlyAdd = document.getElementById("add_monthly");
//   let yearlyAdd = document.getElementById("add_yearly");
//   let checkInput = document.getElementById("toggle_input");

//   checkInput.addEventListener("change", function () {
//     monthly.style.color = this.checked ? "#9699ab" : "#02295a";
//     yearly.style.color = this.checked ? "#02295a" : "#9699ab";
//     monthlyPlan.style.display = this.checked ? "none" : "flex";
//     yearlyPlan.style.display = this.checked ? "flex" : "none";
//     monthlyAdd.style.display = this.checked ? "none" : "flex";
//     yearlyAdd.style.display = this.checked ? "flex" : "none";
//   });
//   });

// document.addEventListener("DOMContentLoaded", function () {
//     let finishPlan = document.getElementById("finish_plan");
//     let finishAdd = document.getElementById("finish_add");
//     let total = document.getElementById("total");

//     let planBx = document.querySelectorAll(".select_box");
//     let addBx = document.querySelectorAll(".left");

//     function updateTotal() {
//       let finishPlanValue = parseFloat(finishPlan.innerText.replace("$", "")) || 0;
//       let finishAddValue = parseFloat(finishAdd.innerText.replace("$", "")) || 0;
//       total.innerText = `$${finishPlanValue + finishAddValue}`;
//     }

//     planBx.forEach((container) => {
//       const radio = container.querySelector('input[type="radio"]');
//       container.addEventListener("click", () => {
//         radio.checked = true;
//         finishPlan.innerText = `$${radio.value}`;
//         updateTotal();
//       });
//     });

//     addBx.forEach((container) => {
//       const check = container.querySelector('input[type="checkbox"]');
//       container.addEventListener("click", () => {
//         check.checked = true;
//         finishAdd.innerText = `$${check.value}`;
//         updateTotal();
//       });
//     });

//     updateTotal(); // Calculate total initially
//   });

// document.addEventListener("DOMContentLoaded", function () {
//     let finishPlan = document.getElementById("finish_plan");
//     let finishAdd = document.getElementById("finish_add");
//     let total = document.getElementById("total");

//     let planRadios = document.querySelectorAll('input[name="radio_plan"]');
//     let addCheckboxes = document.querySelectorAll('.add_inputs');

//     function updateTotal() {
//       let finishPlanValue = parseFloat(finishPlan.innerText.replace("$", "")) || 0;
//       let finishAddValue = Array.from(finishAdd.innerText.matchAll(/\+\$\d+/g)).reduce((acc, match) => {
//         return acc + parseFloat(match[0].substring(2));
//       }, 0);
//       total.innerText = `$${finishPlanValue + finishAddValue}`;
//     }

//     planRadios.forEach((radio) => {
//       radio.addEventListener("change", () => {
//         finishPlan.innerText = radio.value;
//         updateTotal();
//       });
//     });

//     addCheckboxes.forEach((checkbox) => {
//       checkbox.addEventListener("change", () => {
//         let addon = checkbox.parentNode.querySelector(".content h4").innerText;
//         if (checkbox.checked) {
//           finishAdd.innerText += ` +$${addon}`;
//         } else {
//           finishAdd.innerText = finishAdd.innerText.replace(` +$${addon}`, '');
//         }
//         updateTotal();
//       });
//     });

//     updateTotal(); // Calculate total initially
//   });
