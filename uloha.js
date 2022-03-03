let x = 0;
let y = 0;

function move(direction) {
	if (direction === 'U') {
  	y = y + 1;
  } else if (direction === 'D') {
  	y = y - 1;
  } else if (direction === 'R') {
  	x = x + 1;
  } else if (direction === 'L') {
  	x = x - 1;
  }
  
  displayPosition();
}

function displayPosition() {
  document.getElementById('position').innerText = x + ',' + y;
}

displayPosition(x, y);

