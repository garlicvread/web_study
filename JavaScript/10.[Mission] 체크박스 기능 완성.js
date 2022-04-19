var divTag1 = document.getElementById("");
var divTag2 = document.getElementById("");
var divTag3 = document.getElementById("");



function handleOnClick() {
    this.classList.toggle("on");  // A class
    // this. means the current element that is clicked.
    // this.classList means the classList of the current element.
    // toggle means toggling the class on or off.

    // When

    // The id of the yellow checkbox is .check_icon.
    // the display attribute of the yellow checkbox is set to "none" now.

    // When the box is clicked, using toggle(), add the class "on",
    // and make the yellow checkbox appear.

    // ol, ul: list-style: none;
    // The boxes now displayed


}

divTag1.addEventListener("click", handleOnClick);