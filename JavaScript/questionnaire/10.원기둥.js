// Input the height and the radius of the pillar(or, cylinder).
// With the input, when clicked the button, the program will calculate the volume of the cylinder.

// Put preventDefault()
// Get tje value of the height and radius
// Calculate the volume of the cylinder
// Return the calculated value up to 2 decimal places and display it in the id="volume" element.

function calculateVolume(e) {
    e.preventDefault();
    let height = document.getElementById("height").value;
    let radius = document.getElementById("radius").value;
    let volume = Math.PI * Math.pow(radius, 2) * height;
    document.getElementById("volume").innerHTML = volume.toFixed(2);
}

// 실행 및 채점을 위한 코드입니다. 수정하지 말아주세요.
const button = document.getElementById("calc")
button.addEventListener("click", calculateVolume)