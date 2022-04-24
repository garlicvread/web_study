// Reference: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// reduce() function returns only one value after running the given function for the elements of the array.
// Thus, while the map() function modifies the elements of the array,
// the reduce() function modifies the array itself as a whole.
//
// The most typical example of the reduce() function is returning the sum of all the elements of an array,
// or literally reducing the array to a single value.


// How to use reduce() function:
// arrayToProcess.reduce((cumulative value, current value, index, element) => { return result }, initial value)

// Note that the first argument of reduce function is not the previous value but the cumulative value.

let numbers = [175, 50, 25];

document.write(numbers.reduce(myFunc)); // myFunc(175, 50) => myFunc(125, 25) => 100

function myFunc(total, num) {
    return total - num;
}
