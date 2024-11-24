'use strict';

// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the button element
    const button = document.querySelector('button');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        // Show an alert when the button is clicked
        alert('Button Clicked');
    });
});
