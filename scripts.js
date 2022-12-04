const defaultSize = 16
const board = document.querySelector('.board')
const resetBtn = document.querySelector('.reset');
const eraserBtn = document.querySelector('.eraser')

createBoard(defaultSize);

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  reloadBoard();

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', penBoard)
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

function penBoard() {
  this.style.backgroundColor = 'black';
}

document.addEventListener('click', (e) => {
  const reset = e.target.classList.contains('reset');
  if (reset == true) {
    location.reload();
  }
})

document.addEventListener('click', (e) => {
  const eraser = e.target.classList.contains('eraser');
  
  if (eraser == true) {
    const square = document.querySelectorAll('.square')
    square.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'powderblue';
    })
  }
})