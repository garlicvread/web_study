/*
When N is a multiple of 5, print operator 1 as N times.
When N is a multiple of 3, print operator 2 as N times.
When N is a multiple of both 5 and 3, print nothing.
Else, print both operators as N times.

Input: o1: operator 1, o2: operator 2, num: number

Example input 1: +4-
Example output 1: ++++----

Example input 2: *10/
Example output 2: **********
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let s;

rl.on("line", function (line) {
    s = line.split("");
    rl.close();
}).on("close", function () {
    let o1 = s[0]; // operator 1
    let o2 = s[s.length - 1]; // operator 2
    s.pop(); // remove last operator
    s.shift(); // remove first operator
    s = s.join(""); // convert array to string

    let num = parseInt(s); // number

    if (num % 5 === 0 && num % 3 === 0) {
    } else if (num % 5 === 0) {
        console.log(o1.repeat(num));
    } else if (num % 3 === 0) {
        console.log(o2.repeat(num));
    } else {
        console.log(o1.repeat(num) + o2.repeat(num));
    }
});
