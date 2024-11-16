// Initialize an empty array to store the numbers
let numbers = [];

// Collect numbers until the user enters 0
while (true) {
    let input = parseInt(prompt("Enter a number (or 0 to finish):"), 10);

    // Stop asking for numbers if the user enters 0
    if (input === 0) {
        break;
    }

    // Add the number to the array
    numbers.push(input);
}

// Sort the numbers in descending order
numbers.sort((a, b) => b - a);

// Print the sorted numbers to the console
console.log("Numbers from largest to smallest:");
numbers.forEach((num) => console.log(num));
