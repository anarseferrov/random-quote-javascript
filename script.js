var quotes = [{
        quote: 'Keep your face always toward the sunshine - and shadows will fall behind you.',
        source: "―Walt Whitman",
    },
    {
        quote: 'Go so far away that you stop being afraid of not coming back.',
        source: '―Eve Ensler',
    },
    {
        quote: "Live Long and Prosper",
        source: "―Mr. Spock",
    },
    {
        quote: "Yadda Yadda Yadda",
        source: "―Jerry Seinfeld",
    },
    {
        quote: 'We are what we pretend to be, so we must be careful about what we pretend to be.',
        source: '―Kurt Vonnegut',
    },
    {
        quote: 'Be yourself; everyone else is already taken.',
        source: '― Oscar Wilde'

    }
]

function getRandomQuotes() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    return quotes[randomNumber]
}

function printQuotes() {
    var currentQuote = getRandomQuotes();
    var html = '';
    var quoteDiv = document.getElementById('container');
    html += '<p class="quote">' + currentQuote.quote
    html += '</p>'
    html += '<p class="source">' + currentQuote.source
    html += '</p>'
    quoteDiv.innerHTML = html;
    setBackgroundColor();
}

function setBackgroundColor() {
    var randomNumber = Math.floor(Math.random() * 7);
    if (randomNumber == 0) {
        document.body.style.backgroundColor = '#800000';
    }
    if (randomNumber == 1) {
        document.body.style.backgroundColor = '#DAA520';
    }
    if (randomNumber == 2) {
        document.body.style.backgroundColor = '#20B2AA';
    }
    if (randomNumber == 3) {
        document.body.style.backgroundColor = '#134a47';
    }
    if (randomNumber == 4) {
        document.body.style.backgroundColor = '#134a47';
    }
    if (randomNumber == 5) {
        document.body.style.backgroundColor = '#4f6742';
    }
    if (randomNumber == 6) {
        document.body.style.backgroundColor = '#2859b8';
    }
}
document.getElementById('loadQuote').addEventListener("click", printQuotes, false)
setInterval(printQuotes, 10000)