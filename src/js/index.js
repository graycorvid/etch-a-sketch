/* eslint-disable */

const board = document.querySelector(".board");
const slider = document.querySelector(".slider-container input");
const sizeXsize = document.querySelector(".slider-container p");
const rainbowBtn = document.querySelector(".rainbow");
// const gridBtn = document.querySelector(".grid");
const customPenColor = document.querySelector("input.pen-color");
const customBgcColor = document.querySelector("input.bgc-color");
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
    customPen(e);
  } else if (
    mouseDown &&
    e.target.className == "square" &&
    rainbowBtn.textContent === "normal"
  ) {
    rainbowPen(e);
  }
};
const backgroundMechanism = () => {
  let pickedBgcColor = customBgcColor.value;
  board.style.backgroundColor = pickedBgcColor;
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
const customPen = (e) => {
  let pickedPenColor = customPenColor.value;
  e.target.style.backgroundColor = `${pickedPenColor}`;
};

document.addEventListener("DOMContentLoaded", getGridSize);
slider.addEventListener("input", getGridSize);
board.addEventListener("mousedown", allowDrawing);
board.addEventListener("mouseup", disallowDrawing);
board.addEventListener("mouseleave", disallowDrawing);
board.addEventListener("mouseover", sketchingMechanism);
customBgcColor.addEventListener("input", backgroundMechanism);
rainbowBtn.addEventListener("click", rainbowBtnText);
