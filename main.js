const calculateButton = document.querySelector("#calculate");

const errors = document.querySelectorAll(".error");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");

const currentDate = new Date();

function calculateAge() {
  const inputDay = document.getElementById("day").value;
  const inputMonth = document.getElementById("month").value;
  const inputYear = document.getElementById("year").value;
  const enteredDate = new Date(`${inputMonth}/${inputDay}/${inputYear}`);
  if (inputDay === "" && inputMonth === "" && inputYear === "") {
    errors.forEach((error) => (error.innerHTML = "This field is required."));
    labels.forEach((label) => (label.style.color = "hsl(0, 100%, 67%)"));
    return;
  } else {
    errors.forEach((error) => (error.innerHTML = ""));
    labels.forEach((label) => (label.style.color = "hsl(0, 1%, 44%)"));
  }

  let years = currentDate.getFullYear() - enteredDate.getFullYear();
  let months = currentDate.getMonth() - enteredDate.getMonth();
  let days = currentDate.getDate() - enteredDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }
  document.querySelector("#yr").innerHTML = `${years} `;
  document.querySelector("#mo").innerHTML = `${months} `;
  document.querySelector("#d").innerHTML = `${days} `;
}

calculateButton.addEventListener("click", calculateAge);

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.id === "day") {
      if (input.value < 1 || input.value > 31) {
        errors[index].innerHTML = "Invalid day";
      } else {
        errors[index].textContent = "";
      }
    } else if (input.id === "month") {
      if (input.value < 1 || input.value > 12) {
        errors[index].textContent = "Invalid month";
      } else {
        errors[index].textContent = "";
      }
    } else if (input.id === "year") {
      if (input.value < 1900 || input.value > 2024) {
        errors[index].textContent = "Invalid year";
      } else {
        errors[index].textContent = "";
      }
    }
  });
});
