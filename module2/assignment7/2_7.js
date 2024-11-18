        // Function to simulate rolling a dice with a specified number of sides
        function rollDice(sides) {
            return Math.floor(Math.random() * sides) + 1;
        }

        function main() {
            // Prompt user for the number of sides on the dice
            let sides = parseInt(prompt("Enter the number of sides on the dice:"), 10);

            if (isNaN(sides) || sides < 2) {
                alert("Please enter a valid number greater than or equal to 2.");
                return;
            }

            // Create the unordered list element
            let ul = document.createElement("ul");
            document.body.appendChild(ul);

            let roll = rollDice(sides);
            while (roll !== sides) {
                let li = document.createElement("li");
                li.textContent = roll;
                ul.appendChild(li);
                roll = rollDice(sides);
            }

            // Add the final roll (maximum number) to the list
            let li = document.createElement("li");
            li.textContent = roll;
            ul.appendChild(li);
        }

        window.onload = main;