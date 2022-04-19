// 1. declare var1 ~ var5 which are printed in 여러 개의 script.html.
// 2. declare var 5 which is printed in 여러 개의 script2.js.
// 3. set the value of variables to get: Welcome, HaHaHa, 55, Elice, Good Job!


// document.write('Wel' + var1 + '<br>')
// document.write(var2.repeat(3) + '<br>')
// document.write(var3*5 + '<br>')
// document.write(var4['name'] + '<br>')

var var1 = "come";
var var2 = "Ha";
var var3 = 11;
var var4 = {name: "Elice"};
var var5 = "Good Job!";


// function: getDouble
// declare a function called getDouble
// return the value of the parameter twice in a string
// The function is called in index.html
// Example: abcabc
// Example: WelcomeWelcome
// Example: doubledouble

// declare a function called getDouble
function getDouble(str) {
    // return the value of the parameter twice in a string
    return str + str;
}


// Building a Pyramid
// Example input: 3
// Example output:
//   *
//  ***
// *****


function pyramid(num) {
    let result = "";
    // for each layer, the * increases by 2.
    // so, the number of * is 1, 3, 5, 7, 9, ...
    for (let i = 1; i <= num; i++) {
        // for each layer, the number of space added at the beginning is num - i.
        for (let j = 0; j < num - i; j++) {
            result += " ";
        }

        // for each *, add 2 * to the result
        // line change is needed

        for (let j = 1; j <= i*2-1; j++) {
            result += "*";
        }

        // add a new line
        result += "\n";
    }
    console.log(result);
    return result;
}

num = 3;
pyramid(num);

pyramid(3);
console.log('\n');
pyramid(5);
console.log('\n');
pyramid(7);
console.log('\n');