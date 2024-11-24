'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Select the form element
    const form = document.getElementById('search-form');

    // Add an event listener for form submission
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the value entered in the input field
        const query = document.getElementById('query').value.trim();

        // Ensure input is not empty
        if (!query) {
            console.log('Please enter a TV show name.');
            return;
        }

        // Construct the API URL
        const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

        try {
            // Fetch data from the API
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data from the TVMaze API');
            }

            // Parse the JSON response
            const data = await response.json();

            // Log the search results to the console
            console.log('Search Results:', data);

            if (data.length === 0) {
                console.log('No results found.');
            } else {
                data.forEach((result, index) => {
                    console.log(`${index + 1}: ${result.show.name}`);
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
