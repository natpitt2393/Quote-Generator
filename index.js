// Get Quotes From API
let apiQuotes = [];

function newQuote() {
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

async function getQuotes() {
    
        const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
        try {
            const response = await fetch(apiUrl);
            apiQuotes = await response.json();
            // console.log(apiQuotes);
            newQuote();
        } catch(error) {
            
            //Handle Catch Error Here
        }

        
}

getQuotes();

