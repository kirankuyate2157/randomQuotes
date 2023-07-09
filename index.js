$(document).ready(function () {
  // Variable to store the fetched quotes
  var quotesData;

  // Fetch quotes from the JSON file
  function fetchQuotes() {
    $.getJSON(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      function (data) {
        // Store the fetched quotes in the variable
        quotesData = data.quotes;

        // Display a random quote from the fetched quotes
        displayRandomQuote();
      }
    );
  }

  // Function to display a random quote
  function displayRandomQuote() {
    // Select a random quote from the stored quotes
    var randomIndex = Math.floor(Math.random() * quotesData.length);
    var randomQuote = quotesData[randomIndex];
    var tweetUrl =
      "https://twitter.com/intent/tweet?hashtags=quotes&related=kirankuyate&text=" +
      encodeURIComponent('"' + randomQuote.quote + '" - ' + randomQuote.author);
    // console.log(randomQuote.quote)
    $("#text").text(randomQuote.quote);
    $("#author").text(randomQuote.author);

    $("#tweet-quote").attr("href", tweetUrl);
  }

  // Call fetchQuotes() when the page loads
  fetchQuotes();

  // Bind the 'New quote' button to display a new quote
  $("#new-quote").on("click", function () {
    displayRandomQuote();
  });

  function setRandomColors() {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    $(".button").css("background-color", randomColor);
    $("body").css("background-color", randomColor);
  }

  // Call setRandomColors() when the page loads
  setRandomColors();

  // Bind the 'New quote' button to set new random colors
  $("#new-quote").on("click", function () {
    setRandomColors();
  });

  function overlayQuoteText(canvas, quoteText) {
    var ctx = canvas.getContext("2d");
    ctx.font = "bold 28px Arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(quoteText, canvas.width / 2, canvas.height / 2);
  }

  // Function to capture a screenshot, overlay the quote, and share it on LinkedIn
  function shareOnLinkedIn() {
    html2canvas(document.querySelector("#wrapper")).then(function (canvas) {
      var quoteText = "Your quote text goes here"; // Replace with the actual quote text
      overlayQuoteText(canvas, quoteText);

      var imageData = canvas.toDataURL("image/jpeg", 0.8);
      var encodedImageData = encodeURIComponent(imageData);
      var linkedInShareUrl =
        "https://www.linkedin.com/sharing/share-offsite/?url=" +
        encodedImageData;
      window.open(linkedInShareUrl);
    });
  }

  // Bind the 'LinkedIn quote' button to capture the screenshot, overlay the quote, and share it on LinkedIn
  $("#linkedin-quote").on("click", function () {
    shareOnLinkedIn();
  });
  function shareOnInstagram() {
    html2canvas(document.querySelector("#wrapper")).then(function (canvas) {
      var quoteText = "Your quote text goes here"; // Replace with the actual quote text
      overlayQuoteText(canvas, quoteText);

      var imageData = canvas.toDataURL("image/jpeg", 0.8);
      var encodedImageData = encodeURIComponent(imageData);
      var instagramShareUrl =
        "https://www.instagram.com/upload/image/?url=" + encodedImageData;
      window.open(instagramShareUrl);
    });
  }

  // Bind the 'Instagram quote' button to capture the screenshot, overlay the quote, and share it on Instagram
  $("#instagram-quote").on("click", function () {
    shareOnInstagram();
  });
  //   // Function to take a screenshot and share it on LinkedIn
  //   function shareOnLinkedIn() {
  //     html2canvas(document.querySelector("#wrapper")).then(function (canvas) {
  //       var imageData = canvas.toDataURL("image/png");
  //       var encodedImageData = encodeURIComponent(imageData);
  //       var linkedInShareUrl =
  //         "https://www.linkedin.com/sharing/share-offsite/?url=" +
  //         encodedImageData;
  //       window.open(linkedInShareUrl);
  //     });
  //   }

  //   // Bind the 'LinkedIn quote' button to take a screenshot and share it on LinkedIn
  //   $("#linkedin-quote").on("click", function () {
  //     shareOnLinkedIn();
  //   });

  function createRaindrops() {
    const numRaindrops = 50; // Number of raindrops to create

    for (let i = 0; i < numRaindrops; i++) {
      const raindrop = document.createElement("div");
      raindrop.classList.add("rain");
      raindrop.style.right = Math.random() * window.innerWidth + "px";
      raindrop.style.animationDelay = Math.random() * 5 + "s";

      document.body.appendChild(raindrop);
    }
  }

  // Call the function to create the raindrops when the page loads
  window.addEventListener("load", createRaindrops);
});
