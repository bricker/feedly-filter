var highlightMatchers = [
  /washingtonpost\.com\/video/,
  /cnn\.com\/video/
];

function feedlyLoop() {
  var cards = document.querySelectorAll("div.entry:not(.__bcr_filtered)");
  for (var i=0; i < cards.length; i++) {
    var card = cards[i];
    card.classList.add("__bcr_filtered");

    // Remove title attribute
    var link = card.querySelector(".content a.title");
    link.removeAttribute("title");

    // Highlight videos
    for (var j=0; j < highlightMatchers.length; j++) {
      var filter = highlightMatchers[j]
      if (card.dataset.alternateLink.match(filter)) {
        card.style.backgroundColor = "#ffcccc";
      }
    }
  }
}

setInterval(feedlyLoop, 3000);
