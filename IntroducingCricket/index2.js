// 1) Scroll Navigation

/*
Implementing the image slide function
- setInterval(): Set the interval to run the function. The unit is in milliseconds.
- querySelector(): Used when to find a child element of the selected element.
- querySelectorAll(): Used when to find all child elements of the selected element.
- animate(): Used when applying animation effect on the selected element.
*/

var aTags = document.querySelectorAll('header a');
// aTags is an array of all the <a> tags in the document.
// header a means the <a> tags in the header.
// We use querySelectorAll because we want to select all the <a> tags in the document.

for(var i = 0; i < aTags.length; i ++) {
    aTags[i].onclick = function(e) { // e is the event object.
        e.preventDefault(); // prevent the default action of the link
        var target = document.querySelector(this.getAttribute("href"));  // get the target of the link.
        // this.getAttribute("href"): get the href attribute of the link.
        // this.: the object that triggered the event.
        // Thus, if we click on the link, the target will be the element with the id of the href attribute.
        // In here, the "href" in <a> tag is the object that triggered the event.
        // Likewise, when the link "크리켓" is clicked, the target will be href="#cricket".


        window.scrollTo({
            'behavior': 'smooth', // 'behavior' is the property of the window object.
            'top': target.offsetTop // the position of the target when the page is scrolled.
        })
    }
}


// 2) Image Slider
var slider = document.querySelector("#slider");
// slider: div id="slider" from index.html

var slides = slider.querySelector(".slides");
// slides: ul class="slides" from index.html

var slide = slides.querySelectorAll(".slide");
// slide: li class="slide" from index.html

var currentSlide = 0;
// currenSlide: A variable to store the current slide we are on.

setInterval(function() { // setInterval() is used to run the function every x milliseconds.
    var from = -(1024 * currentSlide);
    // A variable to store the position of the slide we are moving from.
    // 1024 * currentSlide: The width of the slide.
    // -(1024 * currentSlide), thus the slide is sliding from the right to the left.

    var to = from - 1024;
    // A variable to store the position of the slide we are moving to.
    // to = from - 1024: The slide is sliding from the current slide to the next slide as much as 1024 from the right.

    slides.animate({
        marginLeft: [from + "px", to + "px"]
        // marginLeft: animation that moves from "from" pixel to "to" pixel.
    }, {
        duration: 500, // duration: The duration(speed) of the animation.
        easing: "ease", // easing: animation effect.
        iterations: 1,
        fill: "both" // fill: "both" : The animation will run both forwards and backwards.
    });
    currentSlide++; // Increment the index of the current slide.
    if (currentSlide === (slide.length - 1)) { // If the current slide is the last slide,
        currentSlide = 0; // reset the current slide to the first slide.
    }
}, 3000); // 3000: The interval is set to 3000 milliseconds.


// 3) Tabs
var links = document.querySelectorAll(".tabs-list li a")
// links: tab buttons.
// In "tabs-list" class, in "active" class, there are the <a> tags.

var items = document.querySelectorAll(".tabs-list li")
// items: the list under the links.

for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault(); // Stop the default action of the <a> tag.
        // This is because the <a> tag has a function of moving to the linked page.
        // But we don't want to move to the linked page, but to show/hide the content of the tab.
        // That's why we use preventDefault().
    }
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() { // When the user clicks on the tab buttons,
        var tabId = this.querySelector("a").getAttribute("href");
        // bring the tabId in the <a> tag using querySelector().
        // .getAttribute("href"): The tabId is in the href which is an attribute of the <a> tag.

        console.log(this.classList);

        document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(function(item) {
            item.classList.remove("active");
            console.log(item);
        });
        document.querySelector(tabId).classList.add("active");
        // The class "active" is in the "tabs-list" class.
        // .active{display:block !important;}: The "active" class changes the display of the tab content to block.
        // !important: Remove the default display of the tab content.
        // To remove an object from the screen we can use display:none;, and the display:block; overrides the display:none;.
        // In short, with this code, we can remove the "active" class attribute in the "tabs-list" class which is we choose with this code.


        this.classList.add("active");
    }
}


// 4) Click Image Slider
document.querySelector(".right-arrow").onclick = function () {
    var currentSlide = document.querySelector("#photo .slide.active"); // get the current slide.
    var nextSlide = currentSlide.nextElementSibling; // The next slide is the next sibling of the current slide.
    if (nextSlide === null) { // If there is no next slide,
        nextSlide = currentSlide.parentElement.firstElementChild; // the next slide is the first slide.
    }

    currentSlide.animate({
        opacity: [1, 0]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });

    currentSlide.classList.remove("active"); // Remove the "active" class from the webpage.

    nextSlide.animate({
        opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    nextSlide.classList.add("active");
}

document.querySelector(".left-arrow").onclick = function () {
    var currentSlide = document.querySelector("#photo .slide.active"); // get the current slide.
    var prevSlide = currentSlide.previousElementSibling; // The previous slide is the previous sibling of the current slide.

    if (prevSlide === null) { // If there is no previous slide,
        prevSlide = currentSlide.parentElement.lastElementChild; // the previous slide is the last slide.
    }

    currentSlide.animate({
        opacity: [1, 0]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });

    currentSlide.classList.remove("active"); // Remove the "active" class from the webpage.

    prevSlide.animate({
        opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });

    prevSlide.classList.add("active");
}

