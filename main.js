document.addEventListener("DOMContentLoaded", function () {
  let summaryScreen = document.getElementById("screen");
  let toggleBar = document.getElementById("toggle");

  let planBx = document.querySelectorAll(".select_box");
  planBx.forEach((container, index) => {
    const radio = container.querySelector('input[type="radio"]');

    let finishPlan = document.getElementById("finish_plan");
    let finishAdd = document.getElementById("finish_add");
    let total = document.getElementById("total");

    container.addEventListener("click", () => {
      radio.checked = true;
      finishPlan.innerText = ` ${radio.value}`;
      finishAdd.innerText = container.style.border = this
        ? "1px solid #02295a"
        : "1px solid red";
      container.style.backgroundColor = "#f0f6ff";
    });
  });

  let addBx = document.querySelectorAll(".left");
  addBx.forEach((container, index) => {
    const check = container.querySelector('input[type="checkbox"]');
    let finishAdd = document.getElementById("finish_add");
    container.addEventListener("click", () => {
      check.checked = true;
      finishAdd.innerText = `${check.value}`;
    });
  });

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

  //===== FINISHING UP=====
  // let finishPlan = document.getElementById("finish_plan");
  // let finishAdd = document.getElementById("finish_add");
  // let total = document.getElementById("total");

  // finishPlan.innerHTML = `+$ ${document.getElementById("arcade").value}/mo`;
});
