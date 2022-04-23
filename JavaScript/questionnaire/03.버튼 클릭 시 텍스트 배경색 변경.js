// Change <h1> background color when click button.
// When id = btnRabbit is clicked: to pink
// When id = btnCat is clicked: to purple
// When id = btnBird is clicked: to orage

// Get the <h1> element
let h1 = document.querySelector("h1");

// Get the <button> element
let btnRabbit = document.querySelector("#btnRabbit");
let btnCat = document.querySelector("#btnCat");
let btnBird = document.querySelector("#btnBird");

// When id = btnRabbit is clicked: to pink
btnRabbit.addEventListener("click", function() {
  h1.style.backgroundColor = "pink";
});

// When id = btnCat is clicked: to purple
btnCat.addEventListener("click", function() {
  h1.style.backgroundColor = "purple";
});

// When id = btnBird is clicked: to orage
btnBird.addEventListener("click", function() {
  h1.style.backgroundColor = "orange";
});