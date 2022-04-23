// target: The button that calls the function attend(). <button class="attend">출석</button>.
// inputName: The <input> tag that receives the inputted text. <input type="text" name="name" placeholder="이름을 입력하세요.">.
// attendee: The area that displays the attendee's name. <p style="text-align: center" id="attendee"></p>.

const target = document.querySelector('.attend');
const inputName = document.querySelector('input[name="name"]');
const attendee = document.querySelector('#attendee');

function attend() {
    // How to get the value of the input:
    // 1. attendee.textContent : Doesn't use a tag.
    // 2. attendee.innerHTML : Use a tag.
    // 3. attendee.innerText : Doesn't use a tag.

    // Stack the value of the input into the attendee.
    // Initiate the list of attendees.
    // attendee.innerHTML += `${inputName.value}<br>`; // variation 1
    attendee.innerHTML += `<p>${inputName.value}</p>`; // variation 2
}

target.addEventListener("click", attend); // When the target is clicked, call the attend() function.
