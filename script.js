import { format, fromUnixTime, getUnixTime } from "date-fns";

// -- GLOBAL --
const datePickerButton = document.querySelector(".date-picker-button");
const datePicker = document.querySelector(".date-picker");
const datePickerHeaderText = document.querySelector(".current-month");

// -- TOGGLE DATE PICKER --
datePickerButton.addEventListener("click", () => {
  datePicker.classList.toggle("show");
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate);
  setUpDatePicker(selectedDate);
});

// -- SET AND FORMAT DATES ON DATE PICKER BUTTON --
function setDate(date) {
  datePickerButton.textContent = format(date, "MMMM do, yyyy");
  datePickerButton.dataset.selectedDate = getUnixTime(date);
}

setDate(new Date());

// -- SET AND FORMAT DATES ON DATE PICKER --
function setUpDatePicker(selectedDate) {
  datePickerHeaderText.textContent = format(selectedDate, "MMMM - yyyy");
}
