// Return the inputted string as it was.

const readline = require('readline'); // Using require() function, import the readline module from node.js.

const rl = readline.createInterface({ // Using createInterface() function of readline module, create an instance of readline interface.
    input: process.stdin, // Using input property, set the input stream to process.stdin.
    output: process.stdout // Using output property, set the output stream to process.stdout.
});


// Solution1
rl.on ('line', function(line){ // Using on() method of readline interface, listen to the 'line' event.
    console.log(line); // Using console.log() function, print the inputted string.
    rl.close(); // Using close() method of readline interface, close the interface.
}); // end of rl.on()


// Solution2
rl.on ('line', function(x){ // Using on() method of readline interface, listen to the 'x' event.
    if (x === 'exit') { // If the inputted string is 'exit',
        rl.close(); // Close the readline interface.
    }
    console.log(x);
}).on('close', function(){ // Using on() method of readline interface, listen to the 'close' event.
    process.exit(); // Exit the process.
});


// Solution3
let inputs = []; // Declare an empty array.

rl.on('line', function(x){ // Using on() method of readline interface, listen to the 'x' event.
    inputs.push(x); // Push the inputted string into the array.

    if (x === 'exit') { // If the inputted string is 'exit',
        rl.close(); // Close the readline interface.
    }
}).on('close', function(){ // Using on() method of readline interface, listen to the 'close' event.
    inputs.map(function(input) { // Using map() method of array, map the array to print the inputted string.
        console.log(input); // Print the inputted strings.
    });
    process.exit(); // Exit the process.
});
