'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the element with id "target"
    const target = document.getElementById('target');

    // Use a for loop to iterate through the 'students' array
    for (let i = 0; i < students.length; i++) {
        // Create a new <option> element
        const option = document.createElement('option');

        // Set the value and text content of the <option> element
        option.value = students[i].id;
        option.textContent = students[i].name;

        // Append the <option> element to the "target" <select> element
        target.appendChild(option);
    }
});
