let fruits = ["apple", "orange", "cherry"];

function myFunction(item, index) {
    document.write(index + ":" + item + "<br>");
}

for (let i = 0; i < 3; i++) {
    document.write(i);
    document.write(":" + fruits[i] + "<br>");
}

// Print the same result as above, but use forEach() method
fruits.forEach(myFunction);
