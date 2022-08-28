'use-strict';

const DEFAULT_GRID_SIZE = 20;
const PIXEL_CLASS_NAME = 'pixel';
const canvas = document.querySelector('.canvas');
const numberInput = document.querySelector('.numberInput');
const pixelEl = document.querySelector(`.${PIXEL_CLASS_NAME}`);
const colorEl = document.querySelector('.colorInput');

const removeChildrenNodes = () => {
  let child = canvas.lastElementChild;
  while (child) {
    canvas.removeChild(child);
    child = canvas.lastElementChild;
  }
};

const gridDrawer = (size) => {
  if (size > 100 || size <= 0) return;

  canvas.style.setProperty('--canvasSize', size);
  removeChildrenNodes();

  for (let i = 1; i <= size * size; i++) {
    const pixel = document.createElement('div');
    pixel.className = PIXEL_CLASS_NAME;
    canvas.appendChild(pixel);
  }
};

numberInput.addEventListener('keyup', () => {
  gridDrawer(numberInput.value);
});

numberInput.addEventListener('change', () => {
  gridDrawer(numberInput.value);
});

gridDrawer(20);
