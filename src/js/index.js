/* eslint-disable */

const board = document.querySelector(".board");
const squares = document.getElementsByClassName(".square");
const slider = document.querySelector(".slider-container input");
const sizeXsize = document.querySelector(".slider-container p");
const rainbowBtn = document.querySelector(".rainbow");
let size;
let mouseDown = false;
const sliderValues = [];

const getGridSize = () => {
  board.innerHTML = "";
  size = slider.value;
  for (let i = 0; i < size * size; i++) {
    createGrid(size);
  }
  sizeXsize.textContent = `${size} x ${size}`;
};

const createGrid = (size) => {
  let square = document.createElement("div");
  square.classList.add("square");
  board.append(square);
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
};

const allowDrawing = () => {
  mouseDown = true;
};
const disallowDrawing = () => {
  mouseDown = false;
};
const sketchingMechanism = (e) => {
  if (
    mouseDown &&
    e.target.className == "square" &&
    rainbowBtn.textContent === "rainbow"
  ) {
    e.target.style.backgroundColor = `var(--clr-theme-500)`;
  } else if (
    mouseDown &&
    e.target.className == "square" &&
    rainbowBtn.textContent === "normal"
  ) {
    rainbowPen(e);
  }
};
const rainbowBtnText = () => {
  if (rainbowBtn.textContent === "rainbow") {
    rainbowBtn.textContent = "normal";
  } else {
    rainbowBtn.textContent = "rainbow";
  }
};
const rainbowPen = (e) => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
};
document.addEventListener("DOMContentLoaded", getGridSize);
slider.addEventListener("input", getGridSize);
board.addEventListener("mousedown", allowDrawing);
board.addEventListener("mouseup", disallowDrawing);
board.addEventListener("mouseleave", disallowDrawing);
board.addEventListener("mouseover", sketchingMechanism);
rainbowBtn.addEventListener("click", rainbowBtnText);
