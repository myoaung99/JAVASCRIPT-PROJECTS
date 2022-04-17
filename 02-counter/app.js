const value = document.querySelector("#value");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");

let count = 0;

const checkCount = () => {
  if (count > 0) {
    value.setAttribute("class", "positive");
  } else if (count < 0) {
    value.setAttribute("class", "negative");
  } else {
    value.removeAttribute("class");
  }
};

resetBtn.addEventListener("click", () => {
  count = 0;
  value.textContent = count;
  checkCount();
});

increaseBtn.addEventListener("click", () => {
  count++;
  value.textContent = count;
  checkCount();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  value.textContent = count;
  checkCount();
});
