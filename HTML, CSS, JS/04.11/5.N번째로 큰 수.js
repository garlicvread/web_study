// Find the ntn largest numbers in an array.
// In the first line, several space-separated integers.
// In the second line, an integer N will be given.
// With these input, you need to find Nth largest number in the array.

// Example of the first input: 3766 872 987
// Example of the second input: 2
// Example of the output: 987

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let input = [];

// Find the Nth largest number of the array "arr"
// Solution 1
rl.on('line', function(line) {
    count++;
    // Split the first input then map each element to a number by using parseInt().
    // Then, sort the parsed numbers in descending order then push them to the array "input".
    input.push(line.split(' ').map((i) => parseInt(i)).sort((next, prev) => prev - next));
    // (next, prev) => prev - next): When prev - next > 0, change the order of the array.
    // When prev - next < 0, keep the order of the array.

    // If you want to sort the array in ascending order,
    // then you can use .sort((next, prev) => next - prev).

    // console.log('input', input);
    // console.log('count', count);

    if (count === 2) {
        let answer = input[0][input[1] - 1];
        console.log(answer);
        rl.close();
    }
}).on('close', function() {
    process.exit(0);
});


// // Solution 2
// rl.on('line', function(x) {
//     count++;
//     input.push(x);
//     if (count === 2) {
//         rl.close();
//     }
// }).on('close', function() {
//     // This solution handles the data in 'close' event.
//     const arrayToHandle = input[0].split(' ');
//     const N = input[1];
//     arrayToHandle.sort(function (a, b) {
//         return parseInt(b) - parseInt(a);
//     })
//     console.log(arrayToHandle[N - 1]);
//     process.exit(0);
// });
