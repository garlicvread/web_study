let blockOne = document.getElementById("red");
let blockTwo = document.getElementById("yellow");
let blockThree = document.getElementById("green");

// When mouse is over, add class red, yellow, green to the following blocks in html.
// <div id="red">red</div>
// <div id="yellow">yellow</div>
// <div id="green">green</div>

blockOne.addEventListener("mouseenter", function () {
    blockOne.classList.add("red");
    blockOne.classList.add('cursor')
})

blockTwo.addEventListener("mouseenter", function () {
    blockTwo.classList.add("yellow");
});

blockThree.addEventListener("mouseenter", function () {
    blockThree.classList.add("green");
});


blockOne.addEventListener("mouseleave", function () {
    blockOne.classList.remove("red");
});

blockTwo.addEventListener("mouseleave", function () {
    blockTwo.classList.remove("yellow");
});

blockThree.addEventListener("mouseleave", function () {
    blockThree.classList.remove("green");
});