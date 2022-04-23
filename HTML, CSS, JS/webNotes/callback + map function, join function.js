// Callback function  + map() function
nums = [1, 2, 3, 4, 5];

// An example of callback function with map() function.
// The map() function is used to apply a function to each element of an array.
// The map() function returns a new array with the results.


// Example 1
function square(num) {
    return num * num;
}

let numSquared = nums.map(square);
console.log('Squared Array', numSquared);


// Example 2
function change(num) {
    // Change all the element of nums to 1.
    return 1;
}

let numToOne = nums.map(change);
console.log('Modified Array: ', numToOne);


// Example 3
function multiplyByThousand(num) {
    // console.log(num);
    return `<li>${num}</li>`;
}

let numsToHtml = nums.map(multiplyByThousand);
console.log('HTML Array: ', numsToHtml);


// ==========================================================
// join() function examples
let join1 = ['a', 'b', 'c'].join('-');
console.log('Join 1: ', join1);


let join2 = ['a', 'b', 'c'].join('*************');
console.log('Join 2: ', join2);


// ==========================================================
// join() function + arrow function examples
let join3 = nums.map(num => {
    return `<li>${num}</li>`;
}).join('');
console.log('Join 3: ', join3);


let join4 = nums.map(num => `<li>${num}</li>`).join('');
console.log('Join 4: ', join4);
