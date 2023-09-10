/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/* Store the element in el */
let el = document.getElementById('tilt')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth
const multiplier = 5

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY

  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = multiplier * ((xVal - width / 2) / width)

  /* Calculate the rotation along the X-axis */
  const xRotation = -multiplier * ((yVal - height / 2) / height)

  /* Generate string for CSS transform property */
  const string = 'perspective(500px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function () {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function () {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function () {
  el.style.transform = 'perspective(500px) scale(1.05) rotateX(0) rotateY(0)'
})

//Hide and show oracle text
function toggleVisibility(y) {
  if (y === undefined) {
    y = 1;
  }
  var x = document.getElementById(y);
  if (x.classList.contains("d-block")) {
    x.classList.remove("d-block");
    x.classList.add("d-none");
    toggleVisibilityIcon();
  } else if (x.classList.contains("d-none")) {
    x.classList.remove("d-none");
    x.classList.add("d-block");
    toggleVisibilityIcon();

  }
}

// Change icon when oracle text is hidden or shown 
function toggleVisibilityIcon() {
  var oracleIcon = document.getElementById("oracleIcon");
  if (oracleIcon.className === 'bi bi-eye-fill') {
    oracleIcon.className = 'bi bi-eye-slash-fill';
  } else {
    oracleIcon.className = 'bi bi-eye-fill';
  }
}