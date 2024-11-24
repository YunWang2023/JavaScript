document.addEventListener('DOMContentLoaded', () => {
    // Select the element with id "target"
    const target = document.getElementById('target');

    // Create an array of list item texts
    const items = ['First item', 'Second item', 'Third item'];

    // Iterate through the array and create <li> elements
    items.forEach((text, index) => {
        // Create a new <li> element
        const li = document.createElement('li');

        // Set the text content of the <li> element
        li.textContent = text;

        // Add the "my-item" class to the second item (index 1)
        if (index === 1) {
            li.classList.add('my-item');
        }

        // Append the <li> element to the "target" element
        target.appendChild(li);
    });
});
