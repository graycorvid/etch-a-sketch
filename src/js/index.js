/* eslint-disable */

const board = document.querySelector(".board");
const slider = document.querySelector(".slider-container input");
const squares = document.getElementsByClassName(".square");
const sizeXsizeTXT = document.querySelector(".slider-container p");
const rainbowBtn = document.querySelector(".normal");
const gridBtn = document.querySelector(".grid");
const eraseBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const gridSwitch = document.querySelector(".switch");
const customPenColor = document.querySelector("input.pen-color");
const customBgcColor = document.querySelector("input.bgc-color");
let size;
let mouseDown = false;

const getGridSize = () => {
  board.innerHTML = "";
  size = slider.value;
  for (let i = 0; i < size * size; i++) {
    createGrid(size);
  }
  sizeXsizeTXT.textContent = `${size} x ${size}`;
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
    (e.target.className == "square" ||
      e.target.className == "square square-border") &&
    eraseBtn.textContent === "eraser on"
  ) {
    erasingPen(e);
  } else {
    if (
      mouseDown &&
      (e.target.className == "square" ||
        e.target.className == "square square-border") &&
      rainbowBtn.textContent === "normal"
    ) {
      customPen(e);
    } else if (
      mouseDown &&
      (e.target.className == "square" ||
        e.target.className == "square square-border") &&
      rainbowBtn.textContent === "rainbow"
    ) {
      rainbowPen(e);
    }
  }
};
const toggleErasing = () => {
  if (eraseBtn.textContent === "eraser") {
    eraseBtn.textContent = "eraser on";
    eraseBtn.classList.add("eraser-on");
  } else {
    eraseBtn.textContent = "eraser";
    eraseBtn.classList.remove("eraser-on");
  }
};
const customBackground = () => {
  let pickedBgcColor = customBgcColor.value;
  board.style.backgroundColor = pickedBgcColor;
};
const rainbowBtnText = () => {
  if (rainbowBtn.textContent === "normal") {
    rainbowBtn.textContent = "rainbow";
    rainbowBtn.classList.add("rainbow-bgc");
  } else {
    rainbowBtn.textContent = "normal";
    rainbowBtn.classList.remove("rainbow-bgc");
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
const erasingPen = (e) => {
  e.target.style.backgroundColor = "";
};
//
//TURNS OFF RAINBOW EFFECT IF NEW COLOR IS SELECTED IN customPen;
const changePens = () => {
  rainbowBtn.textContent = "normal";
  rainbowBtn.classList.remove("rainbow-bgc");
};
const toggleGridBtn = () => {
  if (gridSwitch.textContent == "off") {
    gridSwitch.textContent = "on";
  } else if (gridSwitch.textContent == "on") {
    gridSwitch.textContent = "off";
  }
  board.classList.toggle("square-border");
};
const clearBoard = () => {
  Array.from(board.getElementsByTagName("div")).forEach((square) => {
    square.style.backgroundColor = "";
  });
};

document.addEventListener("DOMContentLoaded", getGridSize);
slider.addEventListener("input", getGridSize);
board.addEventListener("mousedown", allowDrawing);
board.addEventListener("mouseup", disallowDrawing);
board.addEventListener("mouseleave", disallowDrawing);
board.addEventListener("mouseover", sketchingMechanism);
customBgcColor.addEventListener("input", customBackground);
customPenColor.addEventListener("click", changePens);
rainbowBtn.addEventListener("click", rainbowBtnText);
gridBtn.addEventListener("click", toggleGridBtn);
eraseBtn.addEventListener("click", toggleErasing);
clearBtn.addEventListener("click", clearBoard);
