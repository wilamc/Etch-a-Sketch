const container = document.querySelector('#container');

for (i = 0; i < 17; i++) { // building out several divs using loop
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}
