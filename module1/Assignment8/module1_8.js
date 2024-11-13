        // Prompt the user for start and end years
        const startYearInput = prompt("Enter the start year:");
        const endYearInput = prompt("Enter the end year:");

        // Parse inputs as integers
        const startYear = parseInt(startYearInput);
        const endYear = parseInt(endYearInput);

        const listContainer = document.getElementById('leapYearList');

        if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
            listContainer.innerHTML = "<p>Please enter valid start and end years, with the start year less than or equal to the end year.</p>";
        } else {
            // Create an unordered list element
            const ul = document.createElement('ul');

            // Loop through the years and check if each year is a leap year
            for (let year = startYear; year <= endYear; year++) {
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                    // Create a list item for each leap year and append it to the unordered list
                    const li = document.createElement('li');
                    li.textContent = year;
                    ul.appendChild(li);
                }
            }

            // Append the list to the container in the HTML document
            if (ul.children.length > 0) {
                listContainer.appendChild(ul);
            } else {
                listContainer.innerHTML = "<p>No leap years found in the given range.</p>";
            }
        }