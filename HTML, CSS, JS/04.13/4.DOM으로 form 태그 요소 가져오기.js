/*
When <button> in <form> tag is clicked, the text in  <input> tag is displayed.
*/

// Approach the id elements: form, input, answer.
let form = document.getElementById("form");
let input = document.getElementById("input");
let answer = document.getElementById("answer");

// Using EventListener, run the code when the button is clicked.
form.addEventListener('submit', function(e){
    e.preventDefault(); // Prevent the default action of the form, which is to refresh the page after submitting.

    // Store the text from input element to answer element then print it out.
    let value = input.value;

    if (value) {
        answer.textContent = value;

        // When the button "제출" is clicked, clear the text input box.
        form.reset();
    }
});
