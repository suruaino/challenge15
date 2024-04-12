document.addEventListener("DOMContentLoaded", function () {
  console.log("Page has succesfully loaded");
  let finishPlan = document.getElementById("finish_plan");
  let finishAdd = document.getElementById("finish_add");
  const plan = document.querySelector("#plan");
  let change = document.querySelector("#change");
  let selectedPlan = document.getElementById("selected_plan");
  let selectedAdd = document.getElementById("selected_add");
  let voteOfThanks = document.querySelector(".Vote_of_thanks");
  let selectedAddList = document.getElementById("selected_add_list");
  let total = document.getElementById("total");


  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    voteOfThanks.style.display = "flex";
    const closeBtn = document.querySelector(".close_btn");
    closeBtn.addEventListener("click", () => {
      voteOfThanks.style.display = "none";
      location.reload();
    });
  });

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

  // let addBx = document.querySelectorAll(".left");
  let addBx = document.querySelectorAll(".add_container");

  addBx.forEach((container, index) => {
    const check = container.querySelector('input[type="checkbox"]');
    let addOutput = container.querySelector(
        ".add_container .left .content h4"
    ).innerText;
    check.checked
    check.addEventListener("change", () => {
     
        if (check.checked) {
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
        } else {
            let selectedItemId = addOutput.split(" ")[0].toLowerCase();
            let itemToRemove = selectedAddList.querySelector(`#${selectedItemId}`);
            // let liLeft = document.createElement("li");
            if (itemToRemove) {
                selectedAddList.remove(itemToRemove);
            }
        }
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
    // console.log("$" + ((planValue || 0) + (addSum || 0)));
  }

  function updateTotal() {
    total.innerText = calcTotal();
    console.log(calcTotal());
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
  // const formBx = document.querySelector(".formbx");
  const slides = Array.from(document.querySelectorAll("section"));

  let totalSlides = slides.length;
  console.log(totalSlides);
  const btnBx = document.querySelector(".btnbx");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const submitBtn = document.querySelector("#submit");

  const indicatorBtns = Array.from(document.querySelectorAll(".indicator"));
  indicatorBtns[0].style.color = "black";

  let currentSlide = 0;
  if (currentSlide <= 0) {
    prevBtn.style.visibility = "hidden";
  }

  if (currentSlide === 3) {
    change.addEventListener("click", () => {
      const translateValue = -currentSlide - 3 * 105;
      slides.forEach((slide) => {
        slide.style.transform = `translateX(${translateValue}%)`;
      });

      console.log("change is clicked");
    });
  }
  nextBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentSlide < totalSlides - 1) {
      currentSlide++;

      prevBtn.style.visibility = "visible";
      submitBtn.style.display = "none";
      const translateValue = -currentSlide * 105;
      slides.forEach((slide) => {
        slide.style.transform = `translateX(${translateValue}%)`;
        indicatorBtns[currentSlide].style.backgroundColor = "#bfe2fd";
      });
      if (currentSlide === 0) {
        indicatorBtns[currentSlide].style.color = "black";
      }
      if (currentSlide >= totalSlides - 1) {
        submitBtn.style.display = "block";
        nextBtn.style.display = "none";
      }
    }

    indicatorBtns.forEach((indicatorBtn) => {
      indicatorBtn.style.backgroundColor = "transparent";
      indicatorBtn.style.color = "white";
      indicatorBtns[0].style.backgroundColor = "#bfe2fd";
      if (currentSlide) {
        indicatorBtns[currentSlide].style.backgroundColor = "#bfe2fd";
        indicatorBtns[0].style.backgroundColor = "transparent";
        indicatorBtns[currentSlide].style.color = "black";
      }
    });
    console.log(currentSlide);
  
  });

  prevBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentSlide > 0) {
      currentSlide--;
      const translateValue = -currentSlide * 105;
      slides.forEach((slide) => {
        slide.style.transform = `translateX(${translateValue}%)`;
      });
      nextBtn.style.display = "block";
      submitBtn.style.display = "none";
    }
    if (currentSlide === 0) {
      prevBtn.style.visibility = "hidden";
    }

    indicatorBtns.forEach((indicatorBtn) => {
      indicatorBtn.style.backgroundColor = "transparent";
      indicatorBtn.style.color = "white";
      indicatorBtns[0].style.backgroundColor = "#bfe2fd";
      if (currentSlide === 0) {
        indicatorBtns[0].style.color = "black";
      }
      if (currentSlide) {
        indicatorBtns[currentSlide].style.backgroundColor = "#bfe2fd";
        indicatorBtns[0].style.backgroundColor = "transparent";
        indicatorBtns[currentSlide].style.color = "black";
      }
    });
    console.log(currentSlide);
  });

  submitBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    btnBx.style.display = "none";
  });
});
