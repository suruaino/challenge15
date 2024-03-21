document.addEventListener("DOMContentLoaded", function () {
  //   let summaryScreen = document.getElementById("screen");
  //   let toggleBar = document.getElementById("toggle");
  let finishPlan = document.getElementById("finish_plan");
  let finishAdd = document.getElementById("finish_add");
  let selectedPlan = document.getElementById("selected_plan");
  let selectedAdd = document.getElementById("selected_add");
  let selectedAddList = document.getElementById("selected_add_list");
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

  addBx.forEach((container, index) => {
    const check = container.querySelector('input[type="checkbox"]');
    let addOutput = container.querySelector(
      ".add_container .left .content h4"
    ).innerText;

    container.addEventListener("click", () => {
      check.checked = true;
      let liLeft = document.createElement("li");
      liLeft.innerHTML = `<span id="${addOutput
        .split(" ")[0]
        .toLowerCase()}"> ${addOutput} </span>
                          <span> ${check.value} </span>`;
      selectedAddList.style.width = "100%";
      selectedAddList.appendChild(liLeft);
      liLeft.style.width = "100%";
      liLeft.style.display = "flex";
      liLeft.style.justifyContent = "space-between";

      // Calculatin the sum of the selected add!
    //   const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    //   let addSum = 0;

    //   checkboxes.forEach((checkbox) => {
    //     if (checkbox.checked) {
    //       const value = parseFloat(checkbox.value.replace(/[^\d.-]/g, ""));

    //       addSum += value;
    //     }
    //   });

    //   // Log the sum to the console
    //   console.log(addSum);
    });
  });

//   function calcTotal() {
//     // let planValue = parseFloat(finishPlan.innerText.trim().substring(1));
//     // let addValue = parseFloat(finishAdd.innerText.trim().substring(1)) || 0;

//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');

//       let addSum = 0;

//       checkboxes.forEach((checkbox) => {
//         if (checkbox.checked) {
//           const value = parseFloat(checkbox.value.replace(/[^\d.-]/g, ""));

//           addSum += value;
//         }
//       })
//       return addSum;
//     // return `$ ${planValue} + ${addSum}`;
//   }
//   total.innerText = calcTotal();


function calcTotal() {
    // Get the selected radio button value
    let planValue = 0;
    document.querySelectorAll('input[name="radio_plan"]').forEach((radio) => {
      if (radio.checked) {
        planValue = parseFloat(radio.value.replace(/[^\d.-]/g, ""));
      }
    });
  
    // Get the sum of the checked checkbox values
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let addSum = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const value = parseFloat(checkbox.value.replace(/[^\d.-]/g, ""));
        addSum += value;
      }
    });
  
    // Return the total value
    return planValue + addSum;
  }
  
  function updateTotal() {
    total.innerText = calcTotal();
  }
  
  // Update total whenever a checkbox or radio button is clicked
  document.querySelectorAll('input[type="checkbox"], input[name="radio_plan"]').forEach((input) => {
    input.addEventListener('change', updateTotal);
  });
  
  // Initial calculation
  updateTotal();
  

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

nextBtn.forEach((container) => {
  container.addEventListener("click", function () {
    formBx.style.marginLeft = -100 + "%";
  });
});
