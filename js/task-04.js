let counterValue = 0;

const valueElement = document.getElementById("value");
const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");

function updateCounterValue() {
  valueElement.textContent = counterValue;
}

function increment() {
  counterValue++;
  updateCounterValue();
}

function decrement() {
  counterValue--;
  updateCounterValue();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
