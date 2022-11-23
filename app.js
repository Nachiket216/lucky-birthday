var dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const check = document.querySelector("#check");
const output = document.querySelector("#output");

check.addEventListener("click", () => {
  var dob = dateOfBirth.value.replaceAll("-", "");
  var sum = calculate(dob);

  if (sum % luckyNumber.value === 0) {
    output.innerText = "Congratulations🎉! Your birthdate is lucky for you 😊";
  } else {
    output.innerText = "Sorry to say but, Your birthday is not lucky😔";
  }
});

function calculate(dob) {
  var sum = 0;
  for (var i = 0; i < dob.length; i++) {
    sum += Number(dob.charAt(i));
  }
  return sum;
}
