const array = [4, 2, 2, 4, 34, 234, 123, 12, 324, 54, 6, 7, 77];

// for loop: traditional
for (let i; i < array.length; i++) {
    console.log(array[i]);
}

// forEach: modern 1
const forEachArray = array.forEach((item) => item * 2);
console.log(forEachArray);


// map: modern 2
const testArray = array.map((item) => item * 10);
console.log(testArray);

// reduce: modern 3
const reduceArray = array.reduce((acc, item) => acc + item);
console.log(reduceArray);


// factorial function with reduce() function
let facto_array = [];

for (let i = 1; i <= 10; i++) {
    facto_array.push(i);
}

const factorial = facto_array.reduce((acc, item) => acc * item);
// acc: accumulator
// item: item in array

console.log(factorial);


// Transform a second-dimensional array into a single-dimensional array
const givenArray = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
]

const resultArray = givenArray.reduce((acc, item) => acc.concat(item), []);
// concat: concatenate two arrays.
// concat() method is used to merge two or more arrays.

console.log(resultArray);


const givenArray2 = [[1, [2, [3, [4, 5]]]], 3, [4, 5]];

function flatten(array) {
    return array.reduce((acc, item) => {
        if (Array.isArray(item)) { // if item is an array
            return acc.concat(flatten(item)); // concat() method is used to merge two or more arrays.
        } else { // if item is not an array
            return acc.concat(item); // concat() method is used to merge two or more arrays.
        }
    }, []); // [] is the initial value of acc
}

console.log(flatten(givenArray2));