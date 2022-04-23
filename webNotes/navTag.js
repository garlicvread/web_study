// // nav function variations 1.
// let nav = function() { // The same expression with function() {}.
//     let navTag = '';
//
//     for (let i = 0; i < topics.length; i++) {
//         navTag += `<li><a href="/read/${topics[i]}.id">${topics[i].title}</a></li>`;
//     }
//
//     document.querySelector('nav ol').innerHTML = navTag;
//     console.log(navTag);
// };


// nav function variations 2. Using arrow function.
let nav = () => {
    let navTag = '';

    for (let i = 0; i < topics.length; i++) {
        navTagl += `<li><a href="/read/${topics[i].id}">${topics[i].title}</a></li>`;
    }

    document.querySelector('nav ol').innerHTML = navTag;
    console.log(navTag);
}


// nav function variations 3: Using map() function.
// map() function must receive a callback function as the first argument.
// The callback function returns the current argument to process in the array to the first argument of map().