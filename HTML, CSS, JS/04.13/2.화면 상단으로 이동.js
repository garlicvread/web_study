// // Version 1
// function scrollUp(e) {
//     // Initiate the target element to apply the scroll function
//     const target = document.getElementById(e);
//
//     // const target2 = document.querySelector('.scroll-down');
//     // const target3 = document.querySelectorAll('scroll-down')[0]; // get the first element of 'scroll-down'.
//
//     // Scroll the target element to the top
//     // Form: button.eventlistner
//     target.addEventListener('click', function() {
//         window.scrollTo({top:0, left:0, behavior:'smooth'})
//     });
// }

// Version 2
function scrollUp(e) {
    const target = document.querySelector(`#${e}`);

    target.addEventListener('click', function() {
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    });
}

scrollUp("scroll-btn");