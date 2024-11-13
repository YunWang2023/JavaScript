 // Show a confirmation window asking if the user wants to calculate the square root
        if (confirm("Should I calculate the square root?")) {
            // If user selects OK, prompt for a number
            const input = prompt("Enter a number:");
            const number = parseFloat(input);

            const outputElement = document.getElementById('output');

            // Check if the input is a valid number
            if (isNaN(number)) {
                outputElement.textContent = "Please enter a valid number.";
            } else if (number < 0) {
                // If the number is negative, show an error message
                outputElement.textContent = "The square root of a negative number is not defined.";
            } else {
                // Calculate the square root and display the result
                const squareRoot = Math.sqrt(number);
                outputElement.textContent = "The square root of " + number + " is " + squareRoot + ".";
            }
        } else {
            // If user selects Cancel, display the appropriate message
            document.getElementById('output').textContent = "The square root is not calculated.";
        }