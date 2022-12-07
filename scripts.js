const defaultSize = 16;
const board = document.querySelector('.board');
const resetBtn = document.querySelector('.reset');
const eraserBtn = document.querySelector('.eraser');
const penBtn = document.querySelector('.pen')
let currentColor = 'black';

resetBtn.onclick = () => resetBoard()
eraserBtn.onclick = () => changeColor('powderblue')
penBtn.onclick = () => changeColor('black')

createBoard(defaultSize);

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  reloadBoard();

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', drawPen)
    square.classList.add('square')
    square.style.backgroundColor = 'powderblue';
    board.insertAdjacentElement("beforeend", square);
  }
}

function reloadBoard() {
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.remove());
}

function changeSize(size) {
  if (size >= 2 && size <= 50) {
    createBoard(size);
  } else {
    alert("Please enter a number from 2-50");
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
