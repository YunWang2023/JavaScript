        // Function to simulate rolling a dice (6-sided)
        function rollDice() {
            return Math.floor(Math.random() * 6) + 1;
        }

        function main() {
            // Create the unordered list element
            let ul = document.createElement("ul");
            document.body.appendChild(ul);

            let roll = rollDice();
            while (roll !== 6) {
                let li = document.createElement("li");
                li.textContent = roll;
                ul.appendChild(li);
                roll = rollDice();
            }
            
            // Add the final roll (6) to the list
            let li = document.createElement("li");
            li.textContent = roll;
            ul.appendChild(li);
        }

        window.onload = main;