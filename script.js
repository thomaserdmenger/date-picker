import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  fromUnixTime,
  getUnixTime,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";

// -- GLOBAL --
const datePickerButton = document.querySelector(".date-picker-button");
const datePicker = document.querySelector(".date-picker");
const datePickerHeaderText = document.querySelector(".current-month");
const previousMonthButton = document.querySelector(".prev-month-button");
const nextMonthButton = document.querySelector(".next-month-button");
const dateGrid = document.querySelector(".date-picker-grid-dates");
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
function setUpDatePicker(selectedDate) {
  datePickerHeaderText.textContent = format(currentDate, "MMMM - yyyy");
  setupDates(selectedDate);
}

// -- SET UP ARROW BUTTONS ON DATE PICKER
nextMonthButton.addEventListener("click", () => {
  currentDate = addMonths(currentDate, 1);
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate);
  setUpDatePicker(selectedDate);
});

previousMonthButton.addEventListener("click", () => {
  currentDate = subMonths(currentDate, 1);
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate);
  setUpDatePicker(selectedDate);
});

function setupDates(selectedDate) {
  const firstWeekStart = startOfWeek(startOfMonth(currentDate));
  const lastWeekEnd = endOfWeek(endOfMonth(currentDate));
  const dates = eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd });
  dateGrid.innerHTML = "";
  dates.forEach((date) => {
    const dateElement = document.createElement("button");
    dateElement.classList.add("date");
    dateElement.textContent = date.getDate();
    if (!isSameMonth(date, currentDate)) {
      dateElement.classList.add("date-picker-other-month-date");
    }
    if (isSameDay(date, selectedDate)) {
      dateElement.classList.add("selected");
    }

    dateElement.addEventListener("click", () => {
      setDate(date);
      datePicker.classList.remove("show");
    });

    dateGrid.appendChild(dateElement);
  });
}
