
// Select the button element once
const button = document.getElementById('button');

// Define the click event handler function
function changeBoxColor() {
  // Randomly generate a hex color code
  const num = "#" + ((1 << 24) * Math.random() | 0).toString(16);

  // Select the box element once
  const box = document.getElementById('box');

  // Change the box background color
  box.style.background = num;
}

// Add the click event listener to the button
button.addEventListener('click', changeBoxColor);

