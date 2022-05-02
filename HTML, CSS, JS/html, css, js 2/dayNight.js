// When the <input> tag, the button is clicked, change the background color of the <body> tag as black.
// If the <input> tag, the button is clicked once again, change the background color of the <body> tag as white.


// // Flow Control.
// // function changeColor() alternative 1.
// let count = 0;
//
// function changeColor() {
//     if (count === 0) {
//         document.querySelector('body').style.backgroundColor = 'black';
//
//         // // Change the font color of the <h1> tag as white.
//         // document.querySelector('h1 a').style.color = 'white';
//
//
//         // Change the font color of the all <div ol li a> tags as white.
//         // let divs = document.querySelectorAll('div ol li a');
//         // for (let i = 0; i < divs.length; i++) {
//         //     divs[i].style.color = 'white';
//         // }
//
//         document.querySelectorAll('a').forEach(function(a) {
//             a.style.color = 'Yellow';
//         });
//
//         // Change the font color of the <body> tag as white.
//         document.querySelector('body').style.color = 'white';
//
//         // Change the value of the <input> tag as 'Day'.
//         document.querySelector('input').value = 'Day';
//
//         count = 1;
//     } else {
//         document.querySelector('body').style.backgroundColor = 'white';
//
//         // // Change the font color of the <h1> tag as blue.
//         // document.querySelector('h1 a').style.color = 'blue';
//
//         // Change the font color of the all <div ol li a> tags as black.
//         let divs = document.querySelectorAll('div ol li a');
//         for (let i = 0; i < divs.length; i++) {
//             divs[i].style.color = 'black';
//         }
//
//         document.querySelectorAll('a').forEach(function(a) {
//             a.style.color = 'blue';
//         });
//
//         // Change the font color of the <body> tag as original.
//         document.querySelector('body').style.color = 'black';
//
//         // Change the value of the <input> tag as 'Night'.
//         document.querySelector('input').value = 'Night';
//
//         count = 0;
//     }
// }

// Function changeColor() alternative 2 ==> function separated.
function night() {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';

    // $('body').css('background-color', 'black'); // jQuery alternatives 1.
    // $('body').css('color', 'white');

    // $('body').css('background-color', 'black').css('color', 'white') // jQuery alternatives 2.

    let aList = document.querySelectorAll('a');

    for (let i = 0; i < aList.length; i++) {
        aList[i].style.color = 'Yellow';
    }

    // $('a').css('color', 'Yellow'); // jQuery alternative for above four lines.

    document.querySelector('#colorBtn').value = 'Day';
}

function day() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';

    let aList = document.querySelectorAll('a');
    for (let i = 0; i < aList.length; i++) {
        aList[i].style.color = 'blue';
    }
    document.querySelector('#colorBtn').value = 'Night';
}


// Combine the two functions night() and day() into one function.
export function dayNight() {
    if (this.value === 'Night') { // this.value means that the value of the <input> tag.
        night();
        this.value = 'Day';
    } else {
        day();
        this.value = 'Night';
    }
}