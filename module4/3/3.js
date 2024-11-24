'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const resultsContainer = document.getElementById('results');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent page reload

        // Get the input value
        const query = document.getElementById('query').value.trim();

        // Clear previous results
        resultsContainer.innerHTML = '';

        // Validate input
        if (!query) {
            resultsContainer.textContent = 'Please enter a TV show name.';
            return;
        }

        // Fetch data from the API
        const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data from the TVMaze API');
            }

            const data = await response.json();

            // Handle no results
            if (data.length === 0) {
                resultsContainer.textContent = 'No results found.';
                return;
            }

            // Create and append elements for each show
            data.forEach((tvShow) => {
                const { show } = tvShow;

                // Create article for each TV show
                const article = document.createElement('article');

                // Create h2 for the show name
                const h2 = document.createElement('h2');
                h2.textContent = show.name;
                article.appendChild(h2);

                // Create a link to the show details
                const link = document.createElement('a');
                link.href = show.url;
                link.target = '_blank';
                link.textContent = 'More Details';
                article.appendChild(link);

                // Create image element if available
                if (show.image?.medium) {
                    const img = document.createElement('img');
                    img.src = show.image.medium;
                    img.alt = show.name;
                    article.appendChild(img);
                }

                // Create a div for the summary
                const summaryDiv = document.createElement('div');
                summaryDiv.innerHTML = show.summary || 'No summary available.';
                article.appendChild(summaryDiv);

                // Append the article to the results container
                resultsContainer.appendChild(article);
            });
        } catch (error) {
            console.error('Error:', error);
            resultsContainer.textContent = 'An error occurred while fetching the data.';
        }
    });
});
