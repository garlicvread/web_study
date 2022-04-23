// How to declare a function in JavaScript:

// var checkSign = function() { }
// function checkSign() { }
// checkSign = () => {}

let checkSign = function (a) {
    if (a > 0) return "positive";
    else if (a < 0) return "negative";
    else return "zero";
};
