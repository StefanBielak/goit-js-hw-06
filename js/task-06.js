const validationInput = document.getElementById("validation-input");
const expectedLength = parseInt(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", function () {
  const inputValue = validationInput.value.trim();
  const isValid = inputValue.length === expectedLength;

  if (isValid) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
