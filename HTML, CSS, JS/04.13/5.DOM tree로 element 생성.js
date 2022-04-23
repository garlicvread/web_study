// Using document.createElement() and appendChild() create a new HTML element then add them to the DOM tree.

// Within the function myFunction, using document.createElement() and appendChild(),
// add the text when the button "문장 추가" is clicked.
// The newly created element should be a <p> element.
// Apply the appendChild() function to the element which has id as "myDiv".

// // Solution 1
// // Create Element.
// function myFunction() {
//     let textElement = document.createElement('p');
//     textElement.textContent = '새로운 문장';
//
// // <button onClick="myFunction()">Add a Sentence</button>
// // Append child.
//     document.getElementById('myDiv').appendChild(textElement);
// }


// Solution 2
const myFunction = () => {
    let textElement = document.createElement('p');
    textElement.textContent = '새로운 문장';
    document.getElementById('myDiv').appendChild(textElement);
};
