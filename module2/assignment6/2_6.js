// Function to simulate rolling a dice
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Main function to roll the dice until we get a 6
function main() {
    // Create the unordered list element
    let ul = document.createElement("ul");

    let rollResult = rollDice();

    // Roll the dice and add results to the list until we get a 6
    while (rollResult !== 6) {
        let li = document.createElement("li");
        li.textContent = rollResult;
        ul.appendChild(li);

        rollResult = rollDice();
    }

    // Add the final roll (which will be 6) to the list
    let finalLi = document.createElement("li");
    finalLi.textContent = rollResult;
    ul.appendChild(finalLi);

    // Display the unordered list in the HTML body
    document.body.appendChild(ul);
}

// Run the main function
main();
