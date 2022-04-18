// When a button is clicked:
// 1. Change the width of the box to 800px, and the height to 600px.
// 2. Starting from the left side of the box, move the box as 300px to the right.

// The id of the box object is #move

// The style of #move:
// #move {
//     position:absolute;
//     width: 300px;
//     height: 300px;
//     background-color: red;
//     left: 600px;
// }

function move() {
    // Access the box object
    var box = document.getElementById("move");

    // When clicked, change the width and height of the box
    // --> w: 800, h: 600
    box.style.width = "800px";
    box.style.height = "600px";

    // Move the box to the right by 300px
    // Thus, the position is changed from 600px from the left to 300px from the left.
    box.style.left = "300px";
}

var btn = document.getElementById("btn");

btn.addEventListener("click", move);