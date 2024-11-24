'use strict';
const names = ['John', 'Paul', 'Jones'];

// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the element with id "target"
    const target = document.getElementById('target');

    // Use a for loop to iterate through the 'names' array
    for (let i = 0; i < names.length; i++) {
        // Create a new <li> element
        const li = document.createElement('li');

        // Set the text content of the <li> element to the current name
        li.textContent = names[i];

        // Append the <li> element to the "target" element
        target.appendChild(li);
    }
});
