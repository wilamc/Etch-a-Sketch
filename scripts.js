const defaultSize = 16
const board = document.querySelector('.board')
const resetBtn = document.querySelector('.reset');

createBoard(defaultSize);

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  for (let i = 0; i < 256; i++) {
    let squares = document.createElement('div');
    squares.classList.add('square')
    squares.style.backgroundColor = 'powderblue';
    board.insertAdjacentElement("beforeend", squares);
  }
}
