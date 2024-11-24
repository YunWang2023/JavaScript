'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        const query = document.getElementById('query').value.trim();
        const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data); // Log the entire JSON response to the console

            if (data.length === 0) {
                console.log('No results found.');
            } else {
                console.log('Search Results:');
                data.forEach((show, index) => {
                    console.log(`${index + 1}: ${show.show.name}`);
                });
            }
        } catch (error) {
            console.error('Error fetching the TV show data:', error);
        }
    });
});
