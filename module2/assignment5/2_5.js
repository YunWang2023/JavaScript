// Initialize an empty array to store unique numbers
let numbers = [];

// Start collecting numbers from the user
while (true) {
    let input = parseInt(prompt("Enter a number:"), 10);

    // Check if the entered number already exists in the array
    if (numbers.includes(input)) {
        console.log(`The number ${input} has already been entered. Stopping input.`);
        break;
    }

    // Add the number to the array if it hasn't been entered before
    numbers.push(input);
}

// Sort the numbers in ascending order
numbers.sort((a, b) => a - b);

// Print all the entered numbers to the console in ascending order
console.log("All entered numbers in ascending order:");
numbers.forEach((num) => console.log(num));
