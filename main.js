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

  let planBx = document.querySelectorAll(".select_box");

  planBx.forEach((container, index) => {
    let currentlyCheckedRadio = null;
    const radio = container.querySelector('input[type="radio"]');
    const planOutput = container.querySelector(
      ".select_box .content h4"
    ).innerText;

    container.addEventListener("click", () => {
      let title = container.getAttribute("title");
      console.log(title);

      if (currentlyCheckedRadio !== radio) {
        if (currentlyCheckedRadio) {
          const prevContainer = currentlyCheckedRadio.closest(".select_box");
          prevContainer.style.border = "1px solid red";
          prevContainer.style.backgroundColor = "red";
        }

        radio.checked = true;
        finishPlan.innerText = ` ${radio.value}`;
        selectedPlan.innerText = `${planOutput}(${title})`;
        container.style.border = "1px solid #02295a";
        container.style.backgroundColor = "#f0f6ff";

        currentlyCheckedRadio = radio;
        console.log(finishPlan.innerText);
      }
    });
  });

  let addBx = document.querySelectorAll(".add_container");

  addBx.forEach((container, index) => {
    const check = container.querySelector('input[type="checkbox"]');
    let selectableCheckValue = container.querySelector(".add_container > p");
    let addOutput = container.querySelector(
      ".add_container .left .content h4"
    ).innerText;

    check.addEventListener("change", () => {
      let selectedItemId = addOutput.split(" ")[0].toLowerCase() + index;
      let itemToRemove = selectedAddList.querySelector(`#${selectedItemId}`);

      if (check.checked) {
        container.style.border = "1px solid #473dff";
        selectableCheckValue.style.color = "#473dff";

        let liLeft = document.createElement("li");
        liLeft.setAttribute("id", selectedItemId);
        liLeft.innerHTML = `<span id="${addOutput
          .split(" ")[0]
          .toLowerCase()}"> ${addOutput} </span>
                                  <span id="${addOutput
                                    .split(" ")[0]
                                    .toLowerCase()}2" style="color: #473dff;"> ${
          check.value
        } </span>`;
        selectedAddList.appendChild(liLeft);
        liLeft.querySelector("span:last-child").style.color = "#473dff";
        selectedAddList.style.width = "100%";
        liLeft.style.width = "100%";
        liLeft.style.display = "flex";
        liLeft.style.justifyContent = "space-between";
      } else {
        container.style.border = "1px solid #9699ab";
        selectableCheckValue.style.color = "#9699ab";

        if (itemToRemove) {
          selectedAddList.removeChild(itemToRemove);
        }
      }
    });
  });

  function calcTotal() {
    // Get the selected radio button value

    let planValue = 0;
    let title = "";
    document.querySelectorAll('input[name="radio_plan"]').forEach((radio) => {
      if (radio.checked) {
        planBx.forEach((container) => {
          if (container.contains(radio)) {
            title = container.getAttribute("title");
            if (title == "Monthly") {
              title = title.substring(0, 2).toLowerCase();
            } else {
              title = title.charAt(0).toLowerCase() + title.charAt(3);
            }
          }
        });
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
    return "$" + ((planValue || 0) + (addSum || 0)) + title;
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

  let monthly = document.getElementById("monthly");
  let yearly = document.getElementById("yearly");
  let monthlyPlan = document.getElementById("plan_monthly");
  let yearlyPlan = document.getElementById("plan_yearly");
  let monthlyAdd = document.getElementById("add_monthly");
  let yearlyAdd = document.getElementById("add_yearly");
  let checkInput = document.getElementById("toggle_input");
  let totalFor = document.getElementById("total-for");

  

  checkInput.addEventListener("change", function () {
    monthly.style.color = this.checked ? "#9699ab" : "#02295a";
    yearly.style.color = this.checked ? "#02295a" : "#9699ab";
    monthlyPlan.style.display = this.checked ? "none" : "flex";
    yearlyPlan.style.display = this.checked ? "flex" : "none";
    monthlyAdd.style.display = this.checked ? "none" : "flex";
    yearlyAdd.style.display = this.checked ? "flex" : "none";

//to change the descriptive total text according to the duration of the selected plan.
    totalFor.classList.toggle("total-for");
    document.querySelector(".total-for").innerText = `Total(per year)`;

  });

  /*===== Navigative BTN algorithm =====*/
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
  slides[currentSlide].style.display = "flex";
  if (currentSlide <= 0) {
    prevBtn.style.visibility = "hidden";
  }
  /***===== HANDLING THE SUMMARY CHANGE LINK =====***/
  change.addEventListener("click", () => {
    currentSlide = 1;
    slides[currentSlide].style.display = "flex";
    slides[currentSlide + 2].style.display = "none";
    indicatorBtns[currentSlide].style.backgroundColor = "#bfe2fd";
    indicatorBtns[currentSlide].style.color = "#000000";
    indicatorBtns[currentSlide + 2].style.backgroundColor = "transparent";
    indicatorBtns[currentSlide + 2].style.color = "white";
    // indicatorBtns[currentSlide + 3].style.color = "red";

    planBx.forEach((container, index) => {
      let currentlyCheckedRadio = null;
      let correctionRadio = container.querySelector('input[type="radio"]');
      container.addEventListener("click", () => {
        if (currentlyCheckedRadio !== correctionRadio) {
          if (correctionRadio) {
            slides[currentSlide].style.display = "none";
            slides[currentSlide + 2].style.display = "flex";
            indicatorBtns[currentSlide].style.backgroundColor = "transparent";
            indicatorBtns[currentSlide].style.color = "white";
            indicatorBtns[currentSlide + 2].style.backgroundColor = "#bfe2fd";
            indicatorBtns[currentSlide + 2].style.color = "black";
          }
        }
        currentSlide = 3;
      });
    });

    console.log("change is clicked");
  });
  /***===== SUMMARY CHANGE LINK ARGORITHM ENDS ABOVE=====***/

  nextBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentSlide < totalSlides - 1) {
      currentSlide++;

      prevBtn.style.visibility = "visible";
      submitBtn.style.display = "none";
      slides[currentSlide].style.display = "flex";
      if (currentSlide > 0) {
        slides[currentSlide - 1].style.display = "none";
      }

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

      slides[currentSlide].style.display = "flex";
      if (currentSlide < slides.length) {
        slides[currentSlide + 1].style.display = "none";
      }

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

/**==== START FORM VALIDATION ====**/
const nameError = document.getElementById("name_error");
const emailError = document.getElementById("email_error");
const phoneError = document.getElementById("phone_error");

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone");

function validation() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phoneNumber = document.querySelector("#phone").value;
  if (name.length == 0) {
    nameError.style.display = "block";
    nameError.innerHTML = `This field is required!`;
    return false;
  }

  if (email == "") {
    emailError.style.display = "block";
    emailError.innerHTML = `This field is required!`;
    return false;
  }
  if (phoneNumber.length == 0) {
    phoneError.style.display = "block";
    phoneError.innerHTML = `This field is required!`;
    return false;
  }
}

nameInput.addEventListener("input", function () {
  if (!/^[A-Za-z]+\s[A-Za-z]+(\s[A-Za-z]+)?$/.test(nameInput.value)) {
    nameError.style.display = "block";
    nameError.style.color = "#ed3548";
    nameInput.style.border = "1px solid #ed3548";
    nameError.innerHTML = `Please complete your names`;
  } else if (nameInput.value == "") {
    nameError.style.display = "block";
    nameError.innerHTML = `This field is required`;
  } else {
    nameError.style.display = "block";
    nameError.innerHTML = `name is valid`;
    nameError.style.color = "green";
    nameInput.style.border = "1px solid green";
  }
});

email.addEventListener("input", function () {
  if (!/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/.test(email.value)) {
    emailError.style.display = "block";
    emailError.style.color = "#ed3548";
    email.style.border = "1px solid #ed3548";
    emailError.innerHTML = `Invalid email!`;
  } else if (email.value == "") {
    emailError.style.display = "block";
    emailError.innerHTML = `This field is required`;
  } else {
    emailError.style.display = "block";
    emailError.innerHTML = `email is valid`;
    emailError.style.color = "green";
    email.style.border = "1px solid green";
  }
});

phoneNumber.addEventListener("input", function () {
  if (!/^[0-9]{10}$/.test(phoneNumber.value)) {
    phoneError.style.display = "block";
    phoneError.style.color = "#ed3548";
    phoneNumber.style.border = "1px solid #ed3548";
    phoneError.innerHTML = `Invalid Phone Number!`;
  } else {
    phoneError.style.display = "block";
    phoneError.innerHTML = `phone number is valid`;
    phoneError.style.color = "green";
    phone.style.border = "1px solid green";
  }
});
/***==== END FORM VALIDATION ====***/
