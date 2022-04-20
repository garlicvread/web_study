// When the <input> tag, the button is clicked, change the background color of the <body> tag as black.
// If the <input> tag, the button is clicked once again, change the background color of the <body> tag as white.

let count = 0;

// Flow Control.
function changeColor() {
    if (count === 0) {
        document.querySelector('body').style.backgroundColor = 'black';

        // Change the font color of the <h1> tag as white.
        document.querySelector('h1 a').style.color = 'white';

        // Change the font color of the all <div ol li a> tags as white.
        let divs = document.querySelectorAll('div ol li a');
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.color = 'white';
        }

        // Change the font color of the <body> tag as white.
        document.querySelector('body').style.color = 'white';

        // Change the value of the <input> tag as 'Day'.
        document.querySelector('input').value = 'Day';

        count = 1;
    } else {
        document.querySelector('body').style.backgroundColor = 'white';

        // Change the font color of the <h1> tag as blue.
        document.querySelector('h1 a').style.color = 'blue';

        // Change the font color of the all <div ol li a> tags as black.
        let divs = document.querySelectorAll('div ol li a');
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.color = 'black';
        }

        // Change the font color of the <body> tag as original.
        document.querySelector('body').style.color = 'black';

        // Change the value of the <input> tag as 'Night'.
        document.querySelector('input').value = 'Night';

        count = 0;
    }
}
