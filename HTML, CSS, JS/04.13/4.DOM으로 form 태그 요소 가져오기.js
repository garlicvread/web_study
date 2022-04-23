/*
When <button> in <form> tag is clicked, the text in  <input> tag is displayed.

Approach the id elements: form, input, answer
Using EventListener, run the code when the button is clicked.
Store the text from input element to answer element then print it out.
When the button "제출" is clicked, clear the text input box.
*/

let form = document.getElementById("form");
let input = document.getElementById("input");
let answer = document.getElementById("answer");

form.addEventListener('submit', function(e){
    e.preventDefault();

    let val = input.value;

    if (val) {
        answer.textContent = val;
        form.reset();
    }
});