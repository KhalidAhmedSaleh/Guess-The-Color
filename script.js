"use strict";

//* Game system
const options = document.querySelectorAll(".options");
const guessColor = document.querySelector(".color");
const gameSys = document.querySelector(".game-system");

let tries = 4;
const playAgain = document.querySelector(".play-again");
let newColor = Math.trunc(Math.random() * 6);

const colorsArr = [
  " rgb(100, 100, 100)",
  "rgb(256, 256, 256)",
  "rgb(1, 11, 1)",
  "rgb(28, 2, 220)",
  "rgb(0, 128, 0)",
  "rgb(28, 120, 222)",
];
guessColor.textContent = colorsArr[newColor];

//* Texts
const guessText = document.querySelector(".Guess");
const correctText = document.querySelector(".correct");
const tryAgainText = document.querySelector(".try-again");

const triesText = document.querySelector(".tries");
const triesNum = document.querySelector(".tries-num");
const lostText = document.querySelector(".lost");

// * Functions
const restart = function () {
  let newColor = Math.trunc(Math.random() * 6);
  gameSys.style.backgroundColor = "#ffffff";
  tries = 4;
  guessColor.textContent = colorsArr[newColor];
  triesNum.textContent = "3";
  correctText.classList.add("hidden");
  lostText.classList.add("hidden");
  guessText.classList.remove("hidden");
};

const changeBackgroundColor = function (color) {
  gameSys.style.backgroundColor = color;
};

const removeHiddenClass = function (element) {
  element.classList.remove("hidden");
};

const addHiddenClass = function (element) {
  element.classList.add("hidden");
};

const setTextContent = function (element, value) {
  element.textContent = value;
};

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    if (tries > 1) {
      if (
        window
          .getComputedStyle(options[i])
          .getPropertyValue("background-color") === guessColor.textContent // Check if the background of anelemnt is equal to the color to guess
      ) {
        addHiddenClass(guessText);
        removeHiddenClass(correctText);
        changeBackgroundColor("#47a447");
      } else {
        tries--;
        setTextContent(triesNum, tries);
      }
    } else {
      setTextContent(triesNum, "0");
      removeHiddenClass(lostText);
      addHiddenClass(guessText);
      changeBackgroundColor("#ff3333");
    }
  });
}

playAgain.addEventListener("click", function () {
  restart();
});
