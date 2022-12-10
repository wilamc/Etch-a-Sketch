const defaultSize = 16;
const board = document.querySelector('.board');
const resetBtn = document.querySelector('.reset');
const eraserBtn = document.querySelector('.eraser');
const penBtn = document.querySelector('.pen');
const currentSize = document.querySelector('#size');
let currentColor = 'black';

resetBtn.onclick = () => resetBoard()
eraserBtn.onclick = () => changeColor('white')
penBtn.onclick = () => changeColor('black')

createBoard(defaultSize);

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  removeBoard();

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', drawPen)
    square.classList.add('square')
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement("beforeend", square);
    currentSize.innerText = 'Current Size: ' + size + 'x' + size
  }
}

function removeBoard() {
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.remove());
}

function changeSize(size) {
  if (size >= 2 && size <= 64) {
    createBoard(size);
  } else {
    alert("Please enter a number from 2-64");
  }
}

function drawPen() {
  this.style.backgroundColor = currentColor;

}

function changeColor(color) {
  currentColor = color
  return currentColor
}

function resetBoard() {
  location.reload();
}

currentSize.innerText = 'Current Size: ' + (defaultSize) + 'x' + (defaultSize)