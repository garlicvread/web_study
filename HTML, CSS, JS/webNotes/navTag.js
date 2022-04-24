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
let nav = () =>  {
    let navTag = ''; // A tag to append li tags dynamically.

    for (let i = 0; i < topics.length; i++) {
        navTag = navTag + `
            <li>
                <a href="/read/${topics[i].id}" id="${topics[i].id}" onclick="
                    event.preventDefault();
                    console.log(event.target.id);
                    
                    for(let i = 0; i < topics.length; i++){
                        if(Number(topics[i].id) === Number(event.target.id)){
                            // event.target.id is the id of the clicked link.
                            
                            document.querySelector('article').innerHTML = '<h2>${topics[i].title}</h2>${topics[i].body}';
                            // Replacing the article element with the clicked link's article.
                            
                            break;
                        }
                    }
                ">
                    ${topics[i].title}
                </a>
            </li>`;
    }

    document.querySelector('nav ol').innerHTML = navTag;
    console.log(navTag);
}

nav();

// nav function variations 3: Using map() function.
// map() function must receive a callback function as the first argument.
// The  callback function returns the current argument to process in the array to the first argument of map().