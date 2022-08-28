'use-strict';

const DEFAULT_GRID_SIZE = 50;
const DEFAULT_COLOR_EL_VALUR = '#001122';
const PIXEL_CLASS_NAME = 'pixel';
const COLOR_CODE = '0123456789ABCDEF';
const canvas = document.querySelector('.canvas');
const numberInput = document.querySelector('.numberInput');
const colorEl = document.querySelector('.colorInput');
let isDrawing = false;

const generateRandomColor = () => {
  let code = '#';
  for (let count = 0; count < 6; count++) {
    code = `${code}${COLOR_CODE[Math.floor(Math.random() * 16)]}`;
  }
  return code;
};

const gridDrawer = (size) => {
  if (size > 100) {
    numberInput.value = 100;
    return;
  }
  if (size < 1) {
    numberInput = 1;
    return;
  }
  canvas.innerHTML = '';
  canvas.style.setProperty('--canvasSize', size);

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

    pixel.addEventListener('touchmove', () => {
      if (!isDrawing) return;
      pixel.style.backgroundColor = colorEl.value;
    });
  }
};

const resetCanvas = () => {
  canvas.innerHTML = '';
  numberInput.value = DEFAULT_GRID_SIZE;
  colorEl.value = DEFAULT_COLOR_EL_VALUR;
  gridDrawer(DEFAULT_GRID_SIZE);
};

numberInput.addEventListener('keyup', () => {
  gridDrawer(numberInput.value);
});

numberInput.addEventListener('change', () => {
  gridDrawer(numberInput.value);
});

const generateArt = () => {
  canvas.childNodes.forEach((node, index) => {
    setTimeout(() => {
      node.style.backgroundColor = generateRandomColor();
    }, 15 * (index + 1));
  });
};

window.addEventListener('mousedown', () => (isDrawing = true));
window.addEventListener('mouseup', () => (isDrawing = false));

window.addEventListener('touchstart', () => (isDrawing = true));
window.addEventListener('touchend', () => (isDrawing = false));

gridDrawer(DEFAULT_GRID_SIZE);
