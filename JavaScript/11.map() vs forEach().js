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
