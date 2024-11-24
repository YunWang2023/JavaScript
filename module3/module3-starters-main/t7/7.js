'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Select the elements
    const img = document.getElementById('target');
    const trigger = document.getElementById('trigger');

    // Add a mouseover event listener to the paragraph
    trigger.addEventListener('mouseover', () => {
        // Change the image source to picB.jpg
        img.src = 'img/picB.jpg';
    });

    // Add a mouseout event listener to the paragraph
    trigger.addEventListener('mouseout', () => {
        // Change the image source back to picA.jpg
        img.src = 'img/picA.jpg';
    });
});
