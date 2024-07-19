document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    
    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('menu-open');
        menu.classList.toggle('menu-open');
    });
});




document.getElementById('toggleButton').addEventListener('click', function() {
    const infoBlock = document.getElementById('infoBlock');
    if (infoBlock.classList.contains('hidden')) {
      infoBlock.classList.remove('hidden');
    } else {
      infoBlock.classList.add('hidden');
    }
  });


  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
      header.classList.add('red');
    } else {
      header.classList.remove('red');
    }
  });








  //quote api gen
  const button = document.getElementById('getQuoteButton');
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');

    button.addEventListener('click', getQuote);

    function getQuote() {
      fetch("https://type.fit/api/quotes")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // Pick a random quote from the data
          const randomQuote = data[Math.floor(Math.random() * data.length)];
          
          // Update the quote and author elements
          quoteText.textContent = randomQuote.text;
          authorText.textContent = `- ${randomQuote.author || 'Unknown'}`;
        });
    }



    const BASE_URL = 'https://backend-4-g9hl.onrender.com/'

// Fetch the root message
fetch(`${BASE_URL}/`)
  .then(response => response.json())
  .then(data => console.log('Root Message:', data))
  .catch(error => console.error('Error fetching root message:', error));

// Fetch all articles
fetch(`${BASE_URL}/articles/`)
  .then(response => response.json())
  .then(data => console.log('Articles:', data))
  .catch(error => console.error('Error fetching articles:', error));

// Example data for creating an article
const articleData = {
  title: "New Article",
  content: "Content of the new article",
  author: "Author Name"
};

// Create a new article
fetch(`${BASE_URL}/articles/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(articleData)
})
.then(response => response.json())
.then(data => console.log('Created Article:', data))
.catch(error => console.error('Error creating article:', error));
