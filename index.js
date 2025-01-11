// select all elements
let Bill = document.getElementById("billAmount")
let Tip = document.getElementById("tipPercent");
let Person = document.getElementById("peopleCount");
let Button = document.getElementById("calculateBtn");
let Display = document.getElementById("tipAmount");
let Display2 = document.getElementById("totalPerPerson");

// add event listener to button
Button.addEventListener("click", function() {
    // Get input values
    let billValue = parseFloat(billAmount.value);
    let tipValue = parseFloat(tipPercent.value);
    let person = parseFloat(peopleCount.value);

    // Validate inputs
    if (isNaN(billValue) || isNaN(tipValue) || isNaN(person) || billValue <= 0 || tipValue < 0 || person <= 0) {
        alert('Please enter valid values for bill, tip percentage, and number of people!');
        return;
    }
    // tip percentage 
    let tip = (billValue * tipValue) / 100;
    console.log(tip);

    // total amount 
    let total = (billValue + tip);
    console.log(total);

    // tip and total bill on per perosn 

    let TotalPerPerson = (billValue + tip) / person;
    console.log(TotalPerPerson);

    // output values to display elements
    Display.textContent = `Total Bill Amount: $${total.toFixed(2)}`;
    Display2.textContent = `Per Person Tip: $${TotalPerPerson.toFixed(2)}`;
});