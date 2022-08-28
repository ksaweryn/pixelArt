'use-strict';

const DEFAULT_GRID_SIZE = 20;
const PIXEL_CLASS_NAME = 'pixel';
const canvas = document.querySelector('.canvas');
const numberInput = document.querySelector('.numberInput');
const colorEl = document.querySelector('.colorInput');
let isDrawing = false;

const gridDrawer = (size) => {
  if (size > 100) {
    numberInput.value = 100;
    return;
  }
  if (size < 1) {
    numberInput = 1;
    return;
  }
  canvas.style.setProperty('--canvasSize', size);
  canvas.innerHTML = '';

  for (let i = 1; i <= size * size; i++) {
    const pixel = document.createElement('div');
    pixel.className = PIXEL_CLASS_NAME;
    canvas.appendChild(pixel);

    pixel.addEventListener('mousedown', () => {
      pixel.style.backgroundColor = colorEl.value;
    });

    pixel.addEventListener('mouseover', () => {
      if (!isDrawing) return;
      pixel.style.backgroundColor = colorEl.value;
    });
  }
};

const resetCanvas = () => {
  canvas.innerHTML = '';
  numberInput.value = DEFAULT_GRID_SIZE;
  colorEl.value = '#001122';
  gridDrawer(DEFAULT_GRID_SIZE);
};

numberInput.addEventListener('keyup', () => {
  gridDrawer(numberInput.value);
});

numberInput.addEventListener('change', () => {
  gridDrawer(numberInput.value);
});

window.addEventListener('mousedown', () => (isDrawing = true));
window.addEventListener('mouseup', () => (isDrawing = false));

gridDrawer(DEFAULT_GRID_SIZE);
