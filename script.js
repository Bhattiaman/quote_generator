const quoteDisplay = document.getElementById('quoteDisplay');
const generateQuoteBtn = document.getElementById('generateQuote');

function fetchRandomQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteDisplay.textContent = `"${data.content}" - ${data.author}`;
    })
    .catch(error => {
      quoteDisplay.textContent = 'Failed to fetch the quote. Please try again later.';
      console.error('Error fetching quote:', error);
    });
}

generateQuoteBtn.addEventListener('click', fetchRandomQuote);

// Fetch a quote when the page loads
fetchRandomQuote();
