const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const bgText = document.querySelector(".color");
const btn = document.querySelector(".btn-hero");

const getRandomNumber = () => {
  const randomNum = Math.floor(Math.random() * hex.length);
  return randomNum;
};

const getHexCode = () => {
  let hexColor = "#";
  for (let i = 0; i <= 5; i++) {
    const randNum = getRandomNumber();
    hexColor += hex[randNum];
  }
  return hexColor;
};

const changeBg = () => {
  const color = getHexCode();

  bgText.textContent = color;
  document.body.style.backgroundColor = color;
};

btn.addEventListener("click", changeBg);
