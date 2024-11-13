  // Prompt the user for the number of dice and the target sum
        const numDiceInput = prompt("Enter the number of dice:");
        const targetSumInput = prompt("Enter the target sum of dice rolls:");

        // Parse inputs
        const numDice = parseInt(numDiceInput);
        const targetSum = parseInt(targetSumInput);
        const numSimulations = 10000;

        const resultElement = document.getElementById('result');

        if (isNaN(numDice) || isNaN(targetSum) || numDice <= 0 || targetSum <= 0) {
            resultElement.textContent = "Please enter valid positive numbers for both the number of dice and the target sum.";
        } else {
            let successfulRolls = 0;

            // Run the simulation 10,000 times
            for (let i = 0; i < numSimulations; i++) {
                let sum = 0;

                // Roll the dice and calculate the sum
                for (let j = 0; j < numDice; j++) {
                    sum += Math.floor(Math.random() * 6) + 1;
                }

                // Check if the sum matches the target sum
                if (sum === targetSum) {
                    successfulRolls++;
                }
            }

            // Calculate the probability
            const probability = (successfulRolls / numSimulations) * 100;

            // Display the result with limited decimals
            resultElement.textContent = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`;
        }