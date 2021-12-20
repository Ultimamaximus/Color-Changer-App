
//Selects the button Id
  let button = document.getElementById('button');
// Adds the click listener to the button
  button.addEventListener('click', function(){
//Randomly generates a hex color code
    let num = "#" + ((1<<24)*Math.random() | 0).toString(16)
//Selects the box Id
    let box = document.getElementById('box');
//Changes box background color
    box.style.background = `${num}`
})
