const steps = document.querySelectorAll(".stp");
const circleSteps = document.querySelectorAll(".step");
const circleContent = document.querySelectorAll(".step-content");
const formInputs = document.querySelectorAll(".step-1 form input");
const plans = document.querySelectorAll(".plan-card");
const switcher = document.querySelector(".switch");
const addons = document.querySelectorAll(".box");
const total = document.querySelector(".total b");
const planPrice = document.querySelector(".plan-price");
let time;
let currentStep = 1;
let currentCircle = 0;
let stepContent = 0;

steps.forEach((step) => {
  const nextBtn = step.querySelector(".next-stp");
  const prevBtn = step.querySelector(".prev-stp");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      document.querySelector(`.step-${currentStep}`).style.display = "none";
      currentStep--;
      document.querySelector(`.step-${currentStep}`).style.display = "flex";
      circleSteps[currentCircle].classList.remove("active");
      currentCircle--;
    });
  }
  nextBtn.addEventListener("click", () => {
    document.querySelector(`.step-${currentStep}`).style.display = "none";
    if (currentStep < 5 && validateForm()) {
      currentStep++;
      currentCircle++;
      
    }
    document.querySelector(`.step-${currentStep}`).style.display = "flex";
    circleSteps[currentCircle].classList.add("active");
    circleContent[stepContent].classList.add("active");
    updateAppointmentSummary();
  });
});

function validateForm() {
  let valid = true;
  for (let i = 0; i < formInputs.length; i++) {
    if (!formInputs[i].value) {
      valid = false;
      formInputs[i].classList.add("err");
      findLabel(formInputs[i]).nextElementSibling.style.display = "flex";
    } else {
      valid = true;
      formInputs[i].classList.remove("err");
      findLabel(formInputs[i]).nextElementSibling.style.display = "none";
    }
  }
  return valid;
}
function findLabel(el) {
  const idVal = el.id;
  const labels = document.getElementsByTagName("label");
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor == idVal) return labels[i];
  }
}

const datepicker = document.querySelector(".datepicker");
const dateInput = document.querySelector(".date-input");
const yearInput = datepicker.querySelector(".year-input");
const monthInput = datepicker.querySelector(".month-input");
const cancelBtn = datepicker.querySelector(".cancel");
const applyBtn = datepicker.querySelector(".apply");
const nextBtn = datepicker.querySelector(".next");
const prevBtn = datepicker.querySelector(".prev");
const dates = datepicker.querySelector(".dates");

let selectedDate = new Date();
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();

// show datepicker
dateInput.addEventListener("click", () => {
  datepicker.hidden = false;
});

// hide datepicker
cancelBtn.addEventListener("click", () => {
  datepicker.hidden = true;
});

