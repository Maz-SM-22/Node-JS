const cq = require('crazy-quotes'); 

const getYodaQuotes = ()=> {
    const quotes = cq.allQuote(type = 'Movie')
    yodaQuotes = quotes.filter((quote)=> quote.character === 'Yoda')
    return yodaQuotes.map((quote) => quote.quote); 
} 

// console.log(getYodaQuotes()); 

const getRandomQuote = ()=> {
    return cq.oneQuote(type = 'Movie').quote; 
}

// console.log(getRandomQuote()); 

const getRandomYodaQuote = () => {
    const yodaQuotes = getYodaQuotes(); 
    const randomIndex = Math.floor(Math.random() * yodaQuotes.length); 
    return yodaQuotes[randomIndex]; 
}

// console.log(getRandomYodaQuote())