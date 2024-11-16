        // Initialize an empty array to store dog names
        let dogNames = [];

        // Collect names of six dogs
        for (let i = 0; i < 6; i++) {
            let name = prompt(`Enter the name of dog ${i + 1}:`);
            dogNames.push(name);
        }

        // Sort dog names in reverse alphabetical order
        dogNames.sort().reverse();

        // Create an unordered list element
        let ul = document.createElement("ul");

        // Append each dog's name as a list item in the unordered list
        dogNames.forEach((name) => {
            let li = document.createElement("li");
            li.textContent = name;
            ul.appendChild(li);
        });

        // Display the unordered list in the div with id="dog-list"
        document.getElementById("dog-list").appendChild(ul);