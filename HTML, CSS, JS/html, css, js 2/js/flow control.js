function color_change() {
    // <input type="button" onclick="color_change()" value="Day"> ==> change the color of the entire page white -> black
    if (document.querySelector("body").style.backgroundColor == "white") {
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        document.querySelector("body").style.backgroundColor = "white";
    }
}