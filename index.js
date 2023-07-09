
$(document).ready(function() {
    // Variable to store the fetched quotes
    var quotesData;
  
    // Fetch quotes from the JSON file
    function fetchQuotes() {
      $.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', function(data) {
        // Store the fetched quotes in the variable
        quotesData = data.quotes;
  
        // Display a random quote from the fetched quotes
        displayRandomQuote();
      });
    }
  
    // Function to display a random quote
    function displayRandomQuote() {
      // Select a random quote from the stored quotes
      var randomIndex = Math.floor(Math.random() * quotesData.length);
      var randomQuote = quotesData[randomIndex];
          var tweetUrl = "https://twitter.com/intent/tweet?hashtags=quotes&related=kirankuyate&text=" + encodeURIComponent('"' + randomQuote.quote + '" - ' + randomQuote.author);
        // console.log(randomQuote.quote)
        $('#q-text').text(randomQuote.quote);
        $('#a-text').text(randomQuote.author);
  
      $('#tweet-quote').attr('href', tweetUrl);
      
    }
   
    // Call fetchQuotes() when the page loads
    fetchQuotes();
  
    // Bind the 'New quote' button to display a new quote
    $('#new-quote').on('click', function() {
      displayRandomQuote();
    });
    
    
    function setRandomColors() {
      var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      $('.button').css('background-color', randomColor);
      $('.wrapper').css('background-color', randomColor);
    }
  
    // Call setRandomColors() when the page loads
    setRandomColors();
  
    // Bind the 'New quote' button to set new random colors
    $('#new-quote').on('click', function() {
      setRandomColors();
    });
  });
  
  