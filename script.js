// -- GLOBAL --
const datePickerButton = document.querySelector(".date-picker-button");
const datePicker = document.querySelector(".date-picker");

// -- TOGGLE DATE PICKER
datePickerButton.addEventListener("click", () => {
  datePicker.classList.toggle("show");
});
