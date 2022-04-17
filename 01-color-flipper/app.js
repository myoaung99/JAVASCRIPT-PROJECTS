const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const bgText = document.querySelector(".bg-text");
const btn = document.querySelector(".click-me");

const getRandomNumber = () => {
  const randomNum = Math.floor(Math.random() * colors.length);
  return randomNum;
};

const changeBg = () => {
  const rand = getRandomNumber();
  const color = colors[rand];

  bgText.innerHTML = color;
  document.body.style.backgroundColor = color;
};

btn.addEventListener("click", changeBg);
