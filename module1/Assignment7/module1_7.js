  // Ask the user for the number of dice rolls
        const input = prompt("Enter the number of dice rolls:");
        const numRolls = parseInt(input);

        const resultElement = document.getElementById('result');

        if (isNaN(numRolls) || numRolls <= 0) {
            resultElement.textContent = "Please enter a valid positive number of dice rolls.";
        } else {
            let sum = 0;
            for (let i = 0; i < numRolls; i++) {
                // Generate a random number between 1 and 6 (inclusive)
                const roll = Math.floor(Math.random() * 6) + 1;
                sum += roll;
            }

            // Display the sum of the dice rolls
            resultElement.textContent = "The sum of the dice rolls is: " + sum;
            console.log("The sum of the dice rolls is: " + sum);
        }