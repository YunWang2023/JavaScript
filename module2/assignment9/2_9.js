        // Function to filter even numbers from an array
        function even(numbersArray) {
            // Return a new array containing only the even numbers
            return numbersArray.filter(number => number % 2 === 0);
        }

        // Example usage
        function main() {
            // Example array
            let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            // Get the even numbers
            let evenNumbers = even(inputArray);

            // Display results
            document.getElementById("output").textContent =
                `Original Array: [${inputArray}] \nEven Numbers: [${evenNumbers}]`;
        }

        window.onload = main;