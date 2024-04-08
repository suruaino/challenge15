document.addEventListener("DOMContentLoaded", function () {
  let finishPlan = document.getElementById("finish_plan");
  let finishAdd = document.getElementById("finish_add");
  let selectedPlan = document.getElementById("selected_plan");
  let selectedAdd = document.getElementById("selected_add");
  let selectedAddList = document.getElementById("selected_add_list");
  let total = document.getElementById("total");

  //   let currentlyCheckedRadio = null;
  let planBx = document.querySelectorAll(".select_box");

  planBx.forEach((container, index) => {
    let currentlyCheckedRadio = null;
    const radio = container.querySelector('input[type="radio"]');
    const planOutput = container.querySelector(
      ".select_box .content h4"
    ).innerText;

    container.addEventListener("click", () => {
      if (currentlyCheckedRadio !== radio) {
        if (currentlyCheckedRadio) {
          const prevContainer = currentlyCheckedRadio.closest(".select_box");
          prevContainer.style.border = "1px solid red";
          prevContainer.style.backgroundColor = "red";
        }

        radio.checked = true;
        finishPlan.innerText = ` ${radio.value}`;
        selectedPlan.innerText = `${planOutput}`;
        container.style.border = "1px solid #02295a";
        container.style.backgroundColor = "#f0f6ff";

        currentlyCheckedRadio = radio;
        console.log(finishPlan.innerText);
      }
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
    });
  });

  function calcTotal() {
    // Get the selected radio button value
    let planValue = 0;
    document.querySelectorAll('input[name="radio_plan"]').forEach((radio) => {
      if (radio.checked) {
        planValue = parseFloat(radio.value.replace(/[^\d.-]/g, ""));
      }
    });

    // Get the sum of the checked checkbox values
    const checkboxes = document.querySelectorAll(
      '.left input[type="checkbox"]'
    );
    let addSum = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const value = parseFloat(checkbox.value.replace(/[^\d.-]/g, ""));
        addSum += value;
      }
    });

    // Return the total value
    return "$" + ((planValue || 0) + (addSum || 0));
  }

  function updateTotal() {
    total.innerText = calcTotal();
  }

  // Update total whenever a checkbox or radio button is clicked
  document
    .querySelectorAll('input[type="checkbox"], input[name="radio_plan"]')
    .forEach((input) => {
      input.addEventListener("change", updateTotal);
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

  /*===== Navigative BTN algorithm =====*/

  // const slides = Array.from(document.querySelectorAll("section"));
  // let totalSlides = slides.length;
  // const formbx = document.querySelector(".formbx");
  // const nextBtn = document.getElementById("nextBtn");
  // const prevBtn = document.getElementById("prevBtn");
  // const submitBtn = document.querySelector("#submit");

  // let currentSlide = 0;

  // nextBtn.addEventListener("click", () => {
  //   if (currentSlide < totalSlides - 1) {
  //     currentSlide++;
  //     const translateValue = -currentSlide * 100;
  //     formbx.style.transform = `translateX(${translateValue}%)`;
  //     prevBtn.style.visibility ="visible";
  //   }
  //   if (currentSlide >= totalSlides - 1){
  //     submitBtn.style.display = "block";
  //     nextBtn.style.display ="none";
  //   }

  //   console.log(currentSlide)
  // });

  // prevBtn.addEventListener("click", () => {
  //   if (currentSlide > 0) {
  //     currentSlide--;
  //     const translateValue = -currentSlide * 100;
  //     formbx.style.transform = `translateX(${translateValue}%)`;
  //     nextBtn.style.display ="block";
  //     prevBtn.style.visibility ="visible";
  //     submitBtn.style.display = "none";
  // }
  // if (currentSlide <= 0){
  //   prevBtn.style.visibility ="hidden";
  // }
  // });

  const slides = Array.from(document.querySelectorAll("section"));
  let totalSlides = slides.length;
  console.log(totalSlides);
  const formbx = document.querySelector(".formbx");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const submitBtn = document.querySelector("#submit");

  let currentSlide = 0;
  if (currentSlide <= 0) {
    prevBtn.style.visibility = "hidden";
  }
  nextBtn.addEventListener("click", () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      const translateValue = -currentSlide * 100;
      formbx.style.transform = `translateX(${translateValue}%)`;
      // slides.forEach((slide) => {
      //   slide.style.transform = `translateX(${translateValue}%)`;
      // });
      prevBtn.style.visibility = "visible";
      submitBtn.style.display = "none";
    }
    if (currentSlide >= totalSlides - 1) {
      submitBtn.style.display = "block";
      nextBtn.style.display = "none";
    }
    console.log(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      const translateValue = -currentSlide * 100;
      formbx.style.transform = `translateX(${translateValue}%)`;
      // slides.forEach((slide) => {
      //   slide.style.transform = `translateX(${translateValue}%)`;
      // });
      nextBtn.style.display = "block";
      submitBtn.style.display = "none";
    }
    if (currentSlide <= 0) {
      prevBtn.style.visibility = "hidden";
    }
    console.log(currentSlide);
  });
});
// const slides = Array.from(document.querySelectorAll("section"));
// let totalSlides = slides.length;
// const formbx = document.querySelector(".formbx");
// const nextBtn = document.getElementById("nextBtn");
// const prevBtn = document.getElementById("prevBtn");
// const submitBtn = document.querySelector("#submit");

// let currentSlide = 0;

// nextBtn.addEventListener("click", () => {
//   if (currentSlide < totalSlides - 1) {
//     currentSlide++;
//     const translateValue = -currentSlide * 105;
//     // formbx.style.transform = `translateX(${translateValue}%)`;
//     prevBtn.style.visibility = "visible";

//     slides.forEach(slide => {
//       slide.style.transform = `translateX(${translateValue}%)`;
//     })
//   }

//   if (currentSlide >= totalSlides - 1) {
//     submitBtn.style.display = "block";
//     nextBtn.style.display = "none";
//   }
// });

// prevBtn.addEventListener("click", () => {
//   if (currentSlide > 0) {
//     currentSlide--;
//     const translateValue = -currentSlide * 105;
//     // formbx.style.transform = `translateX(${translateValue}%)`;
//     slides.forEach(slide => {
//       slide.style.transform = `translateX(${translateValue}%)`;
//     })
//     nextBtn.style.display = "block";
//     submitBtn.style.display = "none";
//   }

//   if (currentSlide = 0) {

//     // slides.forEach(slide => {
//     //   slide.style.transform = `translateX(${translateValue} + 105 + "%")`;
//     // })
//     prevBtn.style.visibility = "hidden";
//   }
// });

// // Initial button states
// prevBtn.style.visibility = "hidden";
// submitBtn.style.display = "none";
