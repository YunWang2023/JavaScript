 // Prompt the user for an integer
        const input = prompt("Enter an integer:");
        const number = parseInt(input);

        const resultElement = document.getElementById('result');

        // Check if the input is a valid integer
        if (isNaN(number) || number < 2) {
            resultElement.textContent = "Please enter an integer greater than 1.";
        } else {
            let isPrime = true;

            // Check divisibility only up to the square root of the number
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            // Display the result
            if (isPrime) {
                resultElement.textContent = number + " is a prime number.";
            } else {
                resultElement.textContent = number + " is not a prime number.";
            }
        }