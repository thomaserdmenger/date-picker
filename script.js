import {
  addMonths,
  format,
  fromUnixTime,
  getUnixTime,
  subMonths,
} from "date-fns";

// -- GLOBAL --
const datePickerButton = document.querySelector(".date-picker-button");
const datePicker = document.querySelector(".date-picker");
const datePickerHeaderText = document.querySelector(".current-month");
const previousMonthButton = document.querySelector(".prev-month-button");
const nextMonthButton = document.querySelector(".next-month-button");
let currentDate = new Date();

// -- TOGGLE DATE PICKER --
datePickerButton.addEventListener("click", () => {
  datePicker.classList.toggle("show");
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate);
  currentDate = selectedDate;
  setUpDatePicker(selectedDate);
});

// -- SET AND FORMAT DATES ON DATE PICKER BUTTON --
function setDate(date) {
  datePickerButton.textContent = format(date, "MMMM do, yyyy");
  datePickerButton.dataset.selectedDate = getUnixTime(date);
}

setDate(new Date());

// -- SET AND FORMAT DATES ON DATE PICKER --
function setUpDatePicker() {
  datePickerHeaderText.textContent = format(currentDate, "MMMM - yyyy");
}

// -- SET UP ARROW BUTTONS ON DATE PICKER
nextMonthButton.addEventListener("click", () => {
  currentDate = addMonths(currentDate, 1);
  setUpDatePicker();
});

previousMonthButton.addEventListener("click", () => {
  currentDate = subMonths(currentDate, 1);
  setUpDatePicker();
});
