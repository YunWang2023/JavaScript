function checkLeapYear() {
            // Get the input value
            const year = parseInt(document.getElementById('yearInput').value);

            // Check if the year is a leap year
            let isLeap = false;
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                isLeap = true;
            }

            // Display the result
            const resultElement = document.getElementById('result');
            if (isNaN(year)) {
                resultElement.textContent = "Please enter a valid year.";
            } else if (isLeap) {
                resultElement.textContent = year + " is a leap year.";
            } else {
                resultElement.textContent = year + " is not a leap year.";
            }
        }