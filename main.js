'use-strict';

const DEFAULT_GRID_SIZE = 20;
const PIXEL_CLASS_NAME = 'pixel';
const canvas = document.querySelector('.canvas');
const numberInput = document.querySelector('.numberInput');
const colorEl = document.querySelector('.colorInput');

const gridDrawer = (size) => {
  if (size > 100 || size <= 0) return;
  canvas.style.setProperty('--canvasSize', size);
  canvas.innerHTML = '';

  for (let i = 1; i <= size * size; i++) {
    const pixel = document.createElement('div');
    pixel.className = PIXEL_CLASS_NAME;
    canvas.appendChild(pixel);
  }
};

const resetCanvas = () => {
  canvas.innerHTML = '';
  numberInput.value = DEFAULT_GRID_SIZE;
  gridDrawer(DEFAULT_GRID_SIZE);
};

numberInput.addEventListener('keyup', () => {
  gridDrawer(numberInput.value);
});

numberInput.addEventListener('change', () => {
  gridDrawer(numberInput.value);
});

gridDrawer(DEFAULT_GRID_SIZE);
