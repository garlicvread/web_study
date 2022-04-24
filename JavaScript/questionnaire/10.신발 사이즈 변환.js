// mm --> inch, inch --> shoe size
// THe converting formula is:
// mm -> inch conversion: inch = mm / 25.4
// inch -> shoe size conversion in United States = (3 * inches) - 22
// inch -> shoe size conversion in United Kingdom = (3 * inches) - 23
// inch -> shoe size conversion in EU = 1.27 * (ukSize + 23) + 2

// Put preventDefault().
// Get the inputted value(mm).
// Convert mm to inch.
// Calculate the shoe size in US, UK, EU.
// Print the result for each country up to 2 decimal places.

// The HTML code is as follows:
// <form id="checkVolume" action="" method="post" onSubmit="calculate()">
//     <label htmlFor="mm">mm</label>
//     <input type="text" name="mm" id="mm" required/>
//
//     <input type="submit" value="calculate" id="calc"/>
//     <br/>
//     <label htmlFor="us_size">US Size</label>
//     <input type="text" name="us_size" id="us_size"/>
//
//     <br/>
//
//     <label htmlFor="uk_size">UK Size</label>
//     <input type="text" name="uk_size" id="uk_size"/>
//
//     <br/>
//
//     <label htmlFor="eu_size">EU Size</label>
//     <input type="text" name="eu_size" id="eu_size"/>
// </form>

function calculate(e) {
    e.preventDefault();

    // When the <input> element from <input type="submit" value="calculate" id="calc" /> is clicked, get the inputted value(mm) from <label htmlFor="mm">mm</label>.
    const mm = document.getElementById("mm").value;
    console.log('mm val', mm);

    // Convert mm to inch.
    let inch = mm / 25.4;
    console.log('inch val', inch);

    // Calculate the shoe size in US, UK, EU.
    let us_size = (3 * inch) - 22;
    console.log('us_size val', us_size);

    let uk_size = (3 * inch) - 23;
    console.log('uk_size val', uk_size);

    let eu_size = 1.27 * (uk_size + 23) + 2;
    console.log('eu_size val', eu_size);

    // Input us_size, uk_size, eu_size to <input type="text" name="us_size" id="us_size" />, <input type="text" name="uk_size" id="uk_size" />, <input type="text" name="eu_size" id="eu_size" /> respectively.
    document.getElementById("us_size").value = us_size.toFixed(2);
    document.getElementById("uk_size").value = uk_size.toFixed(2);
    document.getElementById("eu_size").value = eu_size.toFixed(2);
}

const button = document.getElementById("calc")
button.addEventListener("click", calculate)