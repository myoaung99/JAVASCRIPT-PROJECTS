const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const bgText = document.querySelector(".color");
const btn = document.querySelector(".btn-hero");

const getRandomNumber = () => {
  const randomNum = Math.floor(Math.random() * colors.length);
  return randomNum;
};

const changeBg = () => {
  const rand = getRandomNumber();
  const color = colors[rand];

  bgText.textContent = color;
  document.body.style.backgroundColor = color;
};

btn.addEventListener("click", changeBg);
