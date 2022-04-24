var form = document.getElementById("form");
var input = document.getElementById("input");
var answer = document.getElementById("answer");

form.addEventListener("submit", function (e) {
    // If the provability of rain >=- 50% then bring an umbrella
    // but else, don't bring an umbrella.

    // inputData: number of percent.
    // outputData: string of "bring an umbrella" or "don't bring an umbrella".
    // if the probability of rain >=- 50% then bring an umbrella
    // else don't bring an umbrella.

    // Print the result in <h3 id="answer">답안</h3>.

    let probability = input.value;
    let outputData = "";

    if (probability >= 50) {
        outputData = "우산을 챙긴다.";
    } else {
        outputData = "그냥 간다.";
    }

    answer.innerHTML = outputData;
    e.preventDefault();
    form.reset();
});
