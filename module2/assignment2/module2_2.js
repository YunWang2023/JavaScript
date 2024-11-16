        // Prompt user for the number of participants
        let numParticipants = parseInt(prompt("Enter the number of participants:"), 10);

        // Initialize an empty array to store participant names
        let participants = [];

        // Collect each participant's name
        for (let i = 0; i < numParticipants; i++) {
            let name = prompt(`Enter the name of participant ${i + 1}:`);
            participants.push(name);
        }

        // Sort the participant names alphabetically
        participants.sort();

        // Create an ordered list element
        let ol = document.createElement("ol");

        // Append each participant's name as a list item in the ordered list
        participants.forEach((name) => {
            let li = document.createElement("li");
            li.textContent = name;
            ol.appendChild(li);
        });

        // Display the ordered list in the div with id="participant-list"
        document.getElementById("participant-list").appendChild(ol);