// handle apply button click event
applyBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const currentTime = new Date();
  const selectedDateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());

  // Check if selected date is in the past or within the next 24 hours
  if (selectedDate < currentTime || selectedDateTime - currentTime < 86400000) {
    alert("Please select a future date at least 24 hours in advance.");
    return;
  }

  // set the selected date to date input
  dateInput.value = selectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // hide datepicker
  datepicker.hidden = true;

  // Update appointment details
  updateAppointmentDetails();

});
document.querySelector(".datepicker").addEventListener("change", () =>{
  updateAppointmentDetails();
})
// handle time selection
document.querySelector(".time-pickable").addEventListener("change", () => {
  // Update appointment details
  updateAppointmentDetails();
});
// Function to update appointment details
function updateAppointmentDetails() {
  const timeValue = document.querySelector(".time-pickable").value;
  const dateValue = formatDate(dateInput.value);

  const formattedTime = formatTime(timeValue);

  const appointmentDetails = document.getElementById("appointment-details");
  appointmentDetails.innerHTML = `
    <p>Appointment Time: ${formattedTime}</p>
    <p>Appointment Date: ${dateValue}</p>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  const nextStepBtn = document.querySelector("next-stp");

  nextStepBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    console.log("Next Step button clicked"); // Add this line
    updateAppointmentSummary();
  });
});


function updateAppointmentSummary() {
  const nameValue = document.querySelector(".step-1 #name").value;
  const emailValue = document.querySelector(".step-1 #email").value;
  const phoneValue = document.querySelector(".step-1 #phone").value;
  const timeValue = document.querySelector(".step-2 .time-pickable").value;
  const dateValue = document.querySelector(".step-2 .date-input").value;
  const appointmentSummary = document.getElementById("Summary");

  appointmentSummary.innerHTML = `
    <p>Name: ${nameValue}</p>
    <p>Email: ${emailValue}</p>
    <p>Phone: ${phoneValue}</p>
    <p>Appointment Time: ${formatTime(timeValue)}</p>
    <p>Appointment Date: ${formatDate(dateValue)}</p>
  `;
}
function confirmAppointment() {
  const nameValue = document.querySelector(".step-1 #name").value;
  const emailValue = document.querySelector(".step-1 #email").value.trim();;
 
  const timeValue = document.querySelector(".step-2 .time-pickable").value;
  const dateValue = document.querySelector(".step-2 .date-input").value

  
  const message = `Hi ${nameValue},\n\nThank you for booking your appointment with All Inclusive Lends.\n\n`;
  var templateParams = {
    to_name: nameValue,
    to_email: emailValue, // Set recipient email dynamically
    from_name: "All Inclusive Lends",
    date: formatDate(dateValue),
    time: formatTime(timeValue),
    message: message
  };
  console.log({
    to_name: nameValue,
    to_email: emailValue,
    from_name: "Othandwayo Nobula",
    message: message
});
  // Send email using EmailJS
  emailjs.send("default_service", "template_13fk6pb", templateParams).then(function(response) {
      console.log('Email sent successfully', response);
  }).catch(function(error) {
      console.error('Error sending email:', error);
  });
}

// Function to format time
function formatTime(timeValue) {
  const [hour, minute] = timeValue.split(":");
  let formattedTime = "";

  if (parseInt(hour) < 12) {
    formattedTime = `${parseInt(hour)}:${minute} am`;
  } else {
    formattedTime = `${parseInt(hour) === 12 ? 12 : parseInt(hour) - 12}:${minute} pm`;
  }

  return formattedTime;
}

// Function to format date
function formatDate(dateString) {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate.replace(/,/g, '');
}


// handle next month nav
nextBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default button behavior
  if (month === 11) year++;
  month = (month + 1) % 12;
  displayDates();
});

// handle prev month nav
prevBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default button behavior
  if (month === 0) year--;
  month = (month - 1 + 12) % 12;
  displayDates();
});

// handle month input change event
monthInput.addEventListener("change", () => {
  month = monthInput.selectedIndex;
  displayDates();
});

// handle year input change event
yearInput.addEventListener("change", () => {
  year = yearInput.value;
  displayDates();
});

const updateYearMonth = () => {
  monthInput.selectedIndex = month;
  yearInput.value = year;
};

const handleDateClick = (e) => {
  e.preventDefault(); // Prevent the default behavior of the button click event

  const button = e.target;

  const selectedDateTime = new Date(year, month, parseInt(button.textContent));

  // Check if selected date is in the past
  if (selectedDateTime < new Date()) {
    alert("You cannot select a date that has already passed.");
    return;
  }

  // remove the 'selected' class from other buttons
  const selected = dates.querySelector(".selected");
  selected && selected.classList.remove("selected");

  // add the 'selected' class to current button
  button.classList.add("selected");

  // set the selected date
  selectedDate = new Date(year, month, parseInt(button.textContent));
};

// render the dates in the calendar interface
const displayDates = () => {
  // update year & month whenever the dates are updated
  updateYearMonth();

  // clear the dates
  dates.innerHTML = "";

  //* display the last week of previous month

  // get the last date of previous month
  const lastOfPrevMonth = new Date(year, month, 0);

  for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
    const text = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i;
    const button = createButton(text, true, -1);
    dates.appendChild(button);
  }

  //* display the current month

  // get the last date of the month
  const lastOfMOnth = new Date(year, month + 1, 0);

  for (let i = 1; i <= lastOfMOnth.getDate(); i++) {
    const button = createButton(i, false);
    button.addEventListener("click", handleDateClick);
    dates.appendChild(button);
  }

  //* display the first week of next month

  const firstOfNextMonth = new Date(year, month + 1, 1);

  for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
    const text = firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;

    const button = createButton(text, true, 1);
    dates.appendChild(button);
  }
};

const createButton = (text, isDisabled = false, type = 0) => {
  const currentDate = new Date();

  // determine the date to compare based on the button type
  let comparisonDate = new Date(year, month + type, text);

  // check if the current button is the date today
  const isToday =
    currentDate.getDate() === text &&
    currentDate.getFullYear() === year &&
    currentDate.getMonth() === month;

  // check if the current button is selected
  const selected = selectedDate.getTime() === comparisonDate.getTime();

  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = isDisabled;
  button.classList.toggle("today", isToday);
  button.classList.toggle("selected", selected);
  return button;
};

displayDates();
// Function to gather details from the step-1 form
function getStep1Details() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  return { name, email, phone };
}

// Function to display appointment summary in step-3 form
function displayAppointmentSummary(summary) {
  const summaryContainer = document.getElementById("Summary");
  const { name, email, phone, time, date } = summary;
  const summaryHTML = `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Appointment Time: ${formattedTime}</p>
      <p>Appointment Date: ${dateValue}</p>
  `;
  summaryContainer.innerHTML = summaryHTML;
}

// Event listener for the Next Step button on the step-1 form
document.addEventListener("DOMContentLoaded", () => {
  const nextStepBtn = document.querySelector(".step-1 .next-stp");

  nextStepBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent form submission
      const step1Details = getStep1Details();
      localStorage.setItem("step1Details", JSON.stringify(step1Details)); // Store details in local storage
  });
});

// Event listener for the Next Step button on the step-3 form
document.addEventListener("DOMContentLoaded", () => {
  const nextStepBtn = document.querySelector(".step-3 .next-stp");

  nextStepBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent form submission
      const step1Details = JSON.parse(localStorage.getItem("step1Details")); // Retrieve stored details
      const time = document.querySelector(".time-pickable").value;
      const date = document.querySelector(".date-input").value;
      const appointmentSummary = { ...step1Details, time, date };
      displayAppointmentSummary(appointmentSummary);
  });
});
