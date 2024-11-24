document.addEventListener('DOMContentLoaded', () => {
    // Select the element with id "target"
    const target = document.getElementById('target');

    // Use innerHTML to add the list items
    target.innerHTML = `
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    `;

    // Add the "my-list" class to the target element
    target.classList.add('my-list');
});